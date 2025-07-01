"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Cloud, Shield, Smartphone, Globe, Users, Award, TrendingUp, 
  Sparkles, ArrowRight, CheckCircle, Rocket, Server, Code, Database, Cpu
} from "lucide-react"
import FooterSection from "./components/FooterComponent"
import RegisterForm from "./components/RegistrationForm"

export default function NexusHomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [showDemo, setShowDemo] = useState(false)
  const [demoStep, setDemoStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", position: "", 
    preferredDate: "", preferredTime: "", additionalInfo: ""
  })

  const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }

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

  const stats = [
    { num: "500+", label: "Projects Delivered", icon: Rocket },
    { num: "98%", label: "Client Satisfaction", icon: Award },
    { num: "24/7", label: "Support Available", icon: Users },
    { num: "50+", label: "Enterprise Clients", icon: TrendingUp }
  ]

  const testimonials = [
    { name: "Michael Chen", role: "CTO, TechFlow", content: "300% performance improvement and 60% cost reduction within 3 months.", color: "purple-500" },
    { name: "Sarah Williams", role: "VP Engineering, DataCorp", content: "Prevented 3 major attacks last quarter. Phenomenal ROI.", color: "purple-400" },
    { name: "David Rodriguez", role: "CEO, InnovateLabs", content: "$2M revenue in first 6 months. Exceptional quality.", color: "purple-600" }
  ]

  const companies = ["Microsoft", "Amazon", "Google", "Meta", "Netflix"]

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
      <section className="relative px-6 lg:px-12 py-20 lg:py-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="space-y-8" variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeIn}>
                <motion.div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 rounded-full text-sm font-bold mb-6" whileHover={{ scale: 1.05 }}>
                  🚀 Premium Tech Solutions by CodeSphere
                </motion.div>

                <motion.h1 className="text-3xl lg:text-4xl font-black leading-tight" whileHover={{ scale: 1.02 }}>
                  <span className="text-black">Exceptional Performance</span><br />
                  <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">Made Simple</span>
                </motion.h1>
              </motion.div>

              <motion.p className="text-xl text-gray-600 leading-relaxed max-w-lg" variants={fadeIn}>
                Transform your business with cutting-edge cloud solutions, cybersecurity, and custom development services.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeIn}>
                <motion.button
                  className="bg-gradient-to-r cursor-pointer from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-2xl flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)", y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToBottom}
                >
                  <Rocket className="w-5 h-5" />
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  className="border-2 cursor-pointer border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDemo(true)}
                >
                  <Users className="w-5 h-5" />
                  Get Demo
                </motion.button>
              </motion.div>

              <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8" variants={stagger}>
                {stats.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <motion.div key={i} variants={fadeIn} className="text-center" whileHover={{ scale: 1.1 }}>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-black text-purple-600">{stat.num}</div>
                      <div className="text-gray-600 text-sm font-semibold">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Partnership Showcase */}
            <motion.div className="relative" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
              <motion.div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100" whileHover={{ scale: 1.02 }}>
                <h3 className="text-2xl font-black text-purple-600 mb-6">Certified Technology Partners</h3>
                <p className="text-gray-700 mb-8">We're certified by leading technology platforms, ensuring enterprise-grade solutions.</p>
                
                <div className="relative h-48 mb-6">
                  {["AWS", "Azure", "GCP", "Docker"].map((tech, i) => (
                    <motion.div
                      key={tech}
                      className={`absolute w-16 h-12 bg-gradient-to-r from-${["orange", "blue", "green", "blue"][i]}-500 to-${["orange", "blue", "green", "blue"][i]}-600 rounded-xl flex items-center justify-center shadow-lg`}
                      style={{
                        top: `${[20, 40, 70, 10][i]}%`,
                        left: `${[20, 70, 30, 60][i]}%`
                      }}
                      animate={{ y: [-5, 5, -5], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.1, y: -10 }}
                    >
                      <span className="text-white font-black text-xs">{tech}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm opacity-90">Partnership Level</div>
                      <div className="text-lg font-black">Premier Certified</div>
                    </div>
                    <Award className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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

      {/* Demo Modal */}
      {showDemo && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowDemo(false)}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-purple-600">Schedule Demo</h3>
              <button onClick={() => setShowDemo(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">✕</button>
            </div>

            <div className="flex items-center mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${demoStep >= step ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                    {step}
                  </div>
                  {step < 3 && <div className={`w-12 h-1 mx-2 ${demoStep > step ? "bg-purple-500" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {demoStep === 1 && (
                <>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h4>
                  <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                  <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                  <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </>
              )}
              
              {demoStep === 2 && (
                <>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Company Information</h4>
                  <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                  <input type="text" placeholder="Position" value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </>
              )}
              
              {demoStep === 3 && (
                <>
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Schedule</h4>
                  <input type="date" value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                  <select value={formData.preferredTime} onChange={(e) => setFormData({...formData, preferredTime: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                    <option value="">Select Time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                  </select>
                  <textarea placeholder="Additional Info" value={formData.additionalInfo} onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" rows={3} />
                </>
              )}
            </div>

            <div className="flex justify-between mt-8">
              {demoStep > 1 && (
                <button onClick={() => setDemoStep(demoStep - 1)} className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Previous
                </button>
              )}
              <button 
                onClick={() => demoStep < 3 ? setDemoStep(demoStep + 1) : setShowDemo(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg ml-auto"
              >
                {demoStep < 3 ? "Next" : "Schedule Demo"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <RegisterForm />
      <FooterSection />
    </div>
  )
}