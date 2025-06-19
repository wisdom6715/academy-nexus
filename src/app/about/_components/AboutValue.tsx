import { motion } from 'framer-motion'
import { 
  Shield,
  Heart,
  Target,
  Zap
 } from 'lucide-react'

export default function AboutValue(){

    const values = [
      {
        icon: Target,
        title: "Mission-Driven",
        description: "Democratizing tech education and creating pathways to high-paying careers",
        gradient: "from-purple-500 to-purple-600",
      },
      {
        icon: Heart,
        title: "Student-Centric",
        description: "Every decision we make prioritizes student success and career outcomes",
        gradient: "from-purple-400 to-purple-500",
      },
      {
        icon: Zap,
        title: "Innovation First",
        description: "Constantly evolving our curriculum to match industry demands",
        gradient: "from-purple-600 to-purple-700",
      },
      {
        icon: Shield,
        title: "Quality Assured",
        description: "Rigorous standards in instruction, mentorship, and career support",
        gradient: "from-purple-300 to-purple-400",
      },
  ]
  

  return(
        <section className="px-6 lg:px-12 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl lg:text-5xl font-black mb-6" whileHover={{ scale: 1.02 }}>
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
                Our
              </motion.span>{" "}
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
                Values
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              The principles that guide everything we do and every decision we make
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-2xl relative overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-black text-black mb-4 group-hover:text-purple-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {value.title}
                  </motion.h3>

                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
  )
}