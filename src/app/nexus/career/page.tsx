"use client"

import { useState } from "react"
import {
  Search,
  ChevronDown,
  ArrowRight,
  MapPin,
  Users,
  Phone,
  FileText,
  Crown,
  X,
  Calendar,
  DollarSign,
  Clock,
  Building,
} from "lucide-react"
import FooterSection from "@/app/nexus/components/FooterComponent"
import Newsletter from "../components/Newsletter"

interface Job {
  id: number
  role: string
  team: string
  office: string
  flag: string
  type?: string
  salary?: string
  posted?: string
  description?: string
  responsibilities?: string[]
  requirements?: string[]
  benefits?: string[]
}

interface InterviewStep {
  step: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [teamFilter, setTeamFilter] = useState("All")
  const [locationFilter, setLocationFilter] = useState("All")
  const [selectedStep, setSelectedStep] = useState(1)
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const jobs: Job[] = [
    // {
    //   id: 1,
    //   role: "Business Development Executive",
    //   team: "Enterprise Sales",
    //   office: "Lagos, Nigeria",
    //   flag: "🇳🇬",
    //   type: "Full-time",
    //   salary: "₦2,500,000 - ₦4,000,000",
    //   posted: "2 days ago",
    //   description:
    //     "We are seeking a dynamic Business Development Executive to drive growth in our enterprise sales division. You will be responsible for identifying new business opportunities, building relationships with key stakeholders, and contributing to our expansion across Nigeria.",
    //   responsibilities: [
    //     "Identify and pursue new business opportunities in the enterprise segment",
    //     "Build and maintain relationships with key decision makers",
    //     "Develop and execute strategic sales plans to achieve revenue targets",
    //     "Collaborate with cross-functional teams to deliver comprehensive solutions",
    //     "Conduct market research and competitive analysis",
    //     "Prepare and deliver compelling presentations to prospective clients",
    //   ],
    //   requirements: [
    //     "Bachelor's degree in Business, Marketing, or related field",
    //     "3+ years of experience in business development or sales",
    //     "Strong communication and presentation skills",
    //     "Proven track record of meeting or exceeding sales targets",
    //     "Experience in the financial services industry is preferred",
    //     "Ability to work independently and as part of a team",
    //   ],
    //   benefits: [
    //     "Competitive salary and performance bonuses",
    //     "Health insurance coverage",
    //     "Professional development opportunities",
    //     "Flexible working arrangements",
    //     "Annual leave and public holidays",
    //   ],
    // }
  ]

  // Add additional job listings
  const additionalJobs: Job[] = [
  ]

  // Generate default job details for jobs without full details
  const getJobDetails = (job: Job): Job => {
    const existingJob = jobs.find((j) => j.id === job.id)
    if (existingJob) return existingJob

    return {
      ...job,
      type: "Full-time",
      salary: job.office.includes("Nigeria") ? "₦1,500,000 - ₦3,000,000" : "£50,000 - £80,000",
      posted: "1 week ago",
      description: `Join our ${job.team} team as a ${job.role}. This is an exciting opportunity to contribute to our mission of redefining the financial experience for millions of people in emerging markets.`,
      responsibilities: [
        `Lead initiatives within the ${job.team} division`,
        "Collaborate with cross-functional teams to achieve business objectives",
        "Drive innovation and continuous improvement",
        "Build and maintain stakeholder relationships",
        "Contribute to strategic planning and execution",
      ],
      requirements: [
        "Bachelor's degree in relevant field",
        "3+ years of relevant experience",
        "Strong communication and analytical skills",
        "Proven track record of success",
        "Ability to work in a fast-paced environment",
      ],
      benefits: [
        "Competitive salary and benefits",
        "Health insurance coverage",
        "Professional development opportunities",
        "Flexible working arrangements",
        "Career growth potential",
      ],
    }
  }

  const interviewSteps: InterviewStep[] = [
    {
      step: 1,
      title: "Preliminary Phone Screen",
      description:
        "Our recruitment team will reach out to you for an initial call. During this conversation, we'll confirm the details of your profile and conduct an initial assessment of your qualifications and communication skills. This step is crucial in getting to know you better and ensuring you're a good fit for the role.",
      icon: Phone,
    },
    {
      step: 2,
      title: "Technical Assessment/Case Study Interview",
      description:
        "Depending on the role, you'll participate in a technical assessment or case study interview. This helps us evaluate your problem-solving skills and technical expertise relevant to the position.",
      icon: FileText,
    },
    {
      step: 3,
      title: "Panel Interview",
      description:
        "You'll meet with a panel of team members and stakeholders. This collaborative interview allows multiple perspectives and helps assess your cultural fit within our organization.",
      icon: Users,
    },
    {
      step: 4,
      title: "Executive/Final Interview",
      description:
        "The final step involves meeting with senior leadership. This interview focuses on your strategic thinking, leadership potential, and long-term alignment with our company vision.",
      icon: Crown,
    },
  ]

  // Combine all jobs
  const allJobs = [...jobs, ...additionalJobs]

  // Filter jobs based on search and filter criteria
  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.office.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesTeam = teamFilter === "All" || job.team === teamFilter
    
    const matchesLocation = locationFilter === "All" || 
      (locationFilter === "Nigeria" && job.office.includes("Nigeria")) ||
      (locationFilter === "United Kingdom" && job.office.includes("United Kingdom")) ||
      (locationFilter === "Remote" && job.office.includes("Remote"))
    
    return matchesSearch && matchesTeam && matchesLocation
  })

  // Get unique teams and locations for filter options
  const teams = ["All", ...Array.from(new Set(allJobs.map((job) => job.team)))]
  const locations = ["All", "Nigeria", "United Kingdom", "Remote"]

  const selectedJobDetails = selectedJob ? getJobDetails(filteredJobs.find((job) => job.id === selectedJob)!) : null

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality is handled by the filter effect
  }

  const handleJobClick = (jobId: number) => {
    setSelectedJob(jobId)
  }

  const closeJobModal = () => {
    setSelectedJob(null)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Job Details Modal */}
      {selectedJob && selectedJobDetails && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeJobModal()}
        >
          {/* Backdrop with opacity */}
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          
          {/* Modal content without opacity */}
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedJobDetails.role}</h2>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>{selectedJobDetails.team}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedJobDetails.office}</span>
                    <span className="ml-1">{selectedJobDetails.flag}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeJobModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close job details"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Job Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About This Role</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJobDetails.description}</p>
              </div>

              {/* Responsibilities */}
              {selectedJobDetails.responsibilities && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-2">
                    {selectedJobDetails.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {selectedJobDetails.requirements && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJobDetails.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {selectedJobDetails.benefits && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
                  <ul className="space-y-2">
                    {selectedJobDetails.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Apply Button */}
              <div className="flex gap-4">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Apply for This Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            Careers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to live your <span className="text-purple-600">dream</span>?
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Come join a team that's redefining tech education for millions of people in emerging markets and building innovative software solutions.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-200">
            <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search role"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <select
                  value={teamFilter}
                  onChange={(e) => setTeamFilter(e.target.value)}
                  className="appearance-none bg-white border border-purple-200 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[150px]"
                  aria-label="Filter by team"
                >
                  {teams.map((team) => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="appearance-none bg-white border border-purple-200 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[150px]"
                  aria-label="Filter by location"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 pointer-events-none" />
              </div>
              <button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Search
              </button>
            </form>

            {/* Available Roles Counter */}
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Available Roles</h2>
              <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {filteredJobs.length}
              </span>
            </div>

            {/* Jobs Table */}
            <div className="overflow-x-auto">
              <div className="min-w-full">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 py-4 border-b border-purple-200 text-sm font-medium text-gray-600">
                  <div className="col-span-5">Role</div>
                  <div className="col-span-3">Team</div>
                  <div className="col-span-3">Office</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Table Body */}
                <div className="space-y-2">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                      <button
                        key={job.id}
                        className="w-full grid grid-cols-12 gap-4 py-4 hover:bg-purple-50 rounded-lg transition-colors group text-left"
                        onClick={() => handleJobClick(job.id)}
                      >
                        <div className="col-span-5">
                          <h3 className="font-semibold text-gray-900 group-hover:text-purple-700">{job.role}</h3>
                        </div>
                        <div className="col-span-3">
                          <span className="text-gray-600">{job.team}</span>
                        </div>
                        <div className="col-span-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-600">{job.office}</span>
                            <span className="text-lg">{job.flag}</span>
                          </div>
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <ArrowRight className="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors" />
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <p>No jobs found matching your search criteria.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Interview Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what you can expect during our hiring process
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Process Timeline */}
            <div className="space-y-8">
              {interviewSteps.map((step, index) => (
                <button
                  key={step.step}
                  className="flex items-start gap-6 group cursor-pointer w-full text-left"
                  onClick={() => setSelectedStep(step.step)}
                >
                  {/* Step Number Circle */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 ${
                        selectedStep === step.step
                          ? "bg-purple-600 text-white scale-110"
                          : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                      }`}
                    >
                      {step.step}
                    </div>
                    {/* Connecting Line */}
                    {index < interviewSteps.length - 1 && (
                      <div
                        className={`absolute top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-16 transition-colors ${
                          selectedStep === step.step ? "bg-purple-400" : "bg-purple-200"
                        }`}
                      ></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 transition-colors ${
                        selectedStep === step.step ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      Step {step.step}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors ${
                        selectedStep === step.step ? "text-purple-700" : "text-gray-900 group-hover:text-purple-700"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {selectedStep === step.step && <p className="text-gray-600 leading-relaxed">{step.description}</p>}
                  </div>
                </button>
              ))}
            </div>

            {/* Right Side - Featured Step Card */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl transition-all duration-500">
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-purple-400 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    {(() => {
                      const StepIcon = interviewSteps.find((step) => step.step === selectedStep)?.icon || Phone
                      return <StepIcon className="w-10 h-10 text-white" />
                    })()}
                  </div>

                  {/* Step Badge */}
                  <div className="inline-block bg-purple-400 bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                    Step {selectedStep}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    {interviewSteps.find((step) => step.step === selectedStep)?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-purple-100 leading-relaxed text-lg">
                    {interviewSteps.find((step) => step.step === selectedStep)?.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-purple-400 bg-opacity-10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-400 bg-opacity-10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <FooterSection />
    </div>
  )
}