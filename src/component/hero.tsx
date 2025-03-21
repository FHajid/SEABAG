
export default function Hero() {
    return (
        <section className="bg-white-100 py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
      Welcome to Our Company
    </h1>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
      We provide innovative solutions to boost your business and help you grow. Let’s build something great together.
    </p>
    <div className="mt-8 flex justify-center gap-4">
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
</section>
    );

}