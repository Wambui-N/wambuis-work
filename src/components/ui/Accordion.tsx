"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="cursor-pointer py-4 border-b border-black flex flex-row justify-between"
        onClick={toggleAccordion}
      >
        <h4 className=""> {title}</h4>
        <p>+</p>
      </div>
      {isOpen && (
        <div className="py-4 px-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem
