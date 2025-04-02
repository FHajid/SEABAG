export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Left side: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/hero-img.png"
              alt="Hero Illustration"
              className="w-900 h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Welcome to Our Company
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We provide innovative solutions to boost your business and help you grow.
              Let’s build something great together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-[#457b9d] text-white rounded-lg font-semibold hover:bg-[#386481] transition"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-[#457b9d] text-[#457b9d] rounded-lg font-semibold hover:bg-[#f1faff] transition"
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
