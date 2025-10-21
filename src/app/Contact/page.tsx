"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }
    setStatus("✅ Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[var(--color-delacroixBlue)] text-[var(--color-delacroixCream)] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-center py-28 bg-gradient-to-b from-[var(--color-delacroixBlue)] to-[#11294d] px-6 border-b border-[var(--color-delacroixGold)]/20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--color-delacroixGold)] to-[var(--color-delacroixCream)] bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-2xl mx-auto text-[var(--color-delacroixCream)]/80"
        >
          We'd love to hear from you. Whether you have a question, feedback, or
          a collaboration idea — drop us a message below.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <section className="flex flex-col md:flex-row justify-center items-start gap-16 px-6 md:px-20 py-20">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl font-semibold mb-4 text-[var(--color-delacroixGold)]">
            Contact Information
          </h2>
          <p className="text-[var(--color-delacroixCream)]/80 mb-6">
            Reach out through any of the channels below or send us a message
            directly using the form.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="text-[var(--color-delacroixGold)]" />
              <span>123 Oceanview Avenue, Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[var(--color-delacroixGold)]" />
              <span>+234 801 234 5678</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[var(--color-delacroixGold)]" />
              <span>info@yourhotel.com</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-8">
            <a href="#" className="hover:text-[var(--color-delacroixGold)] transition">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[var(--color-delacroixGold)] transition">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[var(--color-delacroixGold)] transition">
              <Twitter />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 w-full bg-[#11294d]/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[var(--color-delacroixGold)]/20"
        >
          <h2 className="text-3xl font-semibold mb-6 text-[var(--color-delacroixGold)]">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--color-delacroixCream)]/80">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[var(--color-delacroixBlue)] border border-[var(--color-delacroixGold)]/30 focus:border-[var(--color-delacroixGold)] outline-none text-[var(--color-delacroixCream)] placeholder-[var(--color-delacroixCream)]/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--color-delacroixCream)]/80">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[var(--color-delacroixBlue)] border border-[var(--color-delacroixGold)]/30 focus:border-[var(--color-delacroixGold)] outline-none text-[var(--color-delacroixCream)] placeholder-[var(--color-delacroixCream)]/50"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--color-delacroixCream)]/80">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded-lg bg-[var(--color-delacroixBlue)] border border-[var(--color-delacroixGold)]/30 focus:border-[var(--color-delacroixGold)] outline-none text-[var(--color-delacroixCream)] placeholder-[var(--color-delacroixCream)]/50"
                placeholder="Write your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[var(--color-delacroixGold)] to-[var(--color-delacroixCream)] hover:from-[var(--color-delacroixCream)] hover:to-[var(--color-delacroixGold)] text-[var(--color-delacroixBlue)] rounded-lg font-semibold transition"
            >
              Send Message
            </motion.button>

            {status && (
              <p className="text-center text-sm text-[var(--color-delacroixGold)] mt-4">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-20 pb-20">
  <motion.iframe
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15854.417195907357!2d3.281115!3d6.571522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b912e11c20131%3A0xa25b418c78af1db!2sDELACROIX%20APARTMENTS!5e0!3m2!1sen!2sng!4v1761008193654!5m2!1sen!2sng"
    width="100%"
    height="350"
    style={{ border: 0, borderRadius: '1rem' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</section>

    </main>
  );
}
