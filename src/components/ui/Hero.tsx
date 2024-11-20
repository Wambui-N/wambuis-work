import React from "react";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default Hero;
