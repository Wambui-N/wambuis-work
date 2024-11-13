import AboutSection from "@/components/sections/AboutSection";
import Hero from "@/components/ui/Hero";
import React from "react";

export default function About() {
  return (
    <div>
      <Hero
        children={
          <h1 className="">
            Who is <br /> Wambui?
          </h1>
        }
      />
      <AboutSection />
    </div>
  );
}
