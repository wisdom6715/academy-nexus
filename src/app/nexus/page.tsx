"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Cloud, Shield, Smartphone, Globe,
  Sparkles, CheckCircle,
} from "lucide-react"
import FooterSection from "./components/FooterComponent"
import RegisterForm from "./components/RegistrationForm"
import HeroSection from "./components/HeroSection"

export default function NexusHomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

 

  useEffect(() => {
    const handleMouse = (e: any) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  const services = [
    { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Azure, and Google Cloud infrastructure management", 
      features: ["Migration", "Optimization", "Monitoring", "Support"], color: "purple-500" },
    { icon: Shield, title: "Cybersecurity", desc: "Comprehensive security solutions for digital assets", 
      features: ["Threat Detection", "Compliance", "Auditing", "Training"], color: "purple-400" },
    { icon: Smartphone, title: "Mobile Development", desc: "Native and cross-platform applications", 
      features: ["iOS Apps", "Android Apps", "React Native", "Flutter"], color: "purple-600" },
    { icon: Globe, title: "Web Development", desc: "Modern, scalable web applications", 
      features: ["React/Next.js", "Node.js", "E-commerce", "APIs"], color: "purple-300" }
  ]

  const testimonials = [
    { name: "", role: "CTO, TechFlow", content: "We were spending too much on cloud services without even knowing why. CodeSphere Nexus ran a full audit, restructured our cloud setup, and helped us save over 30% on monthly bills — without any drop in performance. Their team broke things down clearly and worked fast. Honestly, it felt like having an in-house DevOps team.”", color: "purple-500" },
    { name: "", role: "VP Engineering, DataCorp", content: "We struggled to keep up with our inventory across branches. CodeSphere Nexus developed a custom inventory tracking system that syncs in real time and even alerts us about low stock. The dashboard is clean, the system is fast, and support has been excellent. This is the most useful tech investment we've made.", color: "purple-400" },
    { name: "", role: "CEO, InnovateLabs", content: "We wanted to bring our retail business online, but had no idea where to start. CodeSphere Nexus built a powerful e-commerce platform with payment integration and cloud hosting. Just three months after launch, we saw a 32% increase in sales and started receiving orders from across the country. Their work exceeded our expectations.", color: "purple-600" }
  ]

  const companies = ["Printivo", "Whogohost", "Hotels.ng", "Jiji.ng", "Cowrywise", "PiggyVest"]

  const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

  return (
    <div className="min-h-screen bg-white overflow-hidden relative text-black">
      {/* Animated Background */}
      <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ y: bgY }}>
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10 bg-gradient-to-r from-purple-500 to-purple-700"
          style={{ left: `${mousePos.x * 0.02}%`, top: `${mousePos.y * 0.02}%` }}
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5 bg-gradient-to-r from-purple-200 to-purple-400"
            style={{
              width: Math.random() * 80 + 40, height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
            }}
            animate={{
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
              rotate: [0, 360], scale: [1, 1.2, 0.8, 1]
            }}
            transition={{ duration: Math.random() * 8 + 4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 3 }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>
        ))}
      </motion.div>

      <div className="h-20" />

      {/* Hero Section */}
        <HeroSection />

      {/* Services Section */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-purple-50/50 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive technology solutions for business growth</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 group"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)" }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r from-${service.color} to-${service.color.replace('500', '600')} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-black mb-4 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700 font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 lg:px-12 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Client <span className="bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">Success Stories</span>
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100"
                variants={fadeIn}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <p className="text-gray-700 mb-6 italic text-lg">"{test.content}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${test.color} to-${test.color.replace('500', '600')} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{test.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-black text-purple-600">{test.name}</div>
                    <div className="text-gray-600 text-sm">{test.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-purple-50/50 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Trusted by <span className="bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
          </motion.div>

          <motion.div className="grid grid-cols-3 md:grid-cols-6 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {companies.map((company, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg"
                variants={fadeIn}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-lg font-black text-gray-400 hover:text-purple-600 transition-colors">{company}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <RegisterForm />
      <FooterSection />
    </div>
  )
}