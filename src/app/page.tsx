import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Amenities from './components/Amenities'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Page = () => {
  return (
    <div className="bg-[#0A1D37] text-white min-h-screen"> {/* Navy blue background */}
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page
