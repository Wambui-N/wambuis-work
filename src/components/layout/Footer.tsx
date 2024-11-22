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
    <div className="flex flex-col gap-8 pb-8 pt-16 lg:pt-32">
      <div className="flex flex-col gap-4 lg:flex-row">
        <p className="basis-1/2">
          Ready to take the next step?{" "}
          <InlineLink href="/contact" link="Start a Conversation" /> and
          let&apos;s discuss how we can craft a website that attracts clients,
          streamlines your business, and drives growth.
        </p>
        <div className="flex basis-1/2 flex-col items-start gap-2 lg:items-end">
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
      <ul className="flex flex-col justify-between md:flex-row">
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
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="">
          <p className="text-sm text-black/70">© 2024 All Rights Reserved</p>
        </div>
        <div>
          <Link href="/" className="logo text-lg">
            Wambui
          </Link>
        </div>
        <div className="flex gap-4">
          <Link className="text-sm text-black/70" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm text-black/70" href="#">
            Terms and Conditions
          </Link>
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
