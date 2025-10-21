'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const suites = [
  {
    name: 'Ruby Suite',
    slug: 'ruby',
    image: '/delacroix/masterbedroom.jpeg',
    desc: 'A blend of luxury and sophistication in 2 or 3 bedrooms with premium finishes.',
    priceRange: '₦150,000 – ₦200,000 / night',
  },
  {
    name: 'Pearl Suite',
    slug: 'pearl',
    image: '/delacroix/emerald.jpg',
    desc: 'Elegant and private, perfect for guests seeking peace and refined comfort.',
    priceRange: '₦150,000 – ₦200,000 / night',
  },
  {
    name: 'Emerald Suite',
    slug: 'emerald',
    image: '/delacroix/bedroom.jpg',
    desc: 'A cozy single-room haven for individuals or couples seeking comfort.',
    priceRange: '₦50,000 / night',
  },
  {
    name: 'Petra Villa',
    slug: 'petra',
    image: '/delacroix/petra.jpg',
    desc: 'Our ultimate 6-bedroom villa experience for families or group retreats.',
    priceRange: '₦350,000 / night',
  },
]

export default function SuitesPage() {
  return (
    <main className="bg-gradient-to-b from-[#0A1D37] to-[#08172C] min-h-screen text-delacroixCream">
      <Navbar />
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-[url('/gallery/lounge.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-delacroixGold mb-4">
            Our Luxury Suites
          </h1>
          <p className="max-w-2xl mx-auto text-delacroixCream/80">
            Discover comfort and elegance in every corner of Delacroix Apartments.  
            Choose your perfect suite below.
          </p>
        </motion.div>
      </section>

      {/* Suites Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {suites.map((suite, i) => (
          <motion.div
            key={suite.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative h-72 w-full">
              <Image
                src={suite.image}
                alt={suite.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Card Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-delacroixCream">
              <h2 className="text-2xl font-bold text-delacroixGold mb-2">
                {suite.name}
              </h2>
              <p className="text-sm text-delacroixCream/80 mb-3">
                {suite.desc}
              </p>
              <p className="text-delacroixGold font-semibold mb-4">
                {suite.priceRange}
              </p>
              <Link
                href={`/Suites/${suite.slug}`}
                className="inline-block bg-delacroixGold text-delacroixBlue font-semibold px-6 py-2 rounded-md hover:scale-105 transition-transform"
              >
                View Suite
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  )
}
