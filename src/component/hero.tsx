import { useState } from "react";

const images = [
  { id: 1, src: "/hero-img.png", alt: "Main Hero" },
  { id: 2, src: "/polution_sea1.jpg", alt: "Alternate View 1" },
  { id: 3, src: "/polution_sea2.jpg", alt: "Alternate View 2" }
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={activeImage.src}
        alt={activeImage.alt}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 z-10 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Our Company
        </h1>
        <p className="text-white text-lg sm:text-xl max-w-2xl drop-shadow-md">
          We provide innovative solutions to boost your business and help you grow.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Image Thumbnails as Cards (side by side) */}
      <div className="absolute bottom-6 right-6 z-20 flex flex-row-reverse gap-1">
      {images
        .filter((img) => img.id !== activeImage.id)
        .map((img, index, arr) => (
          <div
            key={img.id}
            onClick={() => setActiveImage(img)}
            className={`relative w-26 h-38 sm:w-36 sm:h-44 rounded-lg overflow-hidden border-2 cursor-pointer shadow-lg transition-transform transform hover:-translate-y-4 hover:z-30 ${
              index !== arr.length - 1 ? '-ml-10' : ''
            }`}
            style={{ zIndex: index }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>

          ))}
      </div>
    </section>
  );
}
