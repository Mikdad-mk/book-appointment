import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

export default function ForProfessionals() {
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-3 sm:px-4 py-2 bg-lime-500/20 text-lime-300 rounded-full text-xs sm:text-sm font-medium">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                For Professionals
              </span>
            </div>
            
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 leading-tight">
              Advance your 
              <span className="text-lime-400"> career</span> with purpose
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4">
              Join a network of professionals who value both expertise and character. Build your career with meaningful opportunities that make a difference.
            </p>
            
            {/* Career benefits grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">95%</div>
                <div className="text-xs sm:text-sm text-white/80">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">€65k</div>
                <div className="text-xs sm:text-sm text-white/80">Avg. Salary</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">150+</div>
                <div className="text-xs sm:text-sm text-white/80">Top Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/80">Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                href="/contact"
              >
                <span className="mr-2">Join Our Network</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-teal-900 rounded-lg transition-all duration-200"
                href="/vacancies"
              >
                <span className="mr-2">View Opportunities</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ihsan Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Why Professionals Choose Ihsan</h2>
            <p className="text-xl text-gray-700">
              We believe in supporting our professionals&apos; growth while connecting them with meaningful opportunities.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-12">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-2 17l-5-5 1.4-1.4L22 26.2l7.6-7.6L31 20l-9 9z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Personal Coaching & Development</h3>
                <p className="text-gray-700">
                  Dedicated support to help you grow professionally and personally throughout your career journey with us.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-12">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M14 14h20v2H14v-2zm0 6h20v2H14v-2zm0 6h16v2H14v-2zm0 6h12v2H14v-2z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Clear Growth & Skill Progression</h3>
                <p className="text-gray-700">
                  Structured pathways for advancing your skills and career, with opportunities to work on increasingly complex projects.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 12l8 6v16H16V18l8-6z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    <path d="M20 24h8v10h-8V24z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Strong Portfolio of Clients</h3>
                <p className="text-gray-700">
                  Work with leading public organizations, corporations, and social institutions that value professional excellence.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    <path d="M19 24l3 3 6-6" stroke="#022C22" strokeWidth="2" fill="none"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Honest Communication</h3>
                <p className="text-gray-700">
                  Transparent, direct communication about opportunities, expectations, and feedback throughout your assignments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Additional Benefits</h2>
            <p className="text-xl text-teal-900">
              Beyond great opportunities, we provide comprehensive support for your professional journey.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Long-term Placement Stability</h3>
                <p className="text-gray-700">
                  We focus on sustainable matches that benefit both you and our clients for extended periods.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Human, Supportive Culture</h3>
                <p className="text-gray-700">
                  Join a community that values both professional excellence and personal well-being.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Competitive Compensation</h3>
                <p className="text-gray-700">
                  Fair, market-competitive rates that reflect your expertise and the value you bring.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">Professional Network</h3>
                <p className="text-gray-700">
                  Connect with like-minded professionals and expand your network within your field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Our Expertise Areas</h2>
            <p className="text-xl text-gray-700">
              We specialize in placing professionals across four key sectors where expertise and character matter most.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4">Finance & Control</h3>
                <p className="text-gray-700 mb-4">
                  Controllers, auditors, risk & reporting professionals working with leading organizations.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-lime-500 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4">ESG & Sustainability</h3>
                <p className="text-gray-700 mb-4">
                  CSRD analysts, sustainability officers, ESG consultants driving positive change.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-lime-500 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4">Legal & Governance</h3>
                <p className="text-gray-700 mb-4">
                  Corporate legal advisors, compliance officers, public policy experts.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-lime-500 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="p-8 bg-orange-50 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4">Social Care (WMO)</h3>
                <p className="text-gray-700 mb-4">
                  Case managers, day-activity coaches, household support staff, community workers.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-lime-500 font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-8">Ready to Take the Next Step?</h2>
            <p className="text-xl text-white opacity-80 mb-10">
              Join our network of professionals who combine expertise with character. Let&apos;s build your career together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                href="/contact"
              >
                Apply Now
              </Link>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-white hover:border-lime-500 hover:bg-lime-500 rounded-full transition duration-200"
                href="/vacancies"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}