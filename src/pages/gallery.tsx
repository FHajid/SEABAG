import { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer"

export default function Gallery() {
  const images = [
    {
      src: "/program_clean.jpg",
      title: "Beach Cleanup – Bali",
      description: "Our volunteers gathered over 300 kg of plastic waste along the beaches of Bali during a weekend effort.",
    },
    {
      src: "/cleanup_beach.jpg",
      title: "Plastic Collection – Java Coast",
      description: "Working with local communities, we removed harmful debris from the Java coastline.",
    },
    {
      src: "/cleanup_beach2.jpg",
      title: "Recycling Center Visit",
      description: "A tour of a modern recycling facility to better understand the process of waste management.",
    },
   
  ];

  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-emerald-800 mb-12">
            Our Cleanup Gallery 
          </h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform"
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

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-grey bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-xl relative">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-red-700 hover:text-white text-3xl font-bold bg-gray-700 hover:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ×
            </button>
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-72 sm:h-96 object-cover"
            />
            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-emerald-700">{selectedImage.title}</h2>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
