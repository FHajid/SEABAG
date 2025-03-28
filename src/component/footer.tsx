export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Side - Text or Tagline */}
          <div className="text-gray-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} OceanTech. All rights reserved.
          </div>
  
          {/* Right Side - Logo or Socials */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png" // Make sure the image exists in your /public folder
              alt="Logo"
              className="h-8"
            />
  
            {/* Optional: Add social icons (Heroicons or others) */}
            {/* <a href="#" className="text-gray-500 hover:text-[#457b9d]">
              <TwitterIcon />
            </a> */}
          </div>
        </div>
      </footer>
    )
  }
  