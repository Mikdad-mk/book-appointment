import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ForClients() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-orange-50 via-white to-lime-50 overflow-hidden">
        {/* Geometric background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-lime-200 to-transparent rounded-full opacity-30 transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200 to-transparent rounded-full opacity-40 transform -translate-x-20 translate-y-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <span className="inline-block px-4 py-2 bg-teal-900 text-white rounded-full text-sm font-medium mb-6">
                  For Organizations
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-teal-900 mb-6 leading-tight">
                  Find the right 
                  <span className="text-lime-600"> professionals</span> for your organization
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  We solve your staffing challenges with qualified professionals who combine technical expertise with strong personal character.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    href="/contact"
                  >
                    Submit Assignment
                  </Link>
                  <Link
                    className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border-2 border-teal-900 hover:bg-teal-900 hover:text-white rounded-full transition duration-200"
                    href="/our-approach"
                  >
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                      <span className="text-gray-700">Finance & Control</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-700">ESG & Sustainability</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700">Legal & Governance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-lime-600 rounded-full"></div>
                      <span className="text-gray-700">Social Care (WMO)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Challenges We Solve</h2>
            <p className="text-xl text-gray-700">
              Organizations face complex staffing challenges in today's competitive market. We provide sustainable solutions.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-12">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Shortage of Qualified Professionals</h3>
                <p className="text-gray-700">
                  Finding professionals with the right combination of technical skills and personal integrity is increasingly difficult in today's market.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-12">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M16 16h16v2H16v-2zm0 6h16v2H16v-2zm0 6h12v2H16v-2z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Need for Reliable Long-term Staffing</h3>
                <p className="text-gray-700">
                  Organizations require professionals who will stay committed and deliver consistent results over extended periods.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 12l8 6v16H16V18l8-6z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Business-Critical Expertise Gaps</h3>
                <p className="text-gray-700">
                  Specialized knowledge in finance, ESG, legal, and social care requires professionals with deep domain expertise.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M20 14h8v2h-8v-2zm0 6h8v2h-8v-2zm0 6h8v2h-8v-2zm0 6h8v2h-8v-2z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Temporary or Project-Based Capacity Needs</h3>
                <p className="text-gray-700">
                  Flexible staffing solutions for specific projects, seasonal demands, or temporary capacity increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Our Solutions</h2>
            <p className="text-xl text-teal-900">
              Comprehensive staffing solutions tailored to your organization's specific needs and culture.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Interim Staffing</h3>
                <p className="text-gray-700">
                  Experienced professionals ready to step in immediately for temporary assignments and critical roles.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Detavast / Temp-to-Perm</h3>
                <p className="text-gray-700">
                  Trial periods that allow both parties to evaluate fit before committing to permanent employment.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Project-Based Teams</h3>
                <p className="text-gray-700">
                  Specialized teams assembled for specific projects with defined timelines and deliverables.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Senior Consulting & Advisory</h3>
                <p className="text-gray-700">
                  High-level strategic guidance from seasoned professionals with deep industry expertise.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Crisis Deployment (WMO / Social Care)</h3>
                <p className="text-gray-700">
                  Rapid response teams for urgent social care situations and community support needs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Permanent Placements</h3>
                <p className="text-gray-700">
                  Long-term staffing solutions with professionals who align with your organizational values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Ready to Find Your Next Professional?</h2>
            <p className="text-xl text-gray-700 mb-10">
              Let us help you solve your staffing challenges with qualified professionals who combine expertise with character.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                href="/contact"
              >
                Submit Assignment
              </Link>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                href="/our-approach"
              >
                Learn Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}