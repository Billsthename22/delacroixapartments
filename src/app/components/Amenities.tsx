'use client'

import { FaSwimmer, FaDumbbell, FaParking, FaBriefcase } from 'react-icons/fa'

const items = [
  {
    title: 'Swimming Pool',
    desc: 'Heated pool with relaxing lounge area for perfect unwinding.',
    icon: <FaSwimmer />,
  },
  {
    title: 'Fitness Studio',
    desc: 'State-of-the-art gym open 24/7 for residents’ comfort.',
    icon: <FaDumbbell />,
  },
  {
    title: 'Secure Parking',
    desc: 'Covered, gated access with 24-hour security and CCTV.',
    icon: <FaParking />,
  },
  {
    title: 'Co-working Lounge',
    desc: 'Stylish, quiet workspace with high-speed internet.',
    icon: <FaBriefcase />,
  },
]

export default function Amenities() {
  return (
    <section
  id="amenities"
  className="bg-delacroixBlue text-delacroixCream pt-20 pb-0 px-6 rounded-2xl"
>
  <div className="max-w-6xl mx-auto">
    <h3 className="text-4xl md:text-5xl font-bold text-center text-delacroixGold mb-4">
      Luxury Amenities
    </h3>
    <p className="text-center text-delacroixCream/80 max-w-2xl mx-auto mb-12">
      Thoughtfully curated to complement your lifestyle, every feature at
      Delacroix blends comfort, convenience, and elegance.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {items.map((it) => (
        <div
          key={it.title}
          className="group bg-delacroixCream/10 border border-delacroixGold/20 hover:border-delacroixGold/60 hover:bg-delacroixGold/10 transition-all duration-500 p-8 rounded-2xl shadow-lg hover:shadow-2xl text-center"
        >
          <div className="text-5xl text-delacroixGold mb-6 flex justify-center">
            {it.icon}
          </div>
          <h4 className="font-semibold text-xl text-delacroixGold mb-2">
            {it.title}
          </h4>
          <p className="text-delacroixCream/80 group-hover:text-delacroixCream">
            {it.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
