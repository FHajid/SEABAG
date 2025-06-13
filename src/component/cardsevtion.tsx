'use client'

export default function ImageSection() {
  const cards = [
    {
      title: 'Protect Our Oceans',
      text: '“The sea, once it casts its spell, holds one in its net of wonder forever.” – Jacques Cousteau',
      image: '/deep__sea.jpg',
    },
    {
      title: 'Clean for the Future',
      text: '“We never know the worth of water till the well is dry.” – Thomas Fuller',
      image: '/deep_sea2.jpg',
    },
    {
      title: 'Together We Can',
      text: '“Individually, we are one drop. Together, we are an ocean.” – Ryunosuke Satoro',
      image: '/deep_sea3.jpg',
    },
  ]

  return (
    <section className="bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Mission Through Images
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-left text-white">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm italic">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
