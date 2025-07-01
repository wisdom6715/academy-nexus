import { motion } from 'framer-motion'
import { 
  Globe,
  Award,
  Users
 } from 'lucide-react'
export default function AboutHero(){
    const stats = [
        { number: "200+", label: "Students Trained", icon: Users },
        { number: "10+", label: "Partner Companies", icon: Globe },
        { number: "8", label: "Years of Excellence", icon: Award },
    ]
    return(
        <section className="relative px-6 lg:px-12 py-20 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
          >
            <motion.h1 className="text-5xl lg:text-7xl font-black mb-8" whileHover={{ scale: 1.02 }}>
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
                Transforming Lives
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                with Tech
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We are on a mission to democratize tech education and create pathways to high-paying careers for everyone,
              regardless of their background or previous experience.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-16 md:mx-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, staggerChildren: 0.1 }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-2xl relative overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
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

                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div
                      className="text-4xl font-black text-purple-600 mb-2"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
}