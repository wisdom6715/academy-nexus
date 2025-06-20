"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  Clock,
  Filter,
  Search,
  Sparkles,
  Zap,
} from "lucide-react"
import HeaderComponent from "../components/Header"
import CourseData from "../lib/useCourseData"
import FooterSection from "../components/FooterSection"
import RegisterForm from "../components/RegisterFom"

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)
  const {allCourses, courseCategories } = CourseData()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.students - a.students
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden relative" ref={containerRef}>
      <HeaderComponent />
      {/* Crazy Animated Background Elements - Purple Theme */}
      <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ y: backgroundY }}>
        {/* Floating Purple Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #8b5cf6, #7c3aed, #6d28d9)",
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
          }}
          animate={{
            scale: [1, 1.5, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-15"
          style={{
            background: "conic-gradient(from 0deg, #a855f7, #8b5cf6, #7c3aed, #a855f7)",
            right: `${mousePosition.x * 0.01}%`,
            top: `${mousePosition.y * 0.03}%`,
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Morphing Purple Shapes */}
        <motion.div
          className="absolute w-32 h-32 opacity-10"
          style={{
            background: "linear-gradient(45deg, #c084fc, #a855f7, #8b5cf6)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            left: "10%",
            top: "20%",
          }}
          animate={{
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "70% 30% 30% 70% / 70% 70% 30% 30%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Purple Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              background: `linear-gradient(${Math.random() * 360}deg, #ddd6fe, #c4b5fd, #a78bfa)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? "50%" : "0%",
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              rotate: [0, 360],
              scale: [1, Math.random() * 0.5 + 0.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Animated Purple Grid Lines */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, #8b5cf6 100%),
              linear-gradient(0deg, transparent 98%, #7c3aed 100%)
            `,
            backgroundSize: "100px 100px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Navigation Spacer */}
      <div className="h-20" />

      {/* Hero Section with Purple Theme */}
      <section className="relative px-6 lg:px-12 py-16 z-10">
        <div className="max-w-7xl mx-auto text-center relative">
          {/* Floating Purple Sparkles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
            </motion.div>
          ))}

          <motion.h1
            className="text-4xl lg:text-6xl font-black mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
          >
            <motion.span
              className="text-black"
              animate={{
                textShadow: [
                  "0 0 0px rgba(139, 92, 246, 0)",
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                  "0 0 0px rgba(139, 92, 246, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Explore Our{" "}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Courses
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Choose from our comprehensive collection of courses designed to take your skills to the next level
          </motion.p>

          {/* Search and Filter with Purple Effects */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div className="relative group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 z-50" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-80 bg-white/80 backdrop-blur-sm relative z-10"
              />
            </motion.div>

            <motion.div className="relative group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5 z-50" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent appearance-none bg-white/80 backdrop-blur-sm relative z-10"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs with Purple Animations */}
      <section className="px-6 lg:px-12 py-8 bg-white/50 backdrop-blur-sm border-y border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            <motion.button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all relative overflow-hidden group ${
                selectedCategory === "all"
                  ? "text-white shadow-2xl"
                  : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {selectedCategory === "all" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
              )}
              <span className="relative z-10">All Courses</span>
              {selectedCategory === "all" && (
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
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.button>

            {courseCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 relative overflow-hidden group ${
                    selectedCategory === category.id
                      ? "text-white shadow-2xl"
                      : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 2) }}
                >
                  {selectedCategory === category.id && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${category.gradient}`}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    />
                  )}
                  <motion.div
                    className="relative z-10"
                    animate={
                      selectedCategory === category.id
                        ? {
                            rotate: [0, 360],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.div>
                  <span className="relative z-10">{category.name}</span>
                  {selectedCategory === category.id && (
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
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Courses Grid with Purple Animations */}
      <section className="px-6 lg:px-12 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {sortedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  damping: 20,
                }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/courses/${course.id}`}>
                  {/* Animated Purple Background Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden relative z-10 border border-gray-100 group-hover:border-transparent transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Animated Purple Overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        style={{
                          backgroundSize: "200% 200%",
                        }}
                      />

                      {course.featured && (
                        <motion.div
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white overflow-hidden"
                          animate={{
                            boxShadow: [
                              "0 0 10px rgba(139, 92, 246, 0.5)",
                              "0 0 20px rgba(124, 58, 237, 0.5)",
                              "0 0 10px rgba(139, 92, 246, 0.5)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700"
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                            style={{
                              backgroundSize: "200% 200%",
                            }}
                          />
                          <span className="relative z-10 flex items-center gap-1">
                            <Zap className="w-3 h-3" />
                            Featured
                          </span>
                        </motion.div>
                      )}

                      <motion.div
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200"
                        whileHover={{ scale: 1.1 }}
                      >
                        {course.level}
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold text-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-700 group-hover:bg-clip-text transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {course.title}
                      </motion.h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.1, color: "#8b5cf6" }}>
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </motion.div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.1 }}
                        >
                          ₦{course.price}
                        </motion.div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.skills.slice(0, 3).map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3e8ff",
                              color: "#8b5cf6",
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                        {course.skills.length > 3 && (
                          <motion.span
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#f3e8ff",
                              color: "#8b5cf6",
                            }}
                          >
                            +{course.skills.length - 3} more
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {sortedCourses.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                🔍
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
      <RegisterForm />
      <FooterSection />
    </div>
  )
}