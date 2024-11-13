import React from "react";
import InlineLink from "../ui/inlineLink";
import Link from "next/link";
import {
  IconBrandBehance,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="py-32 flex flex-col gap-8">
      <div className="flex flex-row">
        <p className="basis-1/2">
          Interested in working together? I&apos;d love to hear from you. You
          can reach me via <InlineLink href="#" link="WhatsApp" />,{" "}
          <InlineLink href="#" link="Email" /> or{" "}
          <InlineLink href="#" link="Call" />. Let&apos;s build something
          amazing together!
        </p>
        <div className="basis-1/2 flex flex-col gap-2 items-end">
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
      <div className="">
        <p className="text-xs text-black/50">© 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
