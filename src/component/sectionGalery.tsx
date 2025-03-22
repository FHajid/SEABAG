import { useState } from "react";

const ImageGallery = () => {
  const images = [
    "/pante.jpg",
    "/images/pic2.jpg",
    "/images/pic3.jpg",
    "/images/pic4.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left side: Image and Thumbnails */}
      <div>
        {/* Main Image */}
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-80 object-cover rounded-xl shadow"
        />

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                selectedImage === img ? "border-red-600" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right side: Text Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Gallery Showcase</h2>
        <p className="text-gray-600">
          This is a beautiful section where you can preview different images. Click on any
          thumbnail below the main image to view it on the left. This layout is perfect
          for showcasing portfolios, product images, or artwork.
        </p>
      </div>
    </section>
  );
};

export default ImageGallery;