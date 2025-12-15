'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  category: string
  salary: string
  description: string
  requirements: string[]
  posted: string
}

const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Senior Financial Controller",
    company: "Municipality Amsterdam",
    location: "Amsterdam, Netherlands",
    type: "Interim",
    category: "Finance & Control",
    salary: "€70,000 - €85,000",
    description: "Lead financial reporting and control processes for a major municipality. Oversee budget planning, financial analysis, and compliance reporting.",
    requirements: ["Master&apos;s degree in Finance/Accounting", "5+ years controller experience", "Public sector experience preferred", "Strong analytical skills"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "ESG Reporting Specialist",
    company: "Sustainable Corp B.V.",
    location: "The Hague, Netherlands",
    type: "Permanent",
    category: "ESG & Sustainability",
    salary: "€55,000 - €70,000",
    description: "Develop and implement CSRD reporting processes. Work with cross-functional teams to collect and analyze sustainability data.",
    requirements: ["Bachelor&apos;s degree in Environmental Science or related", "CSRD reporting experience", "Data analysis skills", "Excellent communication"],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Compliance Officer",
    company: "Financial Services Group",
    location: "Rotterdam, Netherlands",
    type: "Detavast",
    category: "Legal & Governance",
    salary: "€60,000 - €75,000",
    description: "Ensure regulatory compliance across all business operations. Develop policies and procedures, conduct risk assessments.",
    requirements: ["Law degree or equivalent", "3+ years compliance experience", "Financial services background", "Risk management knowledge"],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "WMO Case Manager",
    company: "Care Foundation Utrecht",
    location: "Utrecht, Netherlands",
    type: "Permanent",
    category: "Social Care (WMO)",
    salary: "€45,000 - €55,000",
    description: "Support individuals with disabilities in their daily lives. Coordinate care plans and work with multidisciplinary teams.",
    requirements: ["Social work degree", "WMO experience preferred", "Empathetic and patient", "Strong organizational skills"],
    posted: "5 days ago"
  },
  {
    id: 5,
    title: "Project Controller",
    company: "Infrastructure Development NV",
    location: "Eindhoven, Netherlands",
    type: "Project-based",
    category: "Finance & Control",
    salary: "€65,000 - €80,000",
    description: "Control financial aspects of major infrastructure projects. Monitor budgets, forecasts, and project profitability.",
    requirements: ["Finance/Business degree", "Project controlling experience", "Infrastructure sector knowledge", "Advanced Excel skills"],
    posted: "1 day ago"
  },
  {
    id: 6,
    title: "Sustainability Officer",
    company: "Green Energy Solutions",
    location: "Amsterdam, Netherlands",
    type: "Interim",
    category: "ESG & Sustainability",
    salary: "€58,000 - €72,000",
    description: "Lead sustainability initiatives and environmental impact assessments. Develop and implement green policies.",
    requirements: ["Environmental studies background", "Sustainability reporting experience", "Project management skills", "Stakeholder engagement"],
    posted: "4 days ago"
  }
]

export default function Vacancies() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedType, setSelectedType] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const categories = ['All', 'Finance & Control', 'ESG & Sustainability', 'Legal & Governance', 'Social Care (WMO)']
  const types = ['All', 'Permanent', 'Interim', 'Detavast', 'Project-based']

  const filteredJobs = sampleJobs.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory
    const matchesType = selectedType === 'All' || job.type === selectedType
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesCategory && matchesType && matchesSearch
  })

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
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Live Job Board
              </span>
            </div>
            
            <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 leading-tight">
              Current 
              <span className="text-lime-400"> opportunities</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4">
              Discover meaningful career opportunities with organizations that value both expertise and character. Find your next role today.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 px-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">25+</div>
                <div className="text-xs sm:text-sm text-white/80">Open Positions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">4</div>
                <div className="text-xs sm:text-sm text-white/80">Expertise Areas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">€65k</div>
                <div className="text-xs sm:text-sm text-white/80">Avg. Salary</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/20">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-lime-400 mb-1">95%</div>
                <div className="text-xs sm:text-sm text-white/80">Match Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                href="#jobs"
              >
                <span className="mr-2">Browse Opportunities</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <Link
                className="group inline-flex py-3 sm:py-4 px-6 sm:px-8 items-center justify-center text-base sm:text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-teal-900 rounded-lg transition-all duration-200"
                href="/for-professionals"
              >
                <span className="mr-2">Join Our Network</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap -mx-4 mb-8">
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Search jobs, companies, or locations..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Showing {filteredJobs.length} of {sampleJobs.length} opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No opportunities match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedType('All')
                    setSearchTerm('')
                  }}
                  className="inline-flex py-3 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Don&apos;t See the Right Opportunity?</h2>
            <p className="text-xl text-teal-900 mb-10">
              Join our talent network and be the first to know about new opportunities that match your expertise and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                href="/contact"
              >
                Join Our Network
              </Link>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                href="/for-professionals"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function JobCard({ job }: { job: Job }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-wrap items-start justify-between mb-4">
        <div className="flex-1 min-w-0 mr-4">
          <h3 className="text-xl font-medium text-gray-900 mb-2">{job.title}</h3>
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
            <span className="mr-4">{job.company}</span>
            <span className="mr-4">{job.location}</span>
            <span>{job.posted}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-lime-100 text-lime-800 text-sm rounded-full">
              {job.category}
            </span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
              {job.type}
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
              {job.salary}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{job.description}</p>
      
      {isExpanded && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
          <ul className="space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-700 text-sm">• {req}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex flex-wrap items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-teal-900 hover:text-lime-500 font-medium text-sm"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        <Link
          href="/contact"
          className="inline-flex py-2 px-4 items-center justify-center text-sm font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
        >
          Apply Now
        </Link>
      </div>
    </div>
  )
}