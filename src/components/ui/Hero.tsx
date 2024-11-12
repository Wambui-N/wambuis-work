import React from "react";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="py-32 w-[60%]">
      {children}
    </div>
  );
};

export default Hero;
