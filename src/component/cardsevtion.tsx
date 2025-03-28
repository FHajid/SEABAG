import {
  ChartBarIcon,
  ShieldCheckIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

export default function CardSection() {
  const cards = [
    {
      title: 'Real-Time Insights',
      description: 'Monitor and analyze your traffic and engagement live with our advanced analytics tools.',
      icon: ChartBarIcon,
      bgColor: '#457b9d',
    },
    {
      title: 'Secure & Reliable',
      description: 'Built-in security and automatic backups ensure your data stays safe and accessible.',
      icon: ShieldCheckIcon,
      bgColor: '#457b9d',
    },
    {
      title: 'Easy Integration',
      description: 'Connect effortlessly to third-party services to streamline your development pipeline.',
      icon: LinkIcon,
      bgColor: '#457b9d',
    },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Card grid */}
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Why Choose Us?
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: card.bgColor }}>
                <card.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
