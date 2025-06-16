import { useState } from "react";
import { Transition } from "@headlessui/react"; // for fade-in effect

const ImageGallery = () => {
  const images = [
    {
      src: "/ocean_clean.jpg",
      caption: "Pristine Coastal Beach",
    },
    {
      src: "/ocean_clean2.jpg",
      caption: "Underwater Cleanup Team",
    },
    {
      src: "/ocean_clean3.jpg",
      caption: "Collected Ocean Waste",
    },
    {
      src: "/ocean_clean4.jpg",
      caption: "Community in Action",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [fade, setFade] = useState(true);

  const handleImageClick = (img: typeof selectedImage) => {
    setFade(false);
    setTimeout(() => {
      setSelectedImage(img);
      setFade(true);
    }, 150); // transition delay
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left side: Image Display */}
      <div data-aos="fade-right">
        <Transition
          show={fade}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <img
              src={selectedImage.src}
              alt="Main Display"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-medium px-4 text-center">
              {selectedImage.caption}
            </div>

          </div>
        </Transition>

        {/* Thumbnails */}
        <div className="flex flex-wrap gap-3 mt-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`Thumbnail ${idx}`}
              onClick={() => handleImageClick(img)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-transform duration-300 hover:scale-110 ${
                selectedImage.src === img.src ? "border-blue-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right side: Description */}
      <div data-aos="fade-left" className="text-left space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800">Ocean Cleanup Gallery</h2>
        <p className="text-gray-600 text-lg">
          Discover how communities, volunteers, and organizations are joining hands to fight
          ocean pollution. These images showcase the real impact of our actions – one beach,
          one wave, one cleanup at a time.
        </p>
        <p className="text-gray-500 text-md">
          Click on the thumbnails to view more powerful moments from our mission to protect
          the oceans.
        </p>
      </div>
    </section>
  );
};

export default ImageGallery;
