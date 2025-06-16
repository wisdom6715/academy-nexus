"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Clock, Users, Calendar, Sparkles } from "lucide-react"
import CourseInfo from "@/app/lib/useCourseInformation"
import HeaderComponent from "@/app/components/Header"
import FooterSection from "@/app/components/FooterSection"
import RegisterForm from "@/app/components/RegisterFom"

export default function BootcampCoursePage() {
  const params = useParams()
  const courseId = params.id as string
  const [activeWeek, setActiveWeek] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { courseData } = CourseInfo()

  const course = courseData[courseId as keyof typeof courseData]

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
          <p className="text-gray-500 mb-8">The bootcamp you're looking for doesn't exist.</p>
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
                  <motion.span
                    className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-sm font-bold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {course.bootcampType}
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

              {/* Key Stats */}
              <motion.div
                className="grid md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { icon: Clock, label: "Duration", value: course.duration },
                  { icon: Calendar, label: "Schedule", value: course.schedule },
                  { icon: Users, label: "Students", value: course.students.toLocaleString() },
                  { icon: Calendar, label: "Next Cohort", value: course.nextCohort },
                ].map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg"
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.1)",
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3"
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="text-2xl font-black text-purple-600 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                    </motion.div>
                  )
                })}
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
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-80 object-cover"
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
                          ${course.price}
                        </motion.span>
                        <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                      </motion.div>
                      <motion.p
                        className="text-sm text-green-600 font-bold mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        Save ${course.originalPrice - course.price}! Early Bird Special
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
                      <div className="text-sm text-gray-600 font-semibold mb-2">What you'll get</div>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                        <li>And much more...</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Instructor Card */}
                <motion.div
                  className="bg-white/90 backdrop-blur-sm border-2 border-purple-100 rounded-3xl p-6 mt-8 shadow-2xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #7c3aed, transparent)",
                        "linear-gradient(135deg, #8b5cf6, transparent)",
                        "linear-gradient(225deg, #7c3aed, transparent)",
                        "linear-gradient(315deg, #8b5cf6, transparent)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={course.instructor.avatar || "/placeholder.svg"}
                        alt={course.instructor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-lg font-bold text-purple-700">{course.instructor.name}</div>
                        <div className="text-sm text-gray-600">{course.instructor.title}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm mb-4">{course.instructor.bio}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg">
                        <div className="text-2xl font-black text-purple-600 mb-1">{course.instructor.courses}</div>
                        <div className="text-sm text-gray-600 font-semibold">Courses</div>
                      </div>
                      <div className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg">
                        <div className="text-2xl font-black text-purple-600 mb-1">{course.instructor.experience}</div>
                        <div className="text-sm text-gray-600 font-semibold">Experience</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-sm text-gray-600 font-semibold mb-2">Worked at</div>
                      <div className="flex items-center gap-2">
                        {course.instructor.companies.map((company, index) => (
                          <motion.span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-bold"
                            whileHover={{ scale: 1.1 }}
                          >
                            {company}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="px-6 lg:px-12 py-16 bg-gradient-to-br from-purple-50/50 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-black mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="text-black"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 15px rgba(139, 92, 246, 0.3)",
                    "0 0 0px rgba(139, 92, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                8-Week Intensive
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-purple-600 via-purple-700 to-black bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Curriculum
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Master React through our carefully crafted weekly progression from fundamentals to advanced concepts
            </motion.p>
          </motion.div>

          {/* Week Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {course.curriculum.map((week, index) => (
              <motion.button
                key={week.week}
                onClick={() => setActiveWeek(week.week)}
                className={`px-6 py-3 rounded-full font-bold transition-all relative overflow-hidden ${
                  activeWeek === week.week
                    ? "text-white shadow-2xl"
                    : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200 shadow-lg"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {activeWeek === week.week && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                )}
                <span className="relative z-10">Week {week.week}</span>
                {activeWeek === week.week && (
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                        "0 0 40px rgba(124, 58, 237, 0.5)",
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Week Content */}
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 20 }}
            className="relative"
          >
            {course.curriculum
              .filter((week) => week.week === activeWeek)
              .map((week) => (
                <motion.div
                  key={week.week}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
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
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Week Header */}
                      <div className="lg:col-span-1">
                        <motion.div
                          className="flex items-center gap-3 mb-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center"
                            animate={{
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            <span className="text-2xl font-black text-white">{week.week}</span>
                          </motion.div>
                          <div>
                            <div className="text-sm text-purple-600 font-bold">WEEK {week.week}</div>
                            <div className="text-xs text-gray-500">{week.duration}</div>
                          </div>
                        </motion.div>

                        <motion.h3
                          className="text-2xl font-black text-black mb-3"
                          whileHover={{ color: "#8b5cf6" }}
                        >
                          {week.title}
                        </motion.h3>

                        <motion.div
                          className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-full text-sm font-bold mb-4"
                          whileHover={{ scale: 1.05 }}
                        >
                          {week.focus}
                        </motion.div>
                      </div>

                      {/* Topics & Projects */}
                      <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {/* Topics */}
                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <motion.div
                              className="w-3 h-3 bg-purple-600 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            />
                            Learning Topics
                          </h4>
                          <div className="space-y-3">
                            {week.topics.map((topic, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors"
                                whileHover={{ x: 5, scale: 1.02 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                              >
                                <motion.div
                                  className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.7, 1, 0.7],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: index * 0.2,
                                  }}
                                />
                                <span className="text-gray-700 text-sm leading-relaxed">{topic}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Projects */}
                        <motion.div
                          className="space-y-4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <motion.div
                              className="w-3 h-3 bg-green-600 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: 0.5,
                              }}
                            />
                            Hands-on Projects
                          </h4>
                          <div className="space-y-3">
                            {week.projects.map((project, index) => (
                              <motion.div
                                key={index}
                                className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:border-green-200 transition-colors"
                                whileHover={{ scale: 1.02, y: -2 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                              >
                                <motion.div
                                  className="flex items-center gap-3"
                                  whileHover={{ x: 5 }}
                                >
                                  <motion.div
                                    className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{
                                      duration: 3,
                                      repeat: Number.POSITIVE_INFINITY,
                                      delay: index * 0.3,
                                    }}
                                  >
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                  </motion.div>
                                  <span className="text-gray-800 font-semibold text-sm">{project}</span>
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>\
      </section>
      <RegisterForm />
      <FooterSection />
    </div>
)}