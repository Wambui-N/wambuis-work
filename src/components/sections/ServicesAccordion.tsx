import React from "react";
import AccordionItem from "../ui/Accordion";
import services from "@/data/services.json";

const ServicesAccordion = () => {
  return (
    <div>
      {services.map((service, index) => {
        const benefits = service.benefits;
        return (
          <AccordionItem
            key={service.id}
            title={service.title}
            children={
              <div className="flex flex-row gap-12">
                <p className="basis-2/3">{service.description}</p>
                <ul className="basis-1/3">
                  {benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        );
      })}
    </div>
  );
};

export default ServicesAccordion;
