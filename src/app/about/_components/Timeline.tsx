import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Award,
  Rocket,
} from "lucide-react"
export default function Timeline(){

     const milestones = [
        {
          year: "2024",
          title: "CodeSphere Founded",
          description: "Started with a vision to make coding education accessible to everyone",
          icon: Rocket,
        },
        {
          year: "2024",
          title: "First 100 Graduates",
          description: "Reached our first major milestone with 89% job placement rate",
          icon: Users,
        },
        {
          year: "2024",
          title: "Industry Partnerships",
          description: "Partnered with 500+ companies for direct job placements",
          icon: Target,
        },
        {
          year: "2025",
          title: "200+ Success Stories",
          description: "Celebrating over 200+ career transformations worldwide",
          icon: Award,
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
                Journey
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Key milestones in our mission to transform tech education
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full"
              style={{ height: "100%" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                const isEven = index % 2 === 0
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}>
                      <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-100 relative overflow-hidden"
                        whileHover={{ scale: 1.02, y: -5 }}
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
                          <motion.div
                            className="text-3xl font-black text-purple-600 mb-2"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: index * 0.3,
                            }}
                          >
                            {milestone.year}
                          </motion.div>
                          <h3 className="text-xl font-black text-black mb-3">{milestone.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <motion.div className="w-2/12 flex justify-center" whileHover={{ scale: 1.2 }}>
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white"
                        animate={{
                          rotate: [0, 360],
                          boxShadow: [
                            "0 0 20px rgba(139, 92, 246, 0.3)",
                            "0 0 40px rgba(139, 92, 246, 0.6)",
                            "0 0 20px rgba(139, 92, 246, 0.3)",
                          ],
                        }}
                        transition={{
                          rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                          boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>

                    <div className="w-5/12" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
}