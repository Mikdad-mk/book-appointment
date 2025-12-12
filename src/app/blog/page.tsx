'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Blog() {
  const [showContent, setShowContent] = useState(false)

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

      {/* Blog Section */}
      <section className="relative py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-20 -mx-4">
            <div className="w-full sm:w-1/2 px-4 mb-10 sm:mb-0">
              <h1 className="font-heading text-5xl sm:text-6xl">Blog</h1>
            </div>
            <div className="w-full sm:w-1/2 px-4 sm:text-right">
              <button
                className={`inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-300 ${
                  showContent ? 'hidden' : ''
                }`}
                onClick={() => setShowContent(true)}
              >
                <span className="mr-2">See all</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0">
              <div>
                <Image className="block w-full mb-8" src="/fauna-assets/blog/image-lg-post.png" alt="" width={600} height={400} />
                <div className="mb-6">
                  <Link className="inline-block mr-2 px-2 text-sm font-medium hover:bg-gray-50 border rounded-full" href="#!">
                    Solar Power
                  </Link>
                  <Link className="inline-block px-2 text-sm font-medium hover:bg-gray-50 border rounded-full" href="#!">
                    Solutions
                  </Link>
                </div>
                <Link className="block group max-w-2xl" href="#!">
                  <h3 className="text-3xl font-medium group-hover:text-teal-600 transition duration-200 mb-4">
                    Harnessing the Power of the Sun: Exploring the World of Solar Energy
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental...
                  </p>
                  <div className="flex items-center">
                    <Image className="w-10 h-10 rounded-full" src="/fauna-assets/blog/avatar-1.png" alt="" width={40} height={40} />
                    <div className="flex items-center ml-4">
                      <span className="text-sm font-medium">Leslie Alexander</span>
                      <span className="mx-2 sm:mx-4">
                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                        </svg>
                      </span>
                      <span className="text-sm font-medium">9 min read</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="max-w-lg">
                <Link className="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#!">
                  <Image className="block" src="/fauna-assets/blog/image-sm-1.png" alt="" width={200} height={150} />
                  <div className="mt-6 sm:mt-0 sm:ml-8">
                    <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
                      Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts
                    </h3>
                    <div className="flex items-center">
                      <Image className="w-8 h-8 rounded-full" src="/fauna-assets/blog/circle-avatar-1.png" alt="" width={32} height={32} />
                      <div className="flex items-center ml-4">
                        <span className="text-sm font-medium">Wade Warren</span>
                        <span className="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg>
                        </span>
                        <span className="text-sm font-medium">7 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#!">
                  <Image className="block" src="/fauna-assets/blog/image-sm-2.png" alt="" width={200} height={150} />
                  <div className="mt-6 sm:mt-0 sm:ml-8">
                    <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
                      From Trash to Treasure: The Promising World of Biomass Energy
                    </h3>
                    <div className="flex items-center">
                      <Image className="w-8 h-8 rounded-full" src="/fauna-assets/blog/circle-avatar-2.png" alt="" width={32} height={32} />
                      <div className="flex items-center ml-4">
                        <span className="text-sm font-medium">Jenny Wilson</span>
                        <span className="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg>
                        </span>
                        <span className="text-sm font-medium">7 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="flex flex-wrap sm:flex-nowrap group items-center" href="#!">
                  <Image className="block" src="/fauna-assets/blog/image-sm-3.png" alt="" width={200} height={150} />
                  <div className="mt-6 sm:mt-0 sm:ml-8">
                    <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
                      Hydrogen: Fueling the Green Energy Revolution
                    </h3>
                    <div className="flex items-center">
                      <Image className="w-8 h-8 rounded-full" src="/fauna-assets/blog/circle-avatar-3.png" alt="" width={32} height={32} />
                      <div className="flex items-center ml-4">
                        <span className="text-sm font-medium">Leslie Alexander</span>
                        <span className="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg>
                        </span>
                        <span className="text-sm font-medium">5 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={`${showContent ? 'flex' : 'hidden'} flex-wrap mt-16 -mx-4`}>
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="max-w-lg">
                <Link className="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#!">
                  <Image className="block" src="/fauna-assets/blog/image-sm-1.png" alt="" width={200} height={150} />
                  <div className="mt-6 sm:mt-0 sm:ml-8">
                    <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
                      Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts
                    </h3>
                    <div className="flex items-center">
                      <Image className="w-8 h-8 rounded-full" src="/fauna-assets/blog/circle-avatar-1.png" alt="" width={32} height={32} />
                      <div className="flex items-center ml-4">
                        <span className="text-sm font-medium">Wade Warren</span>
                        <span className="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg>
                        </span>
                        <span className="text-sm font-medium">7 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="flex flex-wrap sm:flex-nowrap group items-center" href="#!">
                  <Image className="block" src="/fauna-assets/blog/image-sm-2.png" alt="" width={200} height={150} />
                  <div className="mt-6 sm:mt-0 sm:ml-8">
                    <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
                      From Trash to Treasure: The Promising World of Biomass Energy
                    </h3>
                    <div className="flex items-center">
                      <Image className="w-8 h-8 rounded-full" src="/fauna-assets/blog/circle-avatar-2.png" alt="" width={32} height={32} />
                      <div className="flex items-center ml-4">
                        <span className="text-sm font-medium">Jenny Wilson</span>
                        <span className="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg>
                        </span>
                        <span className="text-sm font-medium">7 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg">
                <Link className="flex flex-wrap sm:flex-nowrap group mb-8 items-center" href="#!">
                  <Image className="block" src="/fauna-assets/blog/image-sm-1.png" alt="" width={200} height={150} />
                  <div className="mt-6 sm:mt-0 sm:ml-8">
                    <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
                      Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts
                    </h3>
                    <div className="flex items-center">
                      <Image className="w-8 h-8 rounded-full" src="/fauna-assets/blog/circle-avatar-1.png" alt="" width={32} height={32} />
                      <div className="flex items-center ml-4">
                        <span className="text-sm font-medium">Wade Warren</span>
                        <span className="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg>
                        </span>
                        <span className="text-sm font-medium">7 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link className="flex flex-wrap sm:flex-nowrap group items-center" href="#!">
                  <Image className="block" src="/fauna-assets/blog/image-sm-2.png" alt="" width={200} height={150} />
                  <div className="mt-6 sm:mt-0 sm:ml-8">
                    <h3 className="text-2xl font-medium group-hover:text-teal-600 transition duration-200 mb-6">
                      From Trash to Treasure: The Promising World of Biomass Energy
                    </h3>
                    <div className="flex items-center">
                      <Image className="w-8 h-8 rounded-full" src="/fauna-assets/blog/circle-avatar-2.png" alt="" width={32} height={32} />
                      <div className="flex items-center ml-4">
                        <span className="text-sm font-medium">Jenny Wilson</span>
                        <span className="mx-2 sm:mx-4">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#929C9A"></circle>
                          </svg>
                        </span>
                        <span className="text-sm font-medium">7 min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div>
        <div>
          <section>
            <div className="p-4">
              <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-teal-900 rounded-2xl">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                      <div className="max-w-md xl:max-w-none">
                        <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl tracking-sm text-white mb-6">
                          Learn Frontend Web Development
                        </h1>
                        <p className="text-lg text-white opacity-80">
                          Visit www.pixelrocket.store and learn how to become a frontend web developer
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 lg:text-right">
                      <Link
                        className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                        href="#!"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}