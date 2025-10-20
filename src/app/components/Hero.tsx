"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const images = [
    "/delacroix/bedroom.jpg",
    "/delacroix/outside.jpg",
    "/delacroix/swimmingpool.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Background carousel */}
      <div className="h-[70vh] md:h-[90vh] relative">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-delacroixBlue/80 via-delacroixBlue/50 to-transparent z-10" />

        {/* Content area */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-6xl mx-auto px-6 text-delacroixCream">
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-serif font-bold leading-tight"
            >
              Delacroix Apartments
            </motion.h1>

            {/* gold accent rule */}
            <div className="w-24 h-1 bg-delacroixGold rounded-full mt-4" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl max-w-xl font-light text-delacroixCream/95"
            >
              Luxury living in the heart of the city — modern finishes, premium
              amenities, and unparalleled comfort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex gap-4 flex-wrap"
            >
              <Link
                href="/suites"
                className="px-5 py-3 border border-delacroixCream/80 text-delacroixCream rounded-md hover:bg-delacroixCream hover:text-delacroixBlue transition-colors duration-200"
              >
                View Listings
              </Link>

              <Link
                href="#contact"
                className="px-5 py-3 bg-delacroixGold text-delacroixBlue font-medium rounded-md shadow-md hover:bg-delacroixGold/90 transition-colors duration-200"
              >
                Book a Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
