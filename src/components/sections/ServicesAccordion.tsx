"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "@/data/services.json";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-neutral-200">
      <motion.button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-black focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-2xl font-semibold">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                marginTop: "1rem",
                transition: {
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                marginTop: 0,
                transition: {
                  duration: 0.2,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              },
            }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesAccordion = () => {
  return (
    <div className="mx-auto w-full">
      {services.map((service, index) => {
        const benefits = service.benefits;
        return (
          <AccordionItem key={service.id} title={service.title}>
            <div className="flex md:flex-row flex-col md:gap-12 gap-6 text-black">
              <p className="md:basis-2/3">{service.description}</p>
              <ul className="md:basis-1/3 py-2 text-sm list-inside list-disc">
                {benefits.map((benefit, benefitIndex) => (
                  <motion.li
                    key={benefitIndex}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: benefitIndex * 0.1,
                        duration: 0.3,
                      },
                    }}
                  >
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
          </AccordionItem>
        );
      })}
    </div>
  );
};

export default ServicesAccordion;
