export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/hero-img.png"
              alt="Hero Illustration"
              className="w-full h-auto rounded-xl shadow"
            />
          </div>

          {/* Right side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Welcome to Our Company
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We provide innovative solutions to boost your business and help you grow. Let’s build something great together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
