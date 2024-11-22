import React from "react";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="lg:min-h-[50vh] h-auto py-8 w-full flex md:justify-center justify-start items-center">
      {children}
    </div>
  );
};

export default Hero;
