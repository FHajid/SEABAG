'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   <header
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow'
        : ''
    }`}
  >

      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
            <span className="text-[#457b9d] font-bold text-xl">OceanTech</span>
          </a>
        </div>

        {/* Mobile menu button */}
       {scrolled && (
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        )}

        {/* Desktop navigation */}
        {scrolled && (
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-[#457b9d] hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </PopoverGroup>
      )}
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex justify-end">
        <Dialog.Panel className="w-full max-w-sm bg-white p-6 shadow-xl transition-all duration-300">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img
                alt="Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              <span className="text-[#457b9d] font-bold text-xl">OceanTech</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="mt-6 space-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-700 px-4 py-2 rounded-md hover:bg-[#457b9d] hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>

    </header>
  )
}
