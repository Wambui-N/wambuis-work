import Link from "next/link";
import React from "react";
import Navlink from "../ui/Navlink";

const navlinks = [
  {path: '/', label: 'Work'},
  {path: '/services', label: 'Services'},
  {path: '/about', label: 'About'},
]

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-4">
      <Link href={'/'} className="logo text-3xl">Wambui</Link>
      <ul className="flex flex-row gap-8">
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <Navlink path={navlink.path} label={navlink.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
