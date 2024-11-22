import React from "react";
import InlineLink from "../ui/inlineLink";

const AboutSection = () => {
  return (
    <div className="max-w-5xl mx-auto md:px-6 px-0 py-12 space-y-12">
      <Section
        title="Curiosity Fuels My Work"
        content={[
          [
            "I’ve always been fascinated by how things are made and why they work the way they do. As a kid, this curiosity took me on countless adventures—learning music, exploring the minds behind my favorite films, diving into math, understanding computers, and experimenting with graphic design.",
          ],
          [
            "This passion eventually led me to study Mathematics and Computer Science. In college, I discovered something profound: ",
            "analytical thinking and creative problem-solving can go hand in hand",
            ". That realization shaped my career in web design—a field where I could explore how things are built while crafting impactful, creative solutions.",
          ],
        ]}
      />
      <Section
        title="Websites That Drive Results"
        content={[
          [
            "For me, web design is more than a job—it’s where ",
            "creativity meets strategy",
            ". I love transforming ideas into functional, beautiful websites that make a real impact.",
          ],
          [
            "Every project is an opportunity to solve problems and combine design with technology to create solutions that work hard for your business. From attracting clients to automating tasks, I design websites that don’t just look great—they ",
            "deliver measurable results",
            ".",
          ],
        ]}
      />
      <Section
        title="My Process"
        content={[
          "I follow a clear and collaborative process to bring ideas to life:",
          ["1. ", "Discover", ": Understand your business, audience, and goals."],
          ["2. ", "Design", ": Create user-friendly, stunning designs tailored to your needs."],
          ["3. ", "Develop", ": Build and automate solutions that work as hard as you do."],
          ["4. ", "Launch", ": Optimize and deploy your site with confidence."],
          "Throughout every step, I ensure the solutions we build are tailored to your unique vision and objectives.",
        ]}
      />
      <Section
        title="Let’s Create Something Amazing"
        content={[
          [
            "A great website does more than showcase your business—it’s a tool that attracts ideal customers, nurtures leads, and automates repetitive tasks so you can focus on what matters most.",
          ],
          [
            "Whether you’re a business looking to elevate your digital presence or a designer searching for a technical partner, I’m here to help. ",
            <InlineLink href="/contact" link="Let’s Connect" key="contact" />,
            " and explore how we can turn your ideas into results-driven solutions.",
          ],
        ]}
      />
    </div>
  );
};

interface SectionProps {
  title: string;
  content: (string | string[] | React.ReactNode[])[];
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  const renderContent = (item: string | string[] | React.ReactNode[]) => {
    if (Array.isArray(item)) {
      return (
        <p key={item.join("")} className="leading-relaxed">
          {item.map((part, index) =>
            typeof part === "string" && index % 2 === 1 ? (
              <span className="font-semibold" key={index}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    return (
      <p key={item as string} className="leading-relaxed">
        {item}
      </p>
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold ">{title}</h2>
      <div className="space-y-3">{content.map(renderContent)}</div>
    </div>
  );
};

export default AboutSection;
