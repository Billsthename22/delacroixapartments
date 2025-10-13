'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // ✅ Type-safe onChange handler
  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // ✅ Type-safe onSubmit handler
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="mt-24 px-6">
      <h3 className="text-3xl font-bold text-delacroixBlue text-center">
        Get in Touch
      </h3>
      <p className="text-center text-delacroixBlue/80 mt-2">
        Schedule a visit or ask about availability
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* ✉️ Contact Form */}
        <form
          onSubmit={onSubmit}
          className="bg-delacroixCream/90 p-8 rounded-2xl shadow-xl border-t-4 border-delacroixGold space-y-6"
        >
          {/* Name Field */}
          <div className="relative">
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              className="peer w-full border-b-2 border-gray-300 bg-transparent pt-5 pb-2 text-delacroixBlue placeholder-transparent focus:outline-none focus:border-delacroixGold transition-colors duration-300"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-delacroixGold"
            >
              Your Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              className="peer w-full border-b-2 border-gray-300 bg-transparent pt-5 pb-2 text-delacroixBlue placeholder-transparent focus:outline-none focus:border-delacroixGold transition-colors duration-300"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-delacroixGold"
            >
              Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              className="peer w-full border-b-2 border-gray-300 bg-transparent pt-5 pb-2 text-delacroixBlue h-32 placeholder-transparent focus:outline-none focus:border-delacroixGold transition-colors duration-300"
              placeholder="Message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-delacroixGold"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-delacroixBlue text-delacroixCream rounded-md font-semibold hover:bg-delacroixGold hover:text-delacroixBlue transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-700 font-medium mt-3 text-center">
              Thanks! We’ll get back to you soon.
            </p>
          )}
        </form>

        {/* 🏙️ Contact Info / Map */}
        <div className="flex flex-col justify-center space-y-4 text-delacroixGold">
          <div>
            <h4 className="font-bold text-xl text-delacroixGold">
              Delacroix Apartments
            </h4>
            <p className="mt-2">123 Central Avenue, City</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: contact@delacroix.com</p>
          </div>

          <div className="w-full h-56 bg-gradient-to-br from-delacroixBlue to-delacroixGold/60 rounded-2xl shadow-inner overflow-hidden relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6042981799073!2d3.2811144999999997!3d6.571522100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b912e11c20131%3A0xa25b418c78af1db!2sDELACROIX%20APARTMENTS!5e0!3m2!1sen!2sng!4v1760348690326!5m2!1sen!2sng"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
