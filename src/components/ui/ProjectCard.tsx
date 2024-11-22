"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  company: string;
  tags: string;
  href: string;
  image: string;
}

const ProjectCard = ({ company, tags, href, image }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      className="relative flex w-full flex-col gap-1"
    >
      <Link 
        href={href} 
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          animate={{ 
            filter: isHovered ? "brightness(110%)" : "brightness(100%)",
            transition: { 
              duration: 0.2,
              ease: "easeInOut"
            }
          }}
          className="overflow-hidden rounded-lg"
        >
          <motion.img
            src={image}
            alt="alt"
            width={1000}
            height={1000}
            animate={{ 
              scale: isHovered ? 1.02 : 1,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            className="w-full rounded-lg object-cover"
          />
        </motion.div>
        
        <div className="space-y-2 mt-2 relative">
          <div className="relative inline-block">
            <motion.p 
              className="text-base font-semibold uppercase relative"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 0.3
              }}
            >
              {company}
            </motion.p>
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-black"
              initial={{ width: 0 }}
              animate={{ 
                width: isHovered ? "100%" : 0,
                transition: { 
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }}
            />
          </div>
          
          <motion.p 
            className="text-xs"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.3,
              duration: 0.3
            }}
          >
            {tags}
          </motion.p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;