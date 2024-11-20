"use client";

import React from "react";
import InlineLink from "../ui/inlineLink";
import Link from "next/link";
import {
  IconBrandBehance,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const menuLinks = [
  { path: "/", label: "Work" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
];

const Footer = () => {
  return (
    <div className="pt-32 pb-8 flex flex-col gap-8">
      <div className="flex lg:flex-row flex-col gap-3">
        <p className="basis-1/2">
          Ready to elevate your business?{" "}
          <InlineLink href="/contact" link="Book a Complimentary Discovery Call" />{" "}
          to discuss how we can create a website that attracts clients,
          automates sales, and scales your business.
        </p>
        <div className="basis-1/2 flex flex-col gap-2 lg:items-end items-start">
          <p>Currently based: Nairobi and The Internet</p>
          <div className="flex flex-row gap-2">
            <Link href="#">
              <IconBrandX stroke={1.5} />
            </Link>
            <Link href="#">
              <IconBrandBehance stroke={1.5} />
            </Link>
            <Link href="#">
              <IconBrandLinkedin stroke={1.5} />
            </Link>
            <Link href="#">
              <IconBrandInstagram stroke={1.5} />
            </Link>
          </div>
        </div>
      </div>
      <ul className="flex flex-row justify-between">
        {menuLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
        <li className="font-semibold">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              scrollToTop(); // Call the custom scroll function
            }}
          >
            Back to top
          </Link>
        </li>
      </ul>
      <div className="flex flex-row justify-between">
        <div className="">
          <p className="text-sm text-black/70">© 2024 All Rights Reserved</p>
        </div>
        <div>
          <Link href="/" className="logo text-lg">
            Wambui
          </Link>
        </div>
        <div className="flex gap-4">
          <Link className="text-sm text-black/70" href="#">Privacy Policy</Link>
          <Link className="text-sm text-black/70" href="#">Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
};

// Custom scroll function with easing
const scrollToTop = () => {
  const scrollDuration = 600; // Duration in ms
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

export default Footer;
