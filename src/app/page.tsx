'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

export default function Home() {
  return (
    <div>
      {/* Top Banner */}
      <div>
        <p className="mb-0 py-3 px-4 bg-lime-500 text-center text-sm sm:text-base">
          Part of Ihsan Europe Group B.V. | International staffing solutions
        </p>
      </div>

      {/* Navigation and Hero */}
      <div>
        <Navigation variant="home" />

        {/* Hero Section - Centered Layout with Animated Pattern */}
        <section className="relative bg-teal-900 py-16 sm:py-20 lg:py-32 overflow-hidden">
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
              <div className="mb-6 sm:mb-8">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-lime-500/20 text-lime-300 rounded-full text-xs sm:text-sm font-medium">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden xs:inline">Part of Ihsan Europe Group B.V.</span>
                  <span className="xs:hidden">Ihsan Europe Group</span>
                </span>
              </div>

              <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 leading-tight px-2">
                Professionals with
                <span className="text-lime-400"> expertise</span> and
                <span className="text-lime-400"> character</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
                We deliver highly qualified professionals for public, corporate, and societal organizations. Combining technical expertise with strong personal integrity and character.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  href="/for-clients"
                >
                  <span className="mr-2">Find professionals</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-teal-900 rounded-lg transition-all duration-200"
                  href="/for-professionals"
                >
                  <span className="mr-2">Join our team</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <h5 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 font-bold text-teal-900">500+</h5>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Professionals Placed</span>
            </div>
            <div className="text-center">
              <h5 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 font-bold text-teal-900">150+</h5>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Corporate Clients</span>
            </div>
            <div className="text-center">
              <h5 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 font-bold text-teal-900">95%</h5>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Client Satisfaction</span>
            </div>
            <div className="text-center">
              <h5 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 font-bold text-teal-900">10+</h5>
              <span className="text-sm sm:text-base lg:text-lg text-gray-700">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="p-2 sm:p-4 bg-white">
        <div className="pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-5 md:px-8 xl:px-12 bg-lime-500 rounded-2xl sm:rounded-3xl">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="flex mb-4 items-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
              </svg>
              <span className="inline-block ml-2 text-sm font-medium">Expertise Areas</span>
            </div>
            <div className="border-t border-teal-900 border-opacity-25 pt-8 sm:pt-14">
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-12 sm:mb-16 lg:mb-24 leading-tight">Professional excellence across key sectors</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                <div>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 sm:mb-6">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                    <path d="M12 16h24v2H12v-2zm0 6h24v2H12v-2zm0 6h16v2H12v-2z" fill="#022C22"></path>
                    <path d="M16 12h16v2H16v-2z" fill="#022C22"></path>
                  </svg>
                  <h5 className="text-xl sm:text-2xl font-medium mb-3">Finance & Control Professionals</h5>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    Business controllers, financial controllers, project controllers. Expert professionals who ensure financial accuracy and strategic oversight for your organization.
                  </p>
                  <Link className="inline-block text-base sm:text-lg font-medium hover:text-teal-700 transition-colors" href="/expertise">
                    Learn more →
                  </Link>
                </div>
                <div>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 sm:mb-6">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                    <circle cx="24" cy="16" r="6" stroke="#022C22" strokeWidth="2" fill="none"></circle>
                    <path d="M16 32c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#022C22" strokeWidth="2" fill="none"></path>
                  </svg>
                  <h5 className="text-xl sm:text-2xl font-medium mb-3">ESG & Sustainability Experts</h5>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    CSRD specialists, sustainability officers, data & reporting professionals. Navigate the complex landscape of environmental and social governance.
                  </p>
                  <Link className="inline-block text-base sm:text-lg font-medium hover:text-teal-700 transition-colors" href="/expertise">
                    Learn more →
                  </Link>
                </div>
                <div>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 sm:mb-6">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                    <path d="M24 12l8 6v16H16V18l8-6z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    <path d="M20 24h8v10h-8V24z" fill="#022C22"></path>
                  </svg>
                  <h5 className="text-xl sm:text-2xl font-medium mb-3">Legal & Governance Professionals</h5>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    Corporate legal advisors, compliance officers, governance specialists. Ensure your organization operates within legal frameworks and best practices.
                  </p>
                  <Link className="inline-block text-base sm:text-lg font-medium hover:text-teal-700 transition-colors" href="/expertise">
                    Learn more →
                  </Link>
                </div>
                <div>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 sm:mb-6">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="white"></path>
                    <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    <path d="M19 24l3 3 6-6" stroke="#022C22" strokeWidth="2" fill="none"></path>
                  </svg>
                  <h5 className="text-xl sm:text-2xl font-medium mb-3">Social Care (WMO)</h5>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    Case managers, day-activity coaches, household support staff, community workers. Professionals who combine empathy with professional excellence.
                  </p>
                  <Link className="inline-block text-base sm:text-lg font-medium hover:text-teal-700 transition-colors" href="/expertise">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WMO Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 leading-tight">WMO / Social Care Excellence</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed px-2">
              Ihsan Talent supports municipalities and care organizations with WMO professionals who combine empathy with professional excellence. Our social care specialists understand the unique challenges of community support and deliver compassionate, effective solutions.
            </p>
            <Link
              className="inline-flex py-3 sm:py-4 px-5 sm:px-6 items-center justify-center text-base sm:text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
              href="/expertise"
            >
              Explore WMO Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-24 text-center">
            <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-sm mb-8 sm:mb-12 lg:mb-16 leading-tight px-2">
              Sustainable staffing through expertise and character. Building lasting partnerships for organizational success.
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                className="inline-flex py-3 sm:py-4 px-5 sm:px-6 items-center justify-center text-base sm:text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                href="/contact"
              >
                Submit assignment
              </Link>
              <Link
                className="inline-flex py-3 sm:py-4 px-5 sm:px-6 items-center justify-center text-base sm:text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                href="/for-professionals"
              >
                Join our network
              </Link>
            </div>
          </div>
          <div className="flex justify-center overflow-x-auto pb-4">
            <div className="flex gap-2 sm:gap-4 lg:gap-8 min-w-max">
              <div className="flex-shrink-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80">
                <Image className="block w-full rounded-lg" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
              </div>
              <div className="flex-shrink-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80">
                <Image className="block w-full rounded-lg" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
              </div>
              <div className="flex-shrink-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80">
                <Image className="block w-full rounded-lg" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
              </div>
              <div className="flex-shrink-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80">
                <Image className="block w-full rounded-lg" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
              </div>
              <div className="hidden sm:block flex-shrink-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80">
                <Image className="block w-full rounded-lg" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
              </div>
              <div className="hidden md:block flex-shrink-0 w-32 xs:w-40 sm:w-48 md:w-64 lg:w-80">
                <Image className="block w-full rounded-lg" src="/fauna-assets/about/about-image3.png" alt="" width={400} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 text-teal-900">
              What Our Clients Say
            </h2>
            <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
              Hear from organizations who have experienced the difference of working with professionals who combine expertise with character.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="relative max-w-lg mx-auto lg:mx-0">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      className="block w-full object-cover aspect-[4/3]"
                      src="/images/Nailed it_.jpeg"
                      alt="Marcus van der Berg"
                      width={500}
                      height={375}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
                    <div className="mb-6">
                      <svg className="w-8 h-8 text-lime-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 leading-relaxed text-gray-900">
                      &ldquo;Ihsan Talent delivered exactly what we needed - professionals with both expertise and integrity. Their character assessment process is truly unique.&rdquo;
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <div className="text-lg sm:text-xl font-semibold text-teal-900">Marcus van der Berg</div>
                        <div className="text-sm sm:text-base text-gray-600">HR Director, Municipality Amsterdam</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="p-2 sm:p-4">
        <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-4 sm:px-5 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16 bg-teal-900 rounded-2xl">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-sm text-white mb-4 sm:mb-6 leading-tight">
                  Ready to find your next professional?
                </h1>
                <p className="text-base sm:text-lg text-white opacity-80 leading-relaxed">
                  Connect with Ihsan Talent & Staffing for qualified professionals who combine expertise with character
                </p>
              </div>
              <div className="w-full lg:w-1/3 lg:text-right">
                <Link
                  className="inline-flex py-3 sm:py-4 px-5 sm:px-6 items-center justify-center text-base sm:text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200 w-full sm:w-auto"
                  href="/contact"
                >
                  Contact Us Today
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
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">FAQ</h1>
          <p className="text-gray-700 text-base sm:text-lg">Common questions about our staffing services and approach.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <button
              key={index}
              className="flex w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 items-start justify-between text-left shadow-md rounded-xl sm:rounded-2xl hover:shadow-lg transition-shadow duration-200"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="flex-1">
                <div className="pr-3 sm:pr-5">
                  <h5 className="text-base sm:text-lg font-medium leading-relaxed">{faq.question}</h5>
                </div>
                <div
                  className={`overflow-hidden pr-3 sm:pr-5 transition-all duration-500 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                </div>
              </div>
              <span className="flex-shrink-0 ml-2">
                <div className={`transition-transform duration-200 ${openFAQ === index ? 'rotate-45' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                    <path d="M12 5.69995V18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M5.69995 12H18.3" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </span>
            </button>
          ))}
          <div className="flex flex-col sm:flex-row py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10 bg-orange-50 rounded-xl sm:rounded-2xl mt-6 sm:mt-8">
            <div className="mb-4 sm:mb-0 sm:mr-6 flex justify-center sm:justify-start">
              <Image
                src="/images/logo.svg"
                alt="Ihsan Talent Logo"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <div className="text-center sm:text-left">
              <h5 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Need more information?</h5>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                <span>Contact our team for personalized assistance with your staffing needs.</span>{' '}
                <Link className="inline-block text-black font-medium underline hover:text-teal-700 transition-colors" href="/contact">
                  Get in touch
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}