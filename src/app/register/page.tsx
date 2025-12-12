'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration here
    console.log('Registration submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Top Banner */}
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Want to learn how to build templates like this one? Visit{' '}
          <a href="#!">www.pixelrocket.store</a>
        </p>
      </div>

      <div>
        <Navigation />
      </div>

      {/* Register Section */}
      <section className="py-12 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-heading text-5xl sm:text-6xl mb-6">Register</h1>
              <p className="text-lg text-gray-700">
                Join us in creating a greener future!
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-md">
              <form onSubmit={handleSubmit}>
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                
                <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                
                <button
                  type="submit"
                  className="flex w-full py-3 px-5 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200 mb-4"
                >
                  Create Account
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-teal-900 hover:text-lime-500 font-medium">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}