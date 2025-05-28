import Navbar from "../component/navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">Contact Me</h1>
          <p className="text-gray-600 text-base">I'd love to hear from you. Fill out the form or reach me directly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li>
                <strong>Email:</strong> youremail@example.com
              </li>
              <li>
                <strong>Phone:</strong> +62 812 3456 7890
              </li>
              <li>
                <strong>Location:</strong> Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
