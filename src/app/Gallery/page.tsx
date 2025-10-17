'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// Gallery images — replace with real hotel images in /public/gallery/
const galleryImages = [
  '/gallery/room1.jpg',
  '/gallery/room2.jpg',
  '/gallery/pool.jpg',
  '/gallery/lounge.jpg',
  '/gallery/restaurant.jpg',
  '/gallery/spa.jpg',
  '/gallery/garden.jpg',
  '/gallery/hall.jpg',
  '/gallery/suite.jpg',
]

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0e1525] text-white flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-[#0e1525] to-[#1a2236]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f1e4b3] drop-shadow-md">
            Delacroix Gallery
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Step inside Delacroix — where timeless elegance meets golden serenity. Explore our spaces designed for comfort, sophistication, and unforgettable memories.
        </motion.p>
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#f1e4b3] rounded-full" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="relative cursor-pointer overflow-hidden rounded-2xl group shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`Delacroix image ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 transition-transform duration-700 group-hover:scale-110 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <span className="text-[#f1e4b3] font-semibold text-lg tracking-wide">View Image</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            <Image
              src={selected}
              alt="Selected"
              width={1000}
              height={700}
              className="rounded-lg max-h-[90vh] object-contain border-4 border-[#d4af37]/60 shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-[#d4af37]/30 hover:bg-[#d4af37]/60 text-white rounded-full p-2 transition"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  )
}
