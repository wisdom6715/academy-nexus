"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Sparkles,
} from "lucide-react"
import RegisterForm from "../components/RegistrationForm"
import FooterSection from "../components/FooterComponent"
import Timeline from "../components/TimeLine"
import TeamSection from "@/app/about/_components/TeamSection"
import AboutValue from "@/app/nexus/components/AboutValue"
import OurStory from "../components/OurStory"

export default function AboutTeam() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Crazy Animated Background */}
      <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ y: backgroundY }}>
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

        {/* Morphing Shapes */}
        {[...Array(15)].map((_, i) => (
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
        {[...Array(30)].map((_, i) => (
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            About us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-6">Scalable enterprise solutions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We build and secure the digital backbone of modern African businesses with cloud, code, and confidence.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <OurStory />

      {/* Values Section */}
      <AboutValue />

      {/* Team Section */}
      <TeamSection />

      {/* Timeline Section */}
      <Timeline />

      {/* CTA Section */}
      <RegisterForm />

      <FooterSection />
    </div>
  )
}
