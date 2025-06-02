import { useState, useEffect } from 'react';
import Navbar from '../component/navbar';

type NewsComponentProps = {
  mainContent?: string;
  footer: string;
};

const NewsComponent = ({ mainContent, footer }: NewsComponentProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <Navbar />

      {/* Section Header */}
      <div className="text-center mt-25">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-2">
          Stay Informed with the Latest News
        </h1>
        <p className="text-gray-600 text-md sm:text-lg">
          Your source for updates and insights.
        </p>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto mt-10 py-10 px-6 bg-white shadow-xl rounded-xl relative z-10">
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap break-words text-center">
          {mainContent || `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              'Get Started'
            )}
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pt-6 border-t border-gray-200 text-gray-500 text-sm">
          {footer}
        </footer>
      </div>

      {/* Floating Tags */}
      <div className="absolute top-25 left-6 bg-white/80 text-indigo-700 font-semibold px-4 py-1 rounded-full shadow-md hover:scale-105 transition-transform cursor-pointer">
        Explore More
      </div>
      <div className="absolute top-25 right-6 bg-white/80 text-indigo-700 font-semibold px-4 py-1 rounded-full shadow-md hover:scale-105 transition-transform cursor-pointer">
        More News
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-40 h-40 bg-indigo-100 rounded-full opacity-30 blur-3xl top-0 left-10"></div>
        <div className="absolute w-56 h-56 bg-blue-100 rounded-full opacity-20 blur-2xl bottom-10 right-10"></div>
      </div>
    </div>
  );
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NewsComponent
        mainContent="Be the first to know about important news, events, and developments in your industry."
        footer="© 2025 OceanTech — Stay connected with us at info@oceantech.com"
      />
    </div>
  );
}
