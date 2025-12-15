import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

export default function ForClients() {
  return (
    <div>
      {/* Top Banner */}
      <div>
        <p className="mb-0 py-3 px-4 bg-lime-500 text-center text-sm sm:text-base">
          Part of Ihsan Europe Group B.V. | International staffing solutions
        </p>
      </div>

      <Navigation variant="home" />
      
      {/* Hero Section */}
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
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="mb-6 sm:mb-8">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-lime-500/20 text-lime-300 rounded-full text-xs sm:text-sm font-medium">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  For Organizations
                </span>
              </div>
              
              <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 leading-tight">
                Find the right 
                <span className="text-lime-400"> professionals</span> for your organization
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We solve your staffing challenges with qualified professionals who combine technical expertise with strong personal character and integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  href="/contact"
                >
                  <span className="mr-2">Submit Assignment</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-teal-900 rounded-lg transition-all duration-200"
                  href="/our-approach"
                >
                  <span className="mr-2">Our Approach</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative max-w-lg mx-auto">
                {/* Professional expertise showcase */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Our Expertise Areas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="w-3 h-3 bg-lime-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium">Finance & Control Professionals</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium">ESG & Sustainability Experts</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium">Legal & Governance Specialists</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium">Social Care (WMO) Professionals</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-lime-400">500+</div>
                      <div className="text-sm text-white/80">Professionals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-lime-400">95%</div>
                      <div className="text-sm text-white/80">Success Rate</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400/20 rounded-full blur-xl"></div>
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
              Organizations face complex staffing challenges in today&apos;s competitive market. We provide sustainable solutions.
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
                  Finding professionals with the right combination of technical skills and personal integrity is increasingly difficult in today&apos;s market.
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
              Comprehensive staffing solutions tailored to your organization&apos;s specific needs and culture.
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