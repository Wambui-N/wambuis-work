import React from "react";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="py-32 lg:w-[60%] w-[100%]">
      {children}
    </div>
  );
};

export default Hero;
