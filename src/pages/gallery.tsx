// src/pages/Gallery.tsx
import Navbar from "../component/navbar";
  
export default function Gallery() {
  const images = [
    {
      src: "https://source.unsplash.com/800x600/?beach,clean",
      title: "Beach Cleanup – Bali",
    },
    {
      src: "https://source.unsplash.com/800x600/?ocean,plastic",
      title: "Plastic Collection – Java Coast",
    },
    {
      src: "https://source.unsplash.com/800x600/?recycling",
      title: "Recycling Center Visit",
    },
    {
      src: "https://source.unsplash.com/800x600/?diving,ocean",
      title: "Underwater Cleanup",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-emerald-800 mb-12">
            Our Cleanup Gallery 🌊
          </h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {images.map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform"
              >
                <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{img.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
