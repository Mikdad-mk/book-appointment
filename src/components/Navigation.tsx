'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  variant?: 'home' | 'default'
}

export default function Navigation({ variant = 'default' }: NavigationProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const isHome = variant === 'home'

  return (
    <>
      <section className={`${isHome ? 'relative bg-teal-900' : 'overflow-hidden'}`}>
        <nav className={`${isHome ? 'py-6' : 'py-4 border-b border-gray-200 bg-white shadow-sm'}`}>
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <Link className="inline-block" href="/">
                <Image
                  className="h-8"
                  src={isHome ? "/images/ihsan-logo-white.svg" : "/images/ihsan-logo.svg"}
                  alt="Ihsan Talent & Staffing"
                  width={180}
                  height={32}
                />
              </Link>
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                <li className="mr-4 lg:mr-6">
                  <Link
                    className={`inline-block font-medium ${
                      isHome
                        ? 'text-white hover:text-lime-500'
                        : 'text-teal-900 hover:text-teal-700'
                    }`}
                    href="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mr-4 lg:mr-6">
                  <Link
                    className={`inline-block font-medium ${
                      isHome
                        ? 'text-white hover:text-lime-500'
                        : 'text-teal-900 hover:text-teal-700'
                    }`}
                    href="/for-clients"
                  >
                    Clients
                  </Link>
                </li>
                <li className="mr-4 lg:mr-6">
                  <Link
                    className={`inline-block font-medium ${
                      isHome
                        ? 'text-white hover:text-lime-500'
                        : 'text-teal-900 hover:text-teal-700'
                    }`}
                    href="/for-professionals"
                  >
                    Professionals
                  </Link>
                </li>
                <li className="mr-4 lg:mr-6">
                  <Link
                    className={`inline-block font-medium ${
                      isHome
                        ? 'text-white hover:text-lime-500'
                        : 'text-teal-900 hover:text-teal-700'
                    }`}
                    href="/expertise"
                  >
                    Expertise
                  </Link>
                </li>
                <li className="mr-4 lg:mr-6">
                  <Link
                    className={`inline-block font-medium ${
                      isHome
                        ? 'text-white hover:text-lime-500'
                        : 'text-teal-900 hover:text-teal-700'
                    }`}
                    href="/vacancies"
                  >
                    Vacancies
                  </Link>
                </li>
                <li>
                  <Link
                    className={`inline-block font-medium ${
                      isHome
                        ? 'text-white hover:text-lime-500'
                        : 'text-teal-900 hover:text-teal-700'
                    }`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex items-center justify-end">
                <div className="hidden md:block">
                  <Link
                    className={`inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium transition duration-200 rounded-full ${
                      isHome
                        ? 'text-white hover:text-teal-900 border border-white hover:bg-white'
                        : 'text-white border border-teal-900 bg-teal-900 hover:bg-teal-800'
                    }`}
                    href="/contact"
                  >
                    <span className="mr-2">Get In Touch</span>
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
                <button
                  className={`md:hidden px-3 py-2 rounded-lg border transition-colors duration-200 ${
                    isHome 
                      ? 'text-white border-white hover:bg-white hover:text-teal-900' 
                      : 'text-teal-900 border-teal-900 hover:bg-teal-900 hover:text-white'
                  }`}
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <span className="sr-only">Open menu</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50`}>
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileNavOpen(false)}></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <Link className="inline-block" href="/" onClick={() => setMobileNavOpen(false)}>
                <Image className="h-8" src="/images/ihsan-logo.svg" alt="Ihsan Talent & Staffing" width={180} height={32} />
              </Link>
              <button 
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200" 
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="py-6 flex-1">
              <ul className="space-y-1">
                <li>
                  <Link 
                    className="block px-4 py-3 text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200" 
                    href="/about"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200" 
                    href="/for-clients"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200" 
                    href="/for-professionals"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Professionals
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200" 
                    href="/expertise"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200" 
                    href="/vacancies"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Vacancies
                  </Link>
                </li>
                <li>
                  <Link 
                    className="block px-4 py-3 text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200" 
                    href="/contact"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-gray-200">
              <Link
                className="inline-flex py-3 px-4 items-center justify-center text-sm font-medium text-white border border-teal-900 bg-teal-900 hover:bg-teal-800 rounded-lg transition duration-200"
                href="/contact"
                onClick={() => setMobileNavOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}