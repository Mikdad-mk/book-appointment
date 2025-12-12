import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ForProfessionals() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-lime-500 via-lime-400 to-lime-600 overflow-hidden">

        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-3 bg-teal-900 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              For Professionals
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-teal-900 mb-8 leading-tight">
              Advance your 
              <span className="text-white"> career</span> with purpose
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-teal-800 mb-12 leading-relaxed">
              Join a network of professionals who value both expertise and character. Build your career with meaningful opportunities that make a difference.
            </p>
            
            {/* Career benefits grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">95%</div>
                <div className="text-sm text-teal-800">Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">€65k</div>
                <div className="text-sm text-teal-800">Avg. Salary</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">150+</div>
                <div className="text-sm text-teal-800">Top Clients</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">24/7</div>
                <div className="text-sm text-teal-800">Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-lime-500 bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                href="/contact"
              >
                Join Our Network
              </Link>
              <Link
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-white hover:bg-gray-50 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                href="/vacancies"
              >
                View Opportunities
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
              We believe in supporting our professionals' growth while connecting them with meaningful opportunities.
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
              Join our network of professionals who combine expertise with character. Let's build your career together.
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