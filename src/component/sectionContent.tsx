import {
  GlobeAltIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from '@heroicons/react/20/solid';

export default function SectionContent() {
  const missions = [
    {
      title: 'Global Cleanup Initiatives',
      description:
        'We coordinate global beach and underwater cleanups, empowering local communities to restore the health of their marine environments.',
      icon: GlobeAltIcon,
    },
    {
      title: 'Education & Awareness',
      description:
        'We deliver educational programs and campaigns that inspire environmental responsibility and reduce plastic dependency in everyday life.',
      icon: SparklesIcon,
    },
    {
      title: 'Sustainable Policy Advocacy',
      description:
        'We partner with organizations and governments to advocate for policies that protect oceans and promote sustainable waste management.',
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              id="pattern-grid"
              x="50%"
              y={-1}
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#pattern-grid)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      {/* Content grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div className="lg:pr-12" data-aos="fade-right">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Our Vision
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            A World Where Oceans Thrive
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We envision a future where oceans are free from plastic pollution, marine ecosystems are protected, and communities live in harmony with nature. Our goal is to restore the ocean’s beauty, biodiversity, and life-supporting power for generations to come.
          </p>

          <div className="mt-10" data-aos="fade-up">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Our Mission
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Fight Against Ocean Pollution
            </h2>

            <p className="mt-4 text-gray-600">
              Our mission is to lead by removing waste, educating communities, and championing sustainable practices. Through collaboration and innovation, we aim to reduce the amount of plastic reaching the seas and protect marine life from harm.
            </p>
          </div>

          <ul className="mt-10 space-y-6">
            {missions.map((item, i) => (
              <li key={i} className="flex items-start gap-x-4" data-aos="fade-up" data-aos-delay={i * 150}>
                <item.icon className="h-6 w-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="600">
            <h4 className="text-xl font-semibold text-gray-900">How You Can Help</h4>
            <p className="mt-3 text-gray-600">
              Whether it's participating in cleanups, reducing single-use plastic, or spreading awareness — your contribution makes a difference. Let's restore our oceans together.
            </p>
          </div>
        </div>

        {/* Image column */}
        <div className="relative lg:sticky lg:top-16" data-aos="fade-left">
          <img
            src="/ocean_trash.jpg"
            alt="Volunteers cleaning ocean waste"
            className="w-full max-w-3xl rounded-xl shadow-lg ring-1 ring-gray-200"
          />
        </div>
      </div>
    </section>
  );
}
