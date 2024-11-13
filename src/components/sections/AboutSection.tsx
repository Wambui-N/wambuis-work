import React from "react";
import about from "@/data/about.json";

const AboutSection = () => {
  return (
    <div>
      <table className="w-full border-collapse">
        <thead className="border-b border-black">
          <tr>
            <th className="w-1/4">Service</th>
            <th className="w-1/2 px-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {about.map((fact) => (
            <tr className="border-b border-black" key={fact.id}>
              <td>{fact.title}</td>
              <td className="px-4">{fact.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutSection;
