"use client";

import React, { useState } from "react";
import Hero from "@/components/ui/Hero";
import InlineLink from "@/components/ui/inlineLink";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    industry: "", // Added industry to the form state
    website: "", // Added website to the form state
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const apiData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      industry: formData.industry,
      website: formData.website,
    };

    try {
      // Send data to the email API
      const emailResponse = await fetch("/api/send-welcome-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error("Error response from email API:", errorData);
        setSubmitStatus("error");
        return;
      }

      console.log("Email sent successfully");

      // Send data to the Notion API
      const notionResponse = await fetch("/api/fill-notion-database", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      if (!notionResponse.ok) {
        const errorData = await notionResponse.json();
        console.error("Error response from Notion API:", errorData);
        setSubmitStatus("error");
        return;
      }

      const notionData = await notionResponse.json();
      console.log("Data added to Notion successfully", notionData);

      setSubmitStatus("success");

      // setTimeout(() => {
      //   window.location.href =
      //     "https://tidycal.com/wambuiswork/30-minute-discovery-call";
      // }, 2000); // Delay before redirecting
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting the form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Hero
        children={
          <div className="flex h-auto w-full flex-col justify-center gap-4 lg:w-1/2">
            <h4>Let&apos;s Bring Your Ideas to Life</h4>
            <p>
              Let&apos;s chat about your business goals and challenges. This is
              a chance to explore how we can create something impactful
              together.
            </p>
            <p>
              You can <InlineLink href="mailto:wambuiswork@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20there," link="email" /> me directly or
              simply fill out the form below, and I&apos;ll get back to you
              promptly.
            </p>
          </div>
        }
      />
      <section className="flex w-full justify-center">
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 shadow-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 shadow-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* New field for industry */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-black"
              >
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 shadow-sm"
                placeholder="Enter your industry"
              />
            </div>

            {/* New field for website */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-black"
              >
                Current Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 shadow-sm"
                placeholder="Enter your current website URL"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black"
              >
                What&apos;s Your Goal for the Call?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 shadow-sm"
                placeholder="Tell me what you'd like to discuss."
                rows={4}
              ></textarea>
            </div>

            {/* Error message display */}
            {submitStatus === "error" && (
              <div className="text-orange">
                There was an error submitting the form. Please try again.
              </div>
            )}

            {/* Success message display */}
            {submitStatus === "success" && (
              <div className="success-message">
                <p>Thank you for submitting! I'll be in touch soon.</p>
              </div>
            )}

            {/* Submit Button */}
            {submitStatus !== "success" && (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md border border-black bg-black py-3 font-semibold uppercase text-white transition-all hover:bg-white hover:text-black disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
