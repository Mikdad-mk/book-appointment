'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
    requirements: ["Master's degree in Finance/Accounting", "5+ years controller experience", "Public sector experience preferred", "Strong analytical skills"],
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
    requirements: ["Bachelor's degree in Environmental Science or related", "CSRD reporting experience", "Data analysis skills", "Excellent communication"],
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
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-400 via-orange-300 to-lime-400 overflow-hidden">

        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-6 py-3 bg-teal-900 text-white rounded-full text-sm font-medium mb-8">
              Live Job Board
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-teal-900 mb-8 leading-tight">
              Current 
              <span className="text-white"> opportunities</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-teal-800 mb-12 leading-relaxed">
              Discover meaningful career opportunities with organizations that value both expertise and character. Find your next role today.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">25+</div>
                <div className="text-sm text-teal-800">Open Positions</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">4</div>
                <div className="text-sm text-teal-800">Expertise Areas</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">€65k</div>
                <div className="text-sm text-teal-800">Avg. Salary</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal-900 mb-1">95%</div>
                <div className="text-sm text-teal-800">Match Rate</div>
              </div>
            </div>
            
            <Link
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-orange-400 bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              href="#jobs"
            >
              Browse Opportunities
            </Link>
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
            <h2 className="font-heading text-4xl sm:text-5xl mb-8">Don't See the Right Opportunity?</h2>
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