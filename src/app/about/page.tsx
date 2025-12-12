import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
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
              About Ihsan Talent & Staffing
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white opacity-80 mb-10">
              Part of Ihsan Europe Group, we believe that sustainable staffing is achieved when technical expertise and strong personal character come together.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
              <div>
                <h2 className="font-heading text-4xl sm:text-5xl mb-8">Our Story</h2>
                <p className="text-xl text-gray-700 mb-8">
                  Ihsan Talent & Staffing B.V. is part of Ihsan Europe Group B.V. and the international Ihsan International Group Inc. (Canada). We specialize in connecting organizations with professionals who combine technical expertise with strong personal character.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our professionals are selected based not only on their skills, but on their integrity, reliability, and human qualities. This unique approach ensures sustainable staffing solutions that benefit both clients and professionals.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image2.png"
                alt="Ihsan Talent & Staffing Team"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Our Mission & Values</h2>
            <p className="text-xl text-gray-700 mb-12">
              To provide public, corporate, and societal organizations with highly qualified professionals who combine technical expertise with strong personal integrity and character.
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
                <h3 className="text-2xl font-medium mb-4">Professionalism</h3>
                <p className="text-gray-700">
                  We maintain the highest standards of professional excellence in everything we do, from candidate selection to client service.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-white rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="#022C22" strokeWidth="2" fill="none"></path>
                    <path d="M19 24l3 3 6-6" stroke="#022C22" strokeWidth="2" fill="none"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Integrity</h3>
                <p className="text-gray-700">
                  Honesty and transparency guide all our interactions. We build trust through consistent, ethical behavior and open communication.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="p-8 bg-white rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <circle cx="24" cy="20" r="6" stroke="#022C22" strokeWidth="2" fill="none"></circle>
                    <path d="M16 36c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#022C22" strokeWidth="2" fill="none"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Human Character</h3>
                <p className="text-gray-700">
                  We value the human qualities that make professionals truly exceptional: empathy, reliability, and genuine care for their work and colleagues.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="p-8 bg-white rounded-2xl h-full">
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264"></path>
                    <path d="M16 16h16v2H16v-2zm0 6h16v2H16v-2zm0 6h12v2H16v-2z" fill="#022C22"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium mb-4">Result Orientation</h3>
                <p className="text-gray-700">
                  We focus on delivering measurable outcomes that create lasting value for our clients and meaningful career growth for our professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Areas */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Core Business Areas</h2>
            <p className="text-xl text-gray-700">
              We specialize in four key sectors where expertise and character create the greatest impact.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-lime-500 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4 text-teal-900">Finance & Control Professionals</h3>
                <p className="text-teal-900 mb-4">
                  Business controllers, financial controllers, project controllers who ensure financial accuracy and strategic oversight.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-white font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="p-8 bg-lime-500 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4 text-teal-900">ESG & Sustainability Specialists</h3>
                <p className="text-teal-900 mb-4">
                  CSRD specialists, sustainability officers, data & reporting professionals driving positive change.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-white font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="p-8 bg-lime-500 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4 text-teal-900">Legal & Governance Officers</h3>
                <p className="text-teal-900 mb-4">
                  Corporate legal advisors, compliance officers, governance specialists ensuring regulatory excellence.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-white font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="p-8 bg-lime-500 rounded-2xl h-full">
                <h3 className="text-2xl font-medium mb-4 text-teal-900">Social Care & WMO Professionals</h3>
                <p className="text-teal-900 mb-4">
                  Case managers, day-activity coaches, household support staff, community workers with heart.
                </p>
                <Link href="/expertise" className="text-teal-900 hover:text-white font-medium">
                  Learn more →
                </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-12 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg">
                <h2 className="font-heading text-4xl sm:text-5xl mb-8">Our Location</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <div>
                    <h3 className="font-medium text-xl mb-2">Headquarters</h3>
                    <p>Prinses Margrietplantsoen 33<br />2595 AM The Hague<br />The Netherlands</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Contact</h3>
                    <p>Email: <Link href="mailto:talent@ihsaneurope.com" className="text-teal-900 hover:text-lime-500">talent@ihsaneurope.com</Link></p>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl mb-2">Part of</h3>
                    <p>Ihsan Europe Group B.V.<br />Ihsan International Group Inc. (Canada)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <Image
                className="block w-full rounded-2xl"
                src="/fauna-assets/about/about-image4.png"
                alt="Our Office in The Hague"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-8">Ready to Work Together?</h2>
            <p className="text-xl text-white opacity-80 mb-10">
              Whether you're an organization seeking exceptional professionals or a professional looking for meaningful opportunities, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                href="/for-clients"
              >
                For Organizations
              </Link>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-white hover:border-lime-500 hover:bg-lime-500 rounded-full transition duration-200"
                href="/for-professionals"
              >
                For Professionals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}