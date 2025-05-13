'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  Popover,
  PopoverButton,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon, 
  XMarkIcon,

} from '@heroicons/react/24/outline'




export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
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
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 px-3 py-2 rounded-md transition hover:bg-[#457b9d] hover:text-white">
              Product
            </PopoverButton>
          </Popover>

          <a
            href="/about"
            className="text-sm font-semibold text-gray-900 px-3 py-2 rounded-md transition hover:bg-[#457b9d] hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 px-3 py-2 rounded-md transition hover:bg-[#457b9d] hover:text-white"
          >
            Marketplace
          </a>
          
        </PopoverGroup>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-white px-6 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                alt="Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
              <span className="text-[#457b9d] font-bold text-xl">OceanTech</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            <Disclosure as="div" className="mb-4">
              <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 px-4 text-base font-semibold text-gray-900 hover:bg-gray-100">
                Product
              </DisclosureButton>
            </Disclosure>

            <a
              href="/about"
              className="block rounded-md px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
            >
              Marketplace
            </a>
            
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
