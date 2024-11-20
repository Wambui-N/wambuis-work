import React from "react";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="min-h-[50vh] w-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default Hero;
