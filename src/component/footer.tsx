export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">       
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <img src="/logo.png" alt="Logo" className="h-6" />
          <span>© {new Date().getFullYear()} OceanTech. All rights reserved.</span>
        </div>
        {/* Center: Navigation Links */}
        <ul className="flex gap-6 text-sm text-gray-600">
          <li><a href="/about" className="hover:text-blue-600">About</a></li>
          <li><a href="/gallery" className="hover:text-blue-600">Gallery</a></li>
          <li><a href="/project" className="hover:text-blue-600">Project</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        {/* Right: Social Icons */}
        <div className="flex gap-3">
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-500 hover:border-blue-500">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-500 hover:border-blue-500">
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/FHajid"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-blue-500 hover:border-blue-500"
          >
            <span className="sr-only">GitHub</span>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer> 
  );
}
