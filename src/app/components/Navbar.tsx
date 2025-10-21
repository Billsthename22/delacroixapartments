'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Suites', href: '/Suites' },
    { name: 'Gallery', href: '/Gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? 'bg-[#0e1525e6] border-b border-[#d4af37]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between text-white">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            {/* Replace /logo.png with your actual logo path */}
            <Image
              src="/delacroix.png"
              alt="Delacroix Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="block text-3xl font-serif tracking-wider bg-gradient-to-r from-[#d4af37] to-[#f1e4b3] bg-clip-text text-transparent drop-shadow-md leading-none">
              Delacroix
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 items-center font-medium tracking-wide">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="relative group transition-colors duration-300 text-gray-200 hover:text-[#f1e4b3] text-lg"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#d4af37] to-[#f1e4b3] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Book Button */}
          <Link href="/Book">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px rgba(212,175,55,0.5)',
              }}
              whileTap={{ scale: 0.97 }}
              className="relative bg-gradient-to-r from-[#d4af37] to-[#f1e4b3] text-[#0e1525] px-7 py-2.5 rounded-full font-semibold tracking-wide transition duration-300 shadow-[0_0_10px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            >
              Book a Visit
            </motion.button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-[#0e1525f5] px-6 py-6 space-y-5 border-t border-[#d4af37]/20 text-center"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-lg font-medium text-gray-200 hover:text-[#f1e4b3] transition relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#d4af37] to-[#f1e4b3] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link href="/Book" onClick={() => setOpen(false)}>
              <button className="w-full mt-3 bg-gradient-to-r from-[#d4af37] to-[#f1e4b3] text-[#0e1525] px-5 py-3 rounded-full font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition">
                Book a Visit
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
