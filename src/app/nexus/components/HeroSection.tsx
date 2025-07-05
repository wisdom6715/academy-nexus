import { motion } from "framer-motion"
import { Users, Award, TrendingUp, ArrowRight, Rocket,
} from "lucide-react"
import Image from "next/image"
import SlidingImagesComponent from "./Carousel"

export default function HeroSection(){
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }


    const stats = [
        { num: "50+", label: "Projects Delivered", icon: Rocket },
        { num: "98%", label: "Client Satisfaction", icon: Award },
        { num: "24/7", label: "Support Available", icon: Users },
        { num: "10+", label: "Enterprise Clients", icon: TrendingUp }
    ]

    const fadeIn = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
    const stagger = { visible: { transition: { staggerChildren: 0.1 } } }


    return(
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
            <SlidingImagesComponent />
        
          </div>
        </div>
      </section>
    )
}