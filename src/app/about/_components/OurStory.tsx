import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
export default function OurStory(){
    return(
        <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-purple-50/50 to-white relative z-10">
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
                Story
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-lg text-gray-700 leading-relaxed space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p>
                  <strong className="text-purple-600">CodeSphere Academy is a forward-thinking technology education platform established in March 2024 </strong>
                   with a mission to empower individuals with the skills and knowledge needed to thrive in the digital age. Founded with a vision to bridge the gap between theoretical education and practical tech expertise, CodeSphere Academy was created to provide accessible, hands-on learning in key areas such as data analysis, cloud computing, cybersecurity, software development, and other emerging tech fields.
                </p>
                <p>
                  The academy was born from a clear recognition of the rapidly growing demand for skilled tech professionals, particularly in regions where access to quality technology education is still limited. Motivated by a passion to help aspiring tech enthusiasts progress from beginners to job-ready professionals, the academy was designed as a dynamic learning environment—focused not only on technical skills but also on nurturing creativity, critical thinking, and innovation.
                </p>
                {/* <p>
                  At CodeSphere Academy, learning extends beyond the classroom. Through mentorship, collaborative projects, and real-world challenges, learners gain practical experience and the confidence to tackle the evolving demands of the tech industry. CodeSphere Academy is more than a school; it is a vibrant community built to develop talent, ignite curiosity, and inspire a new generation of digital leaders ready to make meaningful contributions to the world.
                </p> */}
              </motion.div>

              <motion.div className="flex items-center gap-4" whileHover={{ x: 10 }}>
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <div className="font-bold text-purple-600">Our Mission</div>
                  <div className="text-gray-600">Democratizing tech education for everyone</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 relative overflow-hidden"
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
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />

                <div className="relative z-10">
                  <motion.h3 className="text-2xl font-black text-purple-600 mb-6" whileHover={{ scale: 1.05 }}>
                    Impact by Numbers
                  </motion.h3>
                  <div className="space-y-4">
                    {[
                      { label: "Number of students trained", value: "200+" },
                      { label: "Career Transition Success", value: "94%" },
                      { label: "Student Satisfaction", value: "4.9/5" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-3 bg-purple-50 rounded-xl"
                        whileHover={{ x: 5, backgroundColor: "#f3e8ff" }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-gray-700 font-semibold">{item.label}</span>
                        <motion.span
                          className="text-2xl font-black text-purple-600"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.3,
                          }}
                        >
                          {item.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}