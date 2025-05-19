
export default function news() {
  return (
    <>
      <div className="mb-4">
        <label typeof="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email..." className="mt-2 block w-full rounded-md shadow-sm border-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></input>
      </div>

      <button type="submit" className="block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-300">
        Send Message
      </button>
      <div>
        <p className="text-gray-600 mt-4 py-2">
          This is a sample contact page. Feel free to reach out to me at [email].
        </p>
      </div>
    </>
  )
}
