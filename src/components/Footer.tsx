import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <section className="relative py-12 lg:py-24 bg-orange-50 overflow-hidden">
      <Image
        className="absolute bottom-0 left-0"
        src="/fauna-assets/footer/waves-lines-left-bottom.png"
        alt=""
        width={400}
        height={300}
      />
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-wrap mb-16 -mx-4">
          <div className="w-full lg:w-2/12 xl:w-2/12 px-4 mb-16 lg:mb-0 flex justify-center lg:justify-start">
            <Link className="inline-block mb-4" href="/">
              <Image src="/images/logo-256.png" alt="Ihsan Talent & Staffing" width={96} height={96} className="w-24 h-24" />
            </Link>
          </div>
          <div className="w-full md:w-7/12 lg:w-6/12 px-4 mb-16 lg:mb-0">
            <div className="flex flex-wrap -mx-4">
              <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                <h3 className="mb-6 font-bold">Services</h3>
                <ul>
                  <li className="mb-4">
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/for-clients">
                      For Clients
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/for-professionals">
                      For Professionals
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/expertise">
                      Expertise Areas
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                <h3 className="mb-6 font-bold">Resources</h3>
                <ul>
                  <li className="mb-4">
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/vacancies">
                      Vacancies
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/our-approach">
                      Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/blog">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full xs:w-1/3 px-4">
                <h3 className="mb-6 font-bold">Company</h3>
                <ul>
                  <li className="mb-4">
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block text-gray-600 hover:text-lime-500 font-medium" href="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 lg:w-4/12 px-4">
            <div className="max-w-sm p-8 bg-teal-900 rounded-2xl mx-auto md:mr-0">
              <h5 className="text-xl font-medium text-white mb-4">Professional Staffing Updates</h5>
              <p className="text-sm text-white opacity-80 leading-normal mb-10">
                Stay informed about the latest opportunities and insights in professional staffing and talent management.
              </p>
              <div className="flex flex-col">
                <input
                  className="h-12 w-full px-4 py-1 placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="email"
                  placeholder="Your e-mail..."
                />
                <Link
                  className="h-12 inline-flex mt-3 py-1 px-5 items-center justify-center font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                  href="/contact"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mb-3 justify-between">
          <div className="flex items-center mb-3">
            <Link className="inline-block text-black hover:text-lime-500" href="https://linkedin.com/company/ihsan-talent-staffing" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"></path>
              </svg>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">
              Prinses Margrietplantsoen 33, 2595 AM The Hague, Netherlands
            </p>
            <p className="text-sm text-gray-500 mb-3">
              Email: <Link href="mailto:talent@ihsaneurope.com" className="text-teal-900 hover:text-lime-500">talent@ihsaneurope.com</Link>
            </p>
          </div>
          <p className="text-sm text-gray-500 mb-3">© 2024 Ihsan Talent & Staffing B.V. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}