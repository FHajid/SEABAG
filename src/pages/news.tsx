import { useState, useEffect } from 'react';

type NewsComponentProps = {
  header: string;
  mainContent?: string;
  footer: string;
};

const NewsComponent = ({ header, mainContent, footer }: NewsComponentProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Example: simulate loading on mount
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-white shadow-lg p-8 rounded-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-8 opacity-100 transition-opacity duration-300 ease-in-out">
          {header}
        </h1>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {mainContent || (
          <p
            className="text-gray-500 text-center whitespace-pre-wrap break-words"
            onClick={() => setIsLoading(true)}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        )}

        {/* Call to Action Button */}
        <div className="mt-8 space-y-4">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 opacity-100"
            onClick={() => setIsLoading(true)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Lorem Ipsum"}
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 py-6 border-t border-gray-200">
          {footer}
        </footer>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-4 left-4 transform -translate-x-12"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
          borderRadius: '0.5rem',
          padding: '0.5rem 1rem',
        }}
      >
        <div className="text-gray-300 font-bold text-center">Explore More</div>
      </div>

      <div
        className="absolute top-6 right-4 transform -translate-y-8"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
          borderRadius: '0.5rem',
          padding: '0.5rem 1rem',
        }}
      >
        <div className="text-gray-300 font-bold text-center">More News</div>
      </div>

      {/* Particle Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 0%, rgba(69,117,143,0.3) 100%)',
        }}
      >
        <div className="absolute w-20 h-20 rounded-full bg-white/80"></div>
      </div>
    </div>
  );
};

export default function NewsPage() {
  return (
    <div className="min-h-screen p-8">
      <header className="mb-8 text-center">
        <h1>Stay Informed with the Latest News</h1>
      </header>

      <NewsComponent
        header="Join our newsletter to receive the latest updates"
        mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        footer="Read more about our services and stay updated with industry news at [email]"
      />
    </div>
  );
}