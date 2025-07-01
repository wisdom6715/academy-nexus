"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Sparkles, BookOpen, TrendingUp, Star } from "lucide-react"
import CourseInfo from "@/app/lib/useCourseInformation"
import HeaderComponent from "@/app/components/Header"
import FooterSection from "@/app/components/FooterSection"
import RegisterForm from "@/app/components/RegisterFom"
import Image from "next/image"

interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  level: string
  nextCohort: string
  price: number
  originalPrice: number
  gradient: string
  image?: string
  features: string[]
  about: string
  outline: string[]
}

interface CourseData {
  [key: string]: Course
}



export default function BootcampCoursePage() {
  const [activeTab, setActiveTab] = useState("about")
  const params = useParams()
  const courseId = params.id as string
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { courseData }: { courseData: CourseData } = CourseInfo()

  const course: Course | undefined = courseData[courseId]

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [courseId])

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #7c3aed 0%, transparent 50%)",
              "radial-gradient(circle at 40% 50%, #8b5cf6 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
        
        <div className="text-center relative z-10">
          <motion.div
            className="text-6xl mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            😕
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Bootcamp Not Found</h1>
          <p className="text-gray-500 mb-8">The bootcamp you are looking for does not exist.</p>
          <Link href="/courses">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Bootcamps
            </motion.button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Crazy Animated Background */}
      <motion.div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating Purple Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #8b5cf6, #7c3aed, #6d28d9)",
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
          }}
          animate={{
            scale: [1, 1.5, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Morphing Shapes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: `linear-gradient(${Math.random() * 360}deg, #ddd6fe, #c4b5fd, #a78bfa)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
            animate={{
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "70% 30% 30% 70% / 70% 70% 30% 30%",
                "50% 50% 50% 50% / 50% 50% 50% 50%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
              ],
              rotate: [0, 360],
              scale: [1, 1.2, 0.8, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Floating Sparkles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>
        ))}
      </motion.div>

      <HeaderComponent />

      {/* Navigation Spacer */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.span
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-full text-sm font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {course.category}
                  </motion.span>
                  <motion.span
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {course.level}
                  </motion.span>
                </div>

                <motion.h1
                  className="text-4xl lg:text-6xl font-black mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span
                    className="text-black"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(139, 92, 246, 0)",
                        "0 0 20px rgba(139, 92, 246, 0.3)",
                        "0 0 0px rgba(139, 92, 246, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    {course.title}
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {course.subtitle}
                </motion.p>

                <motion.p
                  className="text-gray-700 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {course.description}
                </motion.p>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-20`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                <Image 
                src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-80 object-cover"
                  width={300} height={200}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 font-semibold">Next Cohort Starts</div>
                        <div className="text-lg font-black text-purple-600">{course.nextCohort}</div>
                      </div>
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        <Calendar className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Sidebar - Application Card */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="sticky top-24">
                <motion.div
                  className="bg-white/90 backdrop-blur-sm border-2 border-purple-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #8b5cf6, transparent)",
                        "linear-gradient(135deg, #7c3aed, transparent)",
                        "linear-gradient(225deg, #8b5cf6, transparent)",
                        "linear-gradient(315deg, #7c3aed, transparent)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <motion.div
                        className="flex items-center justify-center gap-3 mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.span
                          className="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent"
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          style={{ backgroundSize: "200% 200%" }}
                        >
                          ₦{course.price}
                        </motion.span>
                        <span className="text-xl text-gray-500 line-through">₦{course.originalPrice}</span>
                      </motion.div>
                      <motion.p
                        className="text-sm text-green-600 font-bold mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        Save ₦{course.originalPrice - course.price}! Early Bird Special
                      </motion.p>
                      <p className="text-sm text-gray-600">Payment plans available</p>
                    </div>

                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:from-purple-700 hover:to-purple-800 transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>

                    <motion.div
                      className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="text-sm text-gray-600 font-semibold mb-2">What you will get</div>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                        <li>And much more...</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}

      {/* Navigation Tabs */}
      <section className="px-6 lg:px-12 py-8 relative z-10 flex flex-col md:flex-row max-w-7xl mx-auto">
          <div className="border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex flex-col space-x-8 ">
                {[
                  { id: 'about', label: 'About', icon: BookOpen },
                  { id: 'topics', label: 'Outline', icon: TrendingUp },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center cursor-pointer gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

        {/* Content Sections */}
        <div className="max-w-2xl border rounded-md p-3 border-gray-300">
          {activeTab === 'about' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About the course</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {course.about}
              </div>
            </motion.div>
          )}

          {activeTab === 'topics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Outline</h2>
              <div className="grid md:grid-cols-1 gap-4">
                {course.outline.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-800 font-medium">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
  
      <RegisterForm />
      <FooterSection />
    </div>
)}