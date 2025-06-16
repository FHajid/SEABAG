import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const cards = [
  {
    id: "ocean",
    title: "Ocean Pollution",
    image: "ocean.jpg",
    description: `The ocean faces severe plastic and oil pollution due to human activities like littering, shipping, and industrial waste. Every year, millions of tons of plastic end up in the sea, harming marine life like turtles, dolphins, and fish.

What can we do?
- Reduce the use of single-use plastics such as straws, bags, and bottles.
- Participate in or support beach and ocean clean-up events.
- Choose sustainable seafood and reduce oil usage.
- Support organizations and policies that protect the ocean.

Protecting our oceans means preserving life itself. 🌊`,
  },
  {
    id: "river",
    title: "River Contamination",
    image: "/river.jpg",
    description: `Rivers are crucial for drinking water, agriculture, and biodiversity, yet they’re under threat. Contamination from factories, domestic waste, and agriculture runoff pollutes rivers globally.

What causes it?
- Industrial discharge without filtration.
- Improper sewage treatment.
- Agricultural chemicals and plastic dumping.

Prevention starts with:
- Regulating waste management.
- Educating the public on pollution.
- Creating buffer zones with plants that filter runoff.

Clean rivers support healthier communities and ecosystems. 🏞️`,
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<string | null>(null);
  const selectedCard = cards.find((c) => c.id === active);

  return (
    <>
      <Navbar />

      {/* Full-height section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 pt-16">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          🌍 Environmental Focus
        </h1>

        <div className=" min-h-screen flex flex-col lg:flex-row w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActive(card.id)}
              className="w-full lg:w-1/2 h-[100vh] cursor-pointer group overflow-hidden"
            >
              <div className="relative w-full h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition duration-300">
                  <h2 className="text-white text-3xl font-bold text-center px-2">
                    {card.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Modal */}
        {selectedCard && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-6">
            <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-8 relative overflow-auto max-h-[90vh]">
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
                {selectedCard.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                {selectedCard.description}
              </p>

              <button
                onClick={() => setActive(null)}
                className="mt-6 w-full py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
