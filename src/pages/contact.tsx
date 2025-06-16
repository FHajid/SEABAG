import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      <section className="py-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Get In Touch</h1>
          
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Contact Info Box */}
          <div className="bg-blue-400 text-white p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6 text-sm">
              We’ll create high-quality linkable content and build at least 40 high-authority links.
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+8801777777686</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+988877883866</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>support@yourmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Right Contact Form */}
          <div className="p-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Your Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Your Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="I want to hire you quickly"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Message</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
