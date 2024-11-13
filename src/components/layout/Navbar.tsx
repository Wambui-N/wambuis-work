"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import menuAnimation from '@/../public/menuAnimation.json'
import Navlink from "../ui/Navlink";
import Link from "next/link";
import Lottie from "lottie-react";

// Define menu links
const menuLinks = [
  { path: "/", label: "Work" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    if (menuRef.current && "playSegments" in menuRef.current) {
      isOpen
        ? menuRef.current.playSegments([40, 0], true)
        : menuRef.current.playSegments([0, 40], true);
    }
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle scroll for hiding navbar
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && !isOpen) {
      setHidden(latest > previous && latest > 150);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 w-full"
    >
      <div className="py-4 md:py-6 bg-white">
        <div className="flex items-center justify-between z-50">
          {/* Logo */}
          <Link href="/" className="logo">
            Wambui
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav>
              <ul className="flex flex-row items-center gap-6">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <Navlink path={link.path} label={link.label} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
          <button
              onClick={toggleMenu}
              className="relative z-50 w-12 h-12 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <Lottie
                lottieRef={menuRef}
                animationData={menuAnimation}
                autoplay={false}
                loop={false}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-8">
            <ul className="flex flex-col items-center gap-6">
              {menuLinks.map((link, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-brown text-center text-2xl font-medium"
                  key={index}
                >
                  <Navlink
                    path={link.path}
                    label={link.label}
                    onClick={toggleMenu}
                  />
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuLinks.length * 0.1 }}
            ></motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
