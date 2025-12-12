'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1)
  const slideCount = 3

  return (
    <div>
      {/* Top Banner */}
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Part of Ihsan Europe Group B.V. | International staffing solutions
        </p>
      </div>

      {/* Navigation and Hero */}
      <div>
        <Navigation variant="home" />
        
        {/* Hero Section - Centered Layout with Animated Pattern */}
        <section className="relative bg-teal-900 py-20 lg:py-32 overflow-hidden">
          {/* Animated Grid Pattern Background */}
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.15}
            duration={3}
            repeatDelay={1}
            className="fill-lime-400/20 stroke-lime-400/20 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-lime-500/20 text-lime-300 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Part of Ihsan Europe Group B.V.
                </span>
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight">
                Professionals with 
                <span className="text-lime-400"> expertise</span> and 
                <span className="text-lime-400"> character</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                We deliver highly qualified professionals for public, corporate, and societal organizations. Combining technical expertise with strong personal integrity and character.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className="group inline-flex py-4 px-8 items-center justify-center text-lg font-semibold text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  href="/for-clients"
                >
                  <span className="mr-2">Find professionals</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  className="group inline-flex py-4 px-8 items-center justify-center text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-teal-900 rounded-lg transition-all duration-200"
                  href="/for-professionals"
                >
                  <span className="mr-2">Join our team</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">500+</h5>
                <span className="text-base lg:text-lg text-gray-700">Professionals Placed</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 md:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">150+</h5>
                <span className="text-base lg:text-lg text-gray-700">Corporate Clients</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-10 sm:mb-0">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">95%</h5>
                <span className="text-base lg:text-lg text-gray-700">Client Satisfaction</span>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-4">
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">10+</h5>
                <span className="text-base lg:text-lg text-gray-700">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="p-4 bg-white">
        <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-lime-500 rounded-3xl">
          <div className="container mx-auto px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium">Expertise Areas</span>
            </div>
            <div className="border-t border-teal-900 border-opacity-25 pt-14">
              <h1 className="font-heading text-4xl sm:text-6xl mb-24">Professional excellence across key sectors</h1>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <path d="M12 16h24v2H12v-2zm0 6h24v2H12v-2zm0 6h16v2H12v-2z" fill="#022C22"></path>
                      <path d="M16 12h16v2H16v-2z" fill="#022C22"></path>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Finance & Control Professionals</h5>
                      <p className="mb-6">
                        Business controllers, financial controllers, project controllers. Expert professionals who ensure financial accuracy and strategic oversight for your organization.
                      </p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" href="/expertise">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-16">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <circle cx="24" cy="16" r="6" stroke="#022C22" strokeWidth="2" fill="none"></circle>
                      <path d="M16 32c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">ESG & Sustainability Experts</h5>
                      <p className="mb-6">
                        CSRD specialists, sustainability officers, data & reporting professionals. Navigate the complex landscape of environmental and social governance.
                      </p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" href="/expertise">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4 mb-16 sm:mb-0">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <path d="M24 12l8 6v16H16V18l8-6z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                      <path d="M20 24h8v10h-8V24z" fill="#022C22"></path>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Legal & Governance Professionals</h5>
                      <p className="mb-6">
                        Corporate legal advisors, compliance officers, governance specialists. Ensure your organization operates within legal frameworks and best practices.
                      </p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" href="/expertise">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-4">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                      <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                      <path d="M19 24l3 3 6-6" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    </svg>
                    <div className="mt-6">
                      <h5 className="text-2xl font-medium mb-3">Social Care (WMO)</h5>
                      <p className="mb-6">
                        Case managers, day-activity coaches, household support staff, community workers. Professionals who combine empathy with professional excellence.
                      </p>
                      <Link className="inline-block text-lg font-medium hover:text-teal-700" href="/expertise">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WMO Section */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">WMO / Social Care Excellence</h2>
            <p className="text-xl text-gray-700 mb-10">
              Ihsan Talent supports municipalities and care organizations with WMO professionals who combine empathy with professional excellence. Our social care specialists understand the unique challenges of community support and deliver compassionate, effective solutions.
            </p>
            <Link
              className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
              href="/expertise"
            >
              Explore WMO Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-24 text-center">
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">
              Sustainable staffing through expertise and character. Building lasting partnerships for organizational success.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                href="/contact"
              >
                Submit assignment
              </Link>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                href="/for-professionals"
              >
                Join our network
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image className="block w-full" src="/fauna-assets/about/about-image2.png" alt="" width={400} height={300} />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image className="block w-full" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image className="block w-full" src="/fauna-assets/about/about-image4.png" alt="" width={400} height={300} />
            </div>
            <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image className="block w-full" src="/fauna-assets/about/about-image2.png" alt="" width={400} height={300} />
            </div>
            <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image className="block w-full" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
            </div>
            <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8">
              <Image className="block w-full" src="/fauna-assets/about/about-image4.png" alt="" width={400} height={300} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <section className="py-12 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div className="max-w-lg mx-auto md:mx-0 overflow-hidden">
                <div
                  className="flex -mx-4 transition-transform duration-500"
                  style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                >
                  <Image 
                    className="block flex-shrink-0 w-full px-4 rounded-2xl object-cover aspect-square md:aspect-[4/3]" 
                    src="/images/Nailed it_.jpeg" 
                    alt="Marcus van der Berg" 
                    width={500} 
                    height={400} 
                  />
                  <Image 
                    className="block flex-shrink-0 w-full px-4 rounded-2xl object-cover aspect-square md:aspect-[4/3]" 
                    src="/fauna-assets/testimonials/photo-lg.png" 
                    alt="Michael Chen" 
                    width={500} 
                    height={400} 
                  />
                  <Image 
                    className="block flex-shrink-0 w-full px-4 rounded-2xl object-cover aspect-square md:aspect-[4/3]" 
                    src="/fauna-assets/testimonials/photo-lg.png" 
                    alt="Lisa Janssen" 
                    width={500} 
                    height={400} 
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="max-w-lg mx-auto md:mr-0 overflow-hidden">
                <div
                  className="flex -mx-4 transition-transform duration-500"
                  style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
                >
                  <div className="flex-shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                      &ldquo;Ihsan Talent delivered exactly what we needed - professionals with both expertise and integrity. Their character assessment process is truly unique.&rdquo;
                    </h4>
                    <span className="block text-xl font-medium">Marcus van der Berg</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">HR Director, Municipality Amsterdam</span>
                  </div>
                  <div className="flex-shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                      &ldquo;Outstanding ESG professionals who understand both compliance and practical implementation. Highly recommended.&rdquo;
                    </h4>
                    <span className="block text-xl font-medium">Michael Chen</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">CFO, Sustainable Corp</span>
                  </div>
                  <div className="flex-shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                      &ldquo;The quality of WMO professionals from Ihsan is exceptional. They truly care about the communities they serve.&rdquo;
                    </h4>
                    <span className="block text-xl font-medium">Lisa Janssen</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">Director, Care Foundation Utrecht</span>
                  </div>
                </div>
                <div>
                  <button
                    className="inline-block mr-4 text-gray-700 hover:text-lime-500"
                    onClick={() => setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount)}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.4 16H7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M16 24.4L7.59998 16L16 7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                  <button
                    className="inline-block text-gray-700 hover:text-lime-500"
                    onClick={() => setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1)}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.59998 16H24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M16 7.59998L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
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
                          Ready to find your next professional?
                        </h1>
                        <p className="text-lg text-white opacity-80">
                          Connect with Ihsan Talent & Staffing for qualified professionals who combine expertise with character
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 lg:text-right">
                      <Link
                        className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                        href="#!"
                      >
                        Contact Us Today
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

// FAQ Component
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do you match candidates to our specific needs?",
      answer: "We use a comprehensive approach that includes technical skills assessment, character evaluation, and cultural fit analysis. Our unique methodology ensures we match not just expertise, but also personal integrity and values alignment."
    },
    {
      question: "What contract forms do you offer?",
      answer: "We offer flexible staffing solutions including interim staffing, detavast (temp-to-perm), permanent placements, project-based teams, and senior consulting arrangements to meet your specific organizational needs."
    },
    {
      question: "What is your screening and quality assurance process?",
      answer: "Our rigorous process includes skills verification, reference checks, character assessment interviews, and ongoing performance monitoring. We maintain high standards through continuous coaching and periodic evaluations."
    },
    {
      question: "How quickly can you provide professionals?",
      answer: "Our onboarding timeline varies by role complexity and requirements. For standard positions, we typically provide qualified candidates within 1-2 weeks, with full onboarding support throughout the placement process."
    },
    {
      question: "What makes Ihsan Talent different from other staffing agencies?",
      answer: "Our unique focus on character assessment alongside technical expertise sets us apart. We believe sustainable staffing requires professionals with both skills and integrity, supported by our comprehensive coaching and development programs."
    }
  ]

  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="font-heading text-6xl mb-6">FAQ</h1>
          <p className="text-gray-700">Common questions about our staffing services and approach.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <button
              key={index}
              className="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div>
                <div className="pr-5">
                  <h5 className="text-lg font-medium">{faq.question}</h5>
                </div>
                <div
                  className={`overflow-hidden pr-5 duration-500 ${
                    openFAQ === index ? 'h-auto' : 'h-0'
                  }`}
                >
                  <p className="text-gray-700 mt-4">{faq.answer}</p>
                </div>
              </div>
              <span className="flex-shrink-0">
                <div className={openFAQ === index ? 'hidden' : ''}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.69995V18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className={openFAQ === index ? '' : 'hidden'}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </span>
            </button>
          ))}
          <div className="sm:flex py-10 px-5 sm:px-10 bg-orange-50 rounded-2xl">
            <div className="mb-4 sm:mb-0 sm:mr-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                <path d="M13.676 15.5617C11.7951 17.8602 10.6666 20.7983 10.6666 24C10.6666 27.2017 11.7951 30.1398 13.6761 32.4383L18.9201 27.1943C18.3372 26.2694 18 25.174 18 24C18 22.8259 18.3372 21.7306 18.92 20.8057L13.676 15.5617Z" fill="#022C22"></path>
                <path d="M15.5616 13.6761L20.8056 18.9201C21.7306 18.3372 22.8259 18 24 18C25.174 18 26.2694 18.3372 27.1943 18.9201L32.4383 13.6761C30.1398 11.7951 27.2017 10.6666 24 10.6666C20.7982 10.6666 17.8601 11.7951 15.5616 13.6761Z" fill="#022C22"></path>
                <path d="M34.3239 15.5617L29.0799 20.8057C29.6628 21.7307 30 22.8259 30 24C30 25.174 29.6627 26.2693 29.0799 27.1943L34.3238 32.4383C36.2048 30.1398 37.3333 27.2017 37.3333 24C37.3333 20.7983 36.2048 17.8602 34.3239 15.5617Z" fill="#022C22"></path>
                <path d="M32.4382 34.3239L27.1942 29.0799C26.2693 29.6628 25.174 30 24 30C22.8259 30 21.7307 29.6628 20.8057 29.0799L15.5617 34.3239C17.8602 36.2048 20.7983 37.3333 24 37.3333C27.2016 37.3333 30.1397 36.2048 32.4382 34.3239Z" fill="#022C22"></path>
              </svg>
            </div>
            <div>
              <h5 className="text-xl font-medium mb-4">Still have questions?</h5>
              <p className="text-gray-700">
                <span>For assistance, please visit our</span>{' '}
                <Link className="inline-block text-black font-medium underline" href="/contact">
                  Contact
                </Link>{' '}
                <span>page or email us at</span>{' '}
                <span className="text-black font-medium">talent@ihsaneurope.com</span>
                <span>. Our dedicated team is ready to help you find the right professionals for your organization.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}