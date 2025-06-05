import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

export default function SectionContent() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* Background grid pattern */}
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
          <rect
            fill="url(#pattern-grid)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Text Block */}
        <div className="lg:pr-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Deploy faster
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            A better workflow
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Streamline your development process with our powerful tools.
            Simplify deployments and scale with ease.
          </p>

          {/* Feature List */}
          <ul className="mt-10 space-y-6 text-gray-700">
            <li className="flex items-start gap-x-4">
              <CloudArrowUpIcon className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Push to deploy</h3>
                <p>
                  Easily deploy your apps with our integrated CI/CD tools.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-x-4">
              <LockClosedIcon className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">SSL certificates</h3>
                <p>Automatic SSL for all domains, ensuring data security.</p>
              </div>
            </li>
            <li className="flex items-start gap-x-4">
              <ServerIcon className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Database backups</h3>
                <p>Reliable daily backups to protect your valuable data.</p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">No server? No problem.</h2>
            <p className="mt-4 text-gray-600">
              Our platform handles infrastructure for you. Focus on building great products while we take care of the rest.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative lg:sticky lg:top-16">
          <img
            src="middle.png"
            alt="Team collaboration dashboard"
            className="w-full max-w-3xl rounded-xl shadow-lg ring-1 ring-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
