"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Suites", href: "/Suites" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-delacroixBlue shadow-lg border-b border-delacroixGold/20"
          : "bg-delacroixNavy"
      } text-delacroixCream`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider hover:text-delacroixGold transition-colors"
          >
            Delacroix
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium tracking-wide">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="relative group transition-colors duration-300"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-delacroixGold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* ✅ Book Button (goes to /Book) */}
          <Link href="/Book">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-delacroixGold text-delacroixBlue px-5 py-2 rounded-md shadow-md hover:bg-delacroixGold/90 transition"
            >
              Book a Visit
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-delacroixBlue px-6 py-6 space-y-4 border-t border-delacroixGold/20"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-lg font-medium hover:text-delacroixGold transition"
              >
                {item.name}
              </Link>
            ))}

            {/* ✅ Mobile Book Button */}
            <Link href="/Book" onClick={() => setOpen(false)}>
              <button className="w-full mt-2 bg-delacroixGold text-delacroixBlue px-4 py-3 rounded-md shadow hover:bg-delacroixGold/90 transition">
                Book a Visit
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
