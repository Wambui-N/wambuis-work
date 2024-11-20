import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  company: string;
  tags: string;

}

const ProjectCard = ({company, tags}: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <Image
        className="object-cover w-full rounded-lg"
        src="/Project Image.png"
        alt="alt"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-[2px]">
        <p className="font-semibold text-base uppercase">
          {company}
        </p>
        <p className="text-xs">{tags}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
