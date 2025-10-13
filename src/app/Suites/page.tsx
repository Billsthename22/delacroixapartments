'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
const suites = [
  {
    name: 'Ruby Suite',
    slug: 'ruby',
    image: '/ruby-suite.jpg',
    desc: 'Luxurious 2–3 bedroom suite with refined design and comfort.',
    features: ['3 Bedrooms', 'PS5', 'Private Balcony', 'Modern Kitchen'],
  },
  {
    name: 'Pearl Suite',
    slug: 'pearl',
    image: '/pearl-suite.jpg',
    desc: 'Elegant design with spacious interiors and city views.',
    features: ['2 Bedrooms', 'Smart TV', 'Lounge Area', 'Free WiFi'],
  },
  {
    name: 'Emerald Suite',
    slug: 'emerald',
    image: '/emerald-suite.jpg',
    desc: 'Compact and cozy, ideal for short stays.',
    features: ['1 Bedroom', 'Air Conditioning', 'Furnished', 'Mini Bar'],
  },
  {
    name: 'Petra Villa',
    slug: 'petra',
    image: '/petra-villa.jpg',
    desc: '6-bedroom villa designed for full privacy and comfort.',
    features: ['6 Bedrooms', 'Private Pool', 'Outdoor Lounge', 'Kitchen'],
  },
]

export default function SuitesPage() {
  return (
    <main className="bg-gradient-to-b from-[#08172C] to-[#0A1D37] min-h-screen text-delacroixCream">
      {/* Header */}
      <section className="text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-delacroixGold tracking-wide"
        >
          Our Luxury Suites
        </motion.h1>
        <div className="mt-3 w-24 h-[3px] bg-delacroixGold mx-auto rounded-full" />
        <p className="mt-6 text-delacroixCream/80 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover exclusive living spaces designed for elegance, comfort, and tranquility.
        </p>
      </section>

      {/* Suites Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 overflow-hidden">
        {suites.map((suite, index) => (
          <motion.div
            key={suite.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-delacroixCream rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative w-full h-64 md:h-72">
              <Image
                src={suite.image}
                alt={suite.name}
                fill
                className="object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                <Link
                  href={`/rates/${suite.slug}`}
                  className="px-6 py-3 bg-delacroixGold text-delacroixBlue font-semibold rounded-md hover:scale-105 transition-transform shadow-lg"
                >
                  View Suite
                </Link>
              </div>
            </div>

            <div className="p-6 text-delacroixBlue">
              <h3 className="text-2xl font-bold text-delacroixBlue mb-2">
                {suite.name}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{suite.desc}</p>

              <ul className="space-y-1 text-sm text-delacroixBlue/80">
                {suite.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={`/rates/${suite.slug}`}
                  className="inline-block px-6 py-3 border-2 border-delacroixGold text-delacroixBlue rounded-md font-semibold hover:bg-delacroixGold hover:text-delacroixBlue transition-all duration-300"
                >
                  Explore Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
