import { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Gallery() {
  const images = [
    {
      src: "/program_clean.jpg",
      title: "Beach Cleanup – Bali",
      description:
        "Our volunteers gathered over 300 kg of plastic waste along the beaches of Bali during a weekend effort.",
    },
    {
      src: "/cleanup_beach.jpg",
      title: "Plastic Collection – Java Coast",
      description:
        "Working with local communities, we removed harmful debris from the Java coastline.",
    },
    {
      src: "/cleanup_beach2.jpg",
      title: "Recycling Center Visit",
      description:
        "A tour of a modern recycling facility to better understand the process of waste management.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  return (
    <>
      <Navbar />
      <div className="min-500 bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-emerald-800 mb-12">
            Our Cleanup Gallery
          </h1>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="w-full max-w-4xl"
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="w-64 h-full bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 sm:h-72 md:h-96 lg:h-[500px] object-cover object-top rounded-xl shadow"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {img.title}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-xl relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-red-700 hover:text-white text-3xl font-bold bg-gray-700 hover:bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-emerald-700">
                {selectedImage.title}
              </h2>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
