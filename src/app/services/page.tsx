import ServicesSection from "@/components/sections/ServicesSection";
import Hero from "@/components/ui/Hero";
import React from "react";

export default function Services() {
  return (
    <div>
      <Hero children={<h1 className="">My Services</h1>} />
      <ServicesSection />
    </div>
  );
}
