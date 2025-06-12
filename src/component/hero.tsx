import { useEffect, useState } from "react";

const videos = [
  { id: 1, src: "/Ocean_pollution1.mp4", alt: "Main Hero" },
  { id: 2, src: "/Ocean_pollution2.mp4", alt: "Alternate View 1" },
  { id: 3, src: "/Ocean_pollution3.mp4", alt: "Alternate View 2" }
];

export default function Hero() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videos.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const activeVideo = videos[activeVideoIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        key={activeVideo.id}
        src={activeVideo.src}
        autoPlay
        loop
        muted
        playsInline
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
        {videos.map((video, idx) => (
          <button
            key={video.id}
            onClick={() => setActiveVideoIndex(idx)}
            className={`w-2 h-2 rounded-full border-1 transition-all cursor-pointer ${
              idx === activeVideoIndex
                ? "bg-white border-indigo-600 scale-110"
                : "bg-gray-400 border-transparent hover:scale-105"
            }`}
            aria-label={`Select ${video.alt}`}
          />
        ))}
      </div>
    </section>
  );
}
