'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 lg:py-24 bg-teal-900 overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full opacity-20"
          src="/fauna-assets/headers/bg-waves.png"
          alt=""
          width={1920}
          height={1080}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl xs:text-6xl xl:text-7xl tracking-tight text-white mb-8">
              Contact Us
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white opacity-80 mb-10">
              Ready to find exceptional professionals or advance your career? Let&apos;s start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Contact Information */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2 className="font-heading text-4xl sm:text-5xl mb-8">Get in Touch</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Whether you&apos;re an organization seeking professionals or a professional looking for opportunities, we&apos;re here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                        <circle cx="12" cy="10" r="3" stroke="#022C22" strokeWidth="2" fill="none"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Address</h3>
                      <p className="text-gray-700">
                        Prinses Margrietplantsoen 33<br />
                        2595 AM The Hague<br />
                        The Netherlands
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                        <polyline points="22,6 12,13 2,6" stroke="#022C22" strokeWidth="2" fill="none"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Email</h3>
                      <p className="text-gray-700">
                        <Link href="mailto:talent@ihsaneurope.com" className="text-teal-900 hover:text-lime-500">
                          talent@ihsaneurope.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#022C22"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
                      <p className="text-gray-700">
                        <Link href="https://linkedin.com/company/ihsan-talent-staffing" target="_blank" rel="noopener noreferrer" className="text-teal-900 hover:text-lime-500">
                          Connect with us on LinkedIn
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg ml-auto">
                <div className="p-8 bg-orange-50 rounded-2xl">
                  <h3 className="text-2xl font-medium mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="fullName">
                      Full Name *
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
                      Email *
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
                    
                    <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="company">
                      <span>Company/Organization</span>{' '}
                      <span className="text-gray-700">(optional)</span>
                    </label>
                    <input
                      className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    
                    <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="inquiryType">
                      Inquiry Type *
                    </label>
                    <div className="relative w-full mb-6 bg-white rounded-full">
                      <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.3999 8.2L9.9999 11.8L13.5999 8.2" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                      <select
                        className="w-full px-4 py-3 text-gray-600 border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative"
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select inquiry type</option>
                        <option value="client">I need professionals (Client)</option>
                        <option value="professional">I&apos;m looking for opportunities (Professional)</option>
                        <option value="partnership">Partnership inquiry</option>
                        <option value="general">General inquiry</option>
                      </select>
                    </div>
                    
                    <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-2xl resize-none"
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs or interests..."
                      required
                    />
                    
                    <button
                      type="submit"
                      className="flex w-full py-3 px-5 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                    >
                      <span className="mr-2">Send Message</span>
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8 text-teal-900">Quick Actions</h2>
            <p className="text-xl text-teal-900">
              Looking for something specific? Choose the option that best fits your needs.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-white rounded-2xl h-full text-center">
                <div className="mb-6">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H52C58.6274 0 64 5.37258 64 12V52C64 58.6274 58.6274 64 52 64H12C5.37258 64 0 58.6274 0 52V12Z" fill="#BEF264"></path>
                    <path d="M20 20h24v3H20v-3zm0 8h24v3H20v-3zm0 8h16v3H20v-3z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Submit Assignment</h3>
                <p className="text-gray-700 mb-6">
                  Need qualified professionals for your organization? Tell us about your requirements.
                </p>
                <Link
                  href="/for-clients"
                  className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                >
                  For Organizations
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-white rounded-2xl h-full text-center">
                <div className="mb-6">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H52C58.6274 0 64 5.37258 64 12V52C64 58.6274 58.6274 64 52 64H12C5.37258 64 0 58.6274 0 52V12Z" fill="#BEF264"></path>
                    <circle cx="32" cy="24" r="8" stroke="#022C22" strokeWidth="3" fill="none"></circle>
                    <path d="M20 48c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#022C22" strokeWidth="3" fill="none"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Join Our Network</h3>
                <p className="text-gray-700 mb-6">
                  Professional looking for meaningful opportunities? Connect with us to explore possibilities.
                </p>
                <Link
                  href="/for-professionals"
                  className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                >
                  For Professionals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}