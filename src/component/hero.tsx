import { useEffect, useState } from "react";

const images = [
  { id: 1, src: "/hero-img.png", alt: "Main Hero" },
  { id: 2, src: "/polution_sea1.jpg", alt: "Alternate View 1" },
  { id: 3, src: "/polution_sea2.jpg", alt: "Alternate View 2" }
];

export default function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, []);

  const activeImage = images[activeImageIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        key={activeImage.id}
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

      {/* Bullet Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((image, idx) => (
          <button
            key={image.id}
            onClick={() => setActiveImageIndex(idx)}
            className={`w-2 h-2 rounded-full border-1 transition-all cursor-pointer ${
              idx === activeImageIndex
                ? "bg-white border-indigo-600 scale-110"
                : "bg-gray-400 border-transparent hover:scale-105"
            }`}
            aria-label={`Select ${image.alt}`}
          />
        ))}
      </div>
    </section>
  );
}
