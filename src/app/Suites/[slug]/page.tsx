"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar"; // ✅ blue Navbar imported

// Define a proper Suite type
type SuitePrice = {
  label: string;
  amount: string;
};

type Suite = {
  name: string;
  slug: string;
  image: string;
  desc: string;
  features: string[];
  prices: SuitePrice[];
};

const suites: Suite[] = [
  {
    name: "Ruby Suite",
    slug: "ruby",
    image: "/delacroix/masterbedroom.jpeg",
    desc: "The Ruby Suite offers a perfect balance of warmth, space, and elegance. Designed for comfort with refined interiors and a serene atmosphere.",
    features: ["3 Bedrooms", "PS5", "Private Balcony", "Modern Kitchen"],
    prices: [
      { label: "2 Bedroom", amount: "₦150,000/night" },
      { label: "3 Bedroom", amount: "₦200,000/night" },
    ],
  },
  {
    name: "Pearl Suite",
    slug: "pearl",
    image: "/delacroix/emerald.jpg",
    desc: "The Pearl Suite is your retreat of calm sophistication — spacious, elegant, and beautifully detailed with panoramic city views.",
    features: ["2 Bedrooms", "Smart TV", "Lounge Area", "Free WiFi"],
    prices: [
      { label: "2 Bedroom", amount: "₦150,000/night" },
      { label: "3 Bedroom", amount: "₦200,000/night" },
    ],
  },
  {
    name: "Emerald Suite",
    slug: "emerald",
    image: "/delacroix/bedroom.jpg",
    desc: "Perfect for solo travelers or couples, the Emerald Suite combines intimacy with modern design for an unforgettable stay.",
    features: ["1 Bedroom", "Air Conditioning", "Furnished", "Mini Bar"],
    prices: [{ label: "1 Bedroom", amount: "₦100,000/night" }],
  },
  {
    name: "Petra Villa",
    slug: "petra",
    image: "/delacroix/petra.jpg",
    desc: "Our most exclusive accommodation — the Petra Villa offers complete privacy, expansive living areas, and luxurious amenities throughout.",
    features: ["6 Bedrooms", "Private Pool", "Outdoor Lounge", "Full Kitchen"],
    prices: [{ label: "Entire Building", amount: "₦350,000/night" }],
  },
];

export default function SuiteDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const router = useRouter();
  const suite = suites.find((s) => s.slug === slug);
  const [selectedOption, setSelectedOption] = useState<string>("");

  if (!suite) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0A1D37] text-delacroixCream">
        <h2 className="text-2xl font-semibold text-red-400">Suite not found 😢</h2>
      </div>
    );
  }

// ✅ Handle Book navigation (simple redirect)
const handleBook = () => {
  
  router.push('/Book')
}

  return (
    <main className="bg-gradient-to-b from-[#08172C] to-[#0A1D37] min-h-screen text-delacroixCream">
      <Navbar /> {/* ✅ blue Navbar added */}
<br/>
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image src={suite.image} alt={suite.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl font-bold text-delacroixGold mb-3 tracking-wide">
              {suite.name}
            </h1>
            <p className="text-lg text-delacroixCream/90 max-w-2xl">{suite.desc}</p>
          </div>
        </motion.div>

        {/* Options */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-delacroixGold mb-4">Select Option</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suite.prices.map((price) => (
              <button
                key={price.label}
                onClick={() => setSelectedOption(price.label)}
                className={`p-5 rounded-xl shadow-md border transition-all duration-300 ${
                  selectedOption === price.label
                    ? "bg-delacroixGold text-delacroixBlue border-delacroixGold"
                    : "bg-delacroixCream/10 border-delacroixCream/20 text-delacroixCream hover:bg-delacroixCream/20"
                }`}
              >
                <h3 className="text-lg font-semibold">{price.label}</h3>
                <p className="text-xl font-bold mt-1">{price.amount}</p>
              </button>
            ))}
          </div>

          {/* Features */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-delacroixGold mb-4">Key Features</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {suite.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 bg-delacroixCream/10 rounded-md px-4 py-2 text-delacroixCream/90"
                >
                  • {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-16 flex justify-center gap-4">
            <Link
              href="/Suites"
              className="px-8 py-3 border-2 border-delacroixGold text-delacroixGold rounded-md font-semibold hover:bg-delacroixGold hover:text-delacroixBlue transition-all duration-300"
            >
              ← Back to Suites
            </Link>
            <button
              onClick={handleBook}
              className="px-8 py-3 bg-delacroixGold text-delacroixBlue font-semibold rounded-md hover:scale-105 transition-transform shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
