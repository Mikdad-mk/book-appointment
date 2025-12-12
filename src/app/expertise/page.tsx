import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Expertise() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Sectoral background visualization */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-lime-100 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-100 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-100 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-lime-200 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-6 py-3 bg-teal-900 text-white rounded-full text-sm font-medium mb-8">
              Four Key Sectors
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-teal-900 mb-8 leading-tight">
              Our 
              <span className="text-lime-600"> expertise</span> areas
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-700 mb-12 leading-relaxed">
              Specialized professionals across four key sectors where technical expertise and personal character create lasting impact.
            </p>
          </div>
          
          {/* Expertise areas preview grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-lime-500 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-teal-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-teal-900 mb-2">Finance & Control</h3>
              <p className="text-sm text-teal-800">Controllers & Analysts</p>
            </div>
            
            <div className="group bg-orange-400 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">ESG & Sustainability</h3>
              <p className="text-sm text-white opacity-90">CSRD Specialists</p>
            </div>
            
            <div className="group bg-teal-600 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5A1.5 1.5 0 017.5 8h5A1.5 1.5 0 0114 9.5v5a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 016 14.5v-5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Legal & Governance</h3>
              <p className="text-sm text-white opacity-90">Compliance Officers</p>
            </div>
            
            <div className="group bg-lime-600 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-lime-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Social Care (WMO)</h3>
              <p className="text-sm text-white opacity-90">Case Managers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Finance & Control Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <div className="mb-6">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H52C58.6274 0 64 5.37258 64 12V52C64 58.6274 58.6274 64 52 64H12C5.37258 64 0 58.6274 0 52V12Z" fill="#BEF264"></path>
                    <path d="M16 20h32v3H16v-3zm0 8h32v3H16v-3zm0 8h24v3H16v-3z" fill="#022C22"></path>
                    <path d="M20 16h24v3H20v-3z" fill="#022C22"></path>
                  </svg>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl mb-6">Finance & Control</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Controllers, auditors, risk & reporting professionals who ensure financial accuracy and strategic oversight for organizations across all sectors.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Key Roles:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Business Controllers</li>
                    <li>• Financial Controllers</li>
                    <li>• Project Controllers</li>
                    <li>• Risk Management Specialists</li>
                    <li>• Financial Reporting Analysts</li>
                    <li>• Internal Auditors</li>
                  </ul>
                </div>
                <Link
                  className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                  href="/contact"
                >
                  Find Finance Professionals
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image2.png"
                alt="Finance & Control Professionals"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ESG & Sustainability Section */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-2 lg:order-1">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image3.png"
                alt="ESG & Sustainability Experts"
                width={500}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 order-1 lg:order-2">
              <div className="max-w-lg ml-auto">
                <div className="mb-6">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H52C58.6274 0 64 5.37258 64 12V52C64 58.6274 58.6274 64 52 64H12C5.37258 64 0 58.6274 0 52V12Z" fill="#BEF264"></path>
                    <circle cx="32" cy="24" r="8" stroke="#022C22" strokeWidth="3" fill="none"></circle>
                    <path d="M20 48c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#022C22" strokeWidth="3" fill="none"></path>
                  </svg>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl mb-6">ESG & Sustainability</h2>
                <p className="text-xl text-gray-700 mb-8">
                  CSRD specialists, sustainability officers, and ESG consultants who navigate the complex landscape of environmental and social governance.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Key Roles:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• CSRD Reporting Specialists</li>
                    <li>• Sustainability Officers</li>
                    <li>• ESG Data Analysts</li>
                    <li>• Environmental Consultants</li>
                    <li>• Social Impact Managers</li>
                    <li>• Climate Risk Specialists</li>
                  </ul>
                </div>
                <Link
                  className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                  href="/contact"
                >
                  Find ESG Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Governance Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <div className="mb-6">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H52C58.6274 0 64 5.37258 64 12V52C64 58.6274 58.6274 64 52 64H12C5.37258 64 0 58.6274 0 52V12Z" fill="#BEF264"></path>
                    <path d="M32 16l12 8v24H20V24l12-8z" stroke="#022C22" strokeWidth="3" fill="none"></path>
                    <path d="M26 32h12v16h-12V32z" fill="#022C22"></path>
                  </svg>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl mb-6">Legal & Governance</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Corporate legal advisors, compliance officers, and governance specialists who ensure organizations operate within legal frameworks and best practices.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Key Roles:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Corporate Legal Advisors</li>
                    <li>• Compliance Officers</li>
                    <li>• Governance Specialists</li>
                    <li>• Public Policy Experts</li>
                    <li>• Regulatory Affairs Managers</li>
                    <li>• Contract Specialists</li>
                  </ul>
                </div>
                <Link
                  className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                  href="/contact"
                >
                  Find Legal Professionals
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image4.png"
                alt="Legal & Governance Professionals"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Care (WMO) Section */}
      <section className="py-12 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-2 lg:order-1">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image2.png"
                alt="Social Care WMO Professionals"
                width={500}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 order-1 lg:order-2">
              <div className="max-w-lg ml-auto">
                <div className="mb-6">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0H52C58.6274 0 64 5.37258 64 12V52C64 58.6274 58.6274 64 52 64H12C5.37258 64 0 58.6274 0 52V12Z" fill="#BEF264"></path>
                    <path d="M32 20c-7.3 0-13.3 6-13.3 13.3s6 13.3 13.3 13.3 13.3-6 13.3-13.3S39.3 20 32 20z" stroke="#022C22" strokeWidth="3" fill="none"></path>
                    <path d="M25.3 33.3l4 4 8-8" stroke="#022C22" strokeWidth="3" fill="none"></path>
                  </svg>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl mb-6">Social Care (WMO)</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Case managers, day-activity coaches, household support staff, and community workers who combine empathy with professional excellence in social care.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Key Roles:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Case Managers</li>
                    <li>• Day-Activity Coaches</li>
                    <li>• Household Support Staff</li>
                    <li>• Community Workers</li>
                    <li>• Social Care Coordinators</li>
                    <li>• WMO Specialists</li>
                  </ul>
                </div>
                <Link
                  className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  href="/contact"
                >
                  Find Social Care Professionals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sector Excellence Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Cross-Sector Excellence</h2>
            <p className="text-xl text-gray-700 mb-12">
              Our professionals work across public, corporate, and societal organizations, bringing consistent quality and character to every assignment.
            </p>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="p-6 bg-orange-50 rounded-2xl h-full">
                  <h3 className="text-xl font-medium mb-4">Public Sector</h3>
                  <p className="text-gray-700">
                    Municipalities, government agencies, and public institutions requiring specialized expertise.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="p-6 bg-orange-50 rounded-2xl h-full">
                  <h3 className="text-xl font-medium mb-4">Corporate Sector</h3>
                  <p className="text-gray-700">
                    Private companies, multinational corporations, and businesses of all sizes.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="p-6 bg-orange-50 rounded-2xl h-full">
                  <h3 className="text-xl font-medium mb-4">Societal Organizations</h3>
                  <p className="text-gray-700">
                    Non-profits, foundations, care organizations, and community-focused institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-8">Ready to Find Your Expert?</h2>
            <p className="text-xl text-white opacity-80 mb-10">
              Connect with professionals who combine deep expertise with strong character across all our specialty areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                href="/contact"
              >
                Submit Assignment
              </Link>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-white hover:border-lime-500 hover:bg-lime-500 rounded-full transition duration-200"
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