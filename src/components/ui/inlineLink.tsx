"use client";

import Link from "next/link";
import React from "react";

interface InlineLinkProps {
  href: string;
  link: string;
  className?: string;
}

const InlineLink: React.FC<InlineLinkProps> = ({
  href,
  link,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`hover: border-b hover:border-b-2 border-black transition-all duration-300 ${className} `}
    >
      {link}
    </Link>
  );
};

export default InlineLink;
