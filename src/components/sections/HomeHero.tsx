import React from "react";
import InlineLink from "../ui/inlineLink";
import Hero from "../ui/Hero";

const HomeHero = () => {
  return (
    <div>
      <Hero
        children={<div className="flex flex-col justify-center gap-4 lg:w-1/2 w-full lg:h-[90vh] h-auto">
            <h1>
              Hello,
              <br /> I&apos;m Wambui.
            </h1>
            <p>
              A Creative Developer that blends{" "}
              <span className="font-semibold">
                beautiful, user-centric design
              </span>{" "}
              with{" "}
              <span className="font-semibold">smart business strategy</span> to
              create websites that not only impress, but drive results. From{" "}
              <span className="font-semibold">
                attracting your ideal customers
              </span>{" "}
              to <span className="font-semibold">streamlining operations</span>,
              I design websites that work hard for your business.
            </p>
            <p>
              Curious how? <InlineLink href="#work" link="Check out my work" />{" "}
              or <InlineLink href="/contact" link="let's chat" /> about your
              business.
            </p>
          </div>
        }
          
      />
    </div>
  );
};

export default HomeHero;
