'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-delacroixBlue text-delacroixCream py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2"
        >
          <Image
            src="/about-delacroix.jpg"
            alt="Delacroix luxury interior"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg border-4 border-delacroixGold/40"
          />
          {/* Subtle gold accent circle */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-delacroixGold/30 blur-md" />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-delacroixGold">
            Redefining Luxury Living
          </h2>
          <p className="text-delacroixCream/90 leading-relaxed mb-4">
            At Delacroix Apartments, we believe your home should be more than just a place to live — 
            it should be a reflection of your lifestyle, taste, and aspirations. Every corner is 
            thoughtfully designed to merge elegance and functionality.
          </p>
          <p className="text-delacroixCream/80 leading-relaxed mb-6">
            From our serene rooftop garden to the fully equipped fitness lounge, 
            Delacroix offers a seamless blend of comfort and sophistication, 
            giving you an experience that feels truly exceptional.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-delacroixGold text-delacroixBlue font-semibold rounded-md hover:bg-delacroixGold/90 transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}
