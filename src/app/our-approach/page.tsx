import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function OurApproach() {
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
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 overflow-hidden">


        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-3 bg-lime-500 text-teal-900 rounded-full text-sm font-medium mb-8">
              Six-Step Methodology
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-white mb-8 leading-tight">
              Our proven
              <span className="text-lime-400"> approach</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white opacity-90 mb-12 leading-relaxed">
              A comprehensive methodology that ensures sustainable staffing through the perfect combination of expertise and character assessment.
            </p>

            {/* Process steps preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-lime-500 rounded-full mx-auto mb-2 flex items-center justify-center text-teal-900 font-bold text-sm">1</div>
                <div className="text-sm text-white">Client Intake</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="text-sm text-white">Skills Assessment</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-lime-500 rounded-full mx-auto mb-2 flex items-center justify-center text-teal-900 font-bold text-sm">3</div>
                <div className="text-sm text-white">Character Assessment</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm">4</div>
                <div className="text-sm text-white">Matching</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-lime-500 rounded-full mx-auto mb-2 flex items-center justify-center text-teal-900 font-bold text-sm">5</div>
                <div className="text-sm text-white">Onboarding</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-orange-400 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm">6</div>
                <div className="text-sm text-white">Coaching</div>
              </div>
            </div>

            <Link
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              href="/contact"
            >
              Experience Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Six-Step Process</h2>
            <p className="text-xl text-gray-700">
              Our proven methodology ensures the right match between professionals and organizations, focusing on both technical competence and personal character.
            </p>
          </div>

          {/* Step 1 */}
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-teal-900">1</span>
                  </div>
                  <h3 className="text-2xl font-medium">Client Intake & Need Assessment</h3>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  We begin with a comprehensive understanding of your organization&apos;s specific needs, culture, and expectations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Detailed role requirements analysis</li>
                  <li>• Organizational culture assessment</li>
                  <li>• Timeline and budget discussions</li>
                  <li>• Success criteria definition</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image3.png"
                alt="Client Intake Process"
                width={500}
                height={400}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-2 lg:order-1">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image3.png"
                alt="Skills Assessment"
                width={500}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 order-1 lg:order-2">
              <div className="max-w-lg ml-auto">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-teal-900">2</span>
                  </div>
                  <h3 className="text-2xl font-medium">Skills Assessment of Candidates</h3>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Rigorous evaluation of technical competencies and professional experience relevant to your specific requirements.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technical skills verification</li>
                  <li>• Industry experience validation</li>
                  <li>• Certification and qualification checks</li>
                  <li>• Portfolio and work sample review</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-teal-900">3</span>
                  </div>
                  <h3 className="text-2xl font-medium">Character Assessment</h3>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Our unique differentiator: comprehensive evaluation of personal integrity, reliability, and values alignment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Integrity and ethics evaluation</li>
                  <li>• Communication style assessment</li>
                  <li>• Work ethic and reliability checks</li>
                  <li>• Values alignment verification</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image3.png"
                alt="Character Assessment"
                width={500}
                height={400}
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-2 lg:order-1">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image3.png"
                alt="Matching Process"
                width={500}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 order-1 lg:order-2">
              <div className="max-w-lg ml-auto">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-teal-900">4</span>
                  </div>
                  <h3 className="text-2xl font-medium">Matching & Placement</h3>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Careful alignment of candidate capabilities and character with client needs and organizational culture.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive candidate-client matching</li>
                  <li>• Cultural fit evaluation</li>
                  <li>• Interview coordination and support</li>
                  <li>• Final selection and negotiation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-wrap items-center -mx-4 mb-16">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-teal-900">5</span>
                  </div>
                  <h3 className="text-2xl font-medium">Onboarding Support</h3>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Comprehensive support during the critical first weeks to ensure successful integration and immediate productivity.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Structured onboarding process</li>
                  <li>• Regular check-ins and feedback</li>
                  <li>• Issue resolution and support</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image3.png"
                alt="Onboarding Support"
                width={500}
                height={400}
              />
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 order-2 lg:order-1">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image3.png"
                alt="Coaching and Evaluation"
                width={500}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2 px-4 order-1 lg:order-2">
              <div className="max-w-lg ml-auto">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-teal-900">6</span>
                  </div>
                  <h3 className="text-2xl font-medium">Coaching & Periodic Evaluation</h3>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Ongoing support and development to ensure continued success and professional growth throughout the assignment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regular performance reviews</li>
                  <li>• Professional development coaching</li>
                  <li>• Continuous improvement feedback</li>
                  <li>• Long-term relationship management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">What Makes Us Different</h2>
            <p className="text-xl text-gray-700">
              Our unique focus on character assessment alongside technical expertise sets us apart in the staffing industry.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-white rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-2 17l-5-5 1.4-1.4L22 26.2l7.6-7.6L31 20l-9 9z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Character-First Approach</h3>
                <p className="text-gray-700">
                  We believe sustainable staffing requires professionals with both technical skills and strong personal integrity. Our character assessment is unique in the industry.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-white rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M16 16h16v2H16v-2zm0 6h16v2H16v-2zm0 6h12v2H16v-2z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Long-term Relationship Focus</h3>
                <p className="text-gray-700">
                  We invest in building lasting relationships with both clients and professionals, ensuring mutual success and satisfaction over time.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="p-8 bg-white rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 12l8 6v16H16V18l8-6z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    <path d="M20 24h8v10h-8V24z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Sector Specialization</h3>
                <p className="text-gray-700">
                  Deep expertise in Finance & Control, ESG & Sustainability, Legal & Governance, and Social Care ensures we understand your specific needs.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="p-8 bg-white rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    <path d="M19 24l3 3 6-6" stroke="#022C22" strokeWidth="2" fill="none"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Continuous Support</h3>
                <p className="text-gray-700">
                  Our commitment doesn&apos;t end with placement. We provide ongoing coaching and support to ensure continued success for all parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Our Quality Standards</h2>
            <p className="text-xl text-gray-700">
              We maintain the highest standards throughout our process to ensure exceptional results for both clients and professionals.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm-2 17l-5-5 1.4-1.4L14 18.2l7.6-7.6L23 12l-9 9z" fill="#022C22"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4">95% Success Rate</h3>
                <p className="text-gray-700">
                  Our comprehensive approach results in highly successful long-term placements.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z" fill="#022C22"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4">Rigorous Screening</h3>
                <p className="text-gray-700">
                  Every candidate undergoes comprehensive skills and character assessment.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 4c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#022C22"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-4">Ongoing Support</h3>
                <p className="text-gray-700">
                  Continuous coaching and evaluation throughout the assignment lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-8">Experience Our Approach</h2>
            <p className="text-xl text-white opacity-80 mb-10">
              Ready to see how our unique methodology can solve your staffing challenges? Let&apos;s discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                href="/contact"
              >
                Start a Conversation
              </Link>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-white hover:border-lime-500 hover:bg-lime-500 rounded-full transition duration-200"
                href="/for-clients"
              >
                Learn More for Clients
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}