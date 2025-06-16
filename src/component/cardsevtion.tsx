'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const images = [
  {
    image: '/deep__sea.jpg',
    title: 'Clean Ocean',
    text: '“The ocean stirs the heart.”',
  },
  {
    image: '/deep_sea2.jpg',
    title: 'Save Marine Life',
    text: '“Protect what you love.”',
  },
  {
    image: '/deep_sea3.jpg',
    title: 'Reduce Waste',
    text: '“Every drop counts.”',
  },
]

export default function ImageSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }, [])

  return (
    <section className="bg-white px-4 py-12 sm:py-32">
      <div className="max-w-7xl mx-auto">

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {images.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 400}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm italic">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
