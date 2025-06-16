import { motion } from "framer-motion"
import React from "react"
import { ChevronRight, Play } from "lucide-react"
export default function HeroSection(){
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
        }
    };
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
            type: "spring",
            damping: 25,
            stiffness: 120,
            },
        },
    }
    return(
        <section className="relative z-10 px-6 lg:px-12 py-20 lg:py-32 overflow-hidden">
        {/* Large Half Circle Background */}
        <div className="absolute inset-0 flex justify-center items-start">
          <motion.div
            className="w-[110vw] h-[45vw] bg-gradient-to-b from-purple-100/40 to-purple-200/20 rounded-b-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              transform: "translateY(-30%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
            {/* Left Side - Text Content */}
            <motion.div
              className="lg:col-span-5 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-5xl lg:text-6xl font-black text-black leading-tight"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Master Digital Skills,
                </motion.span>
                <br />
                <motion.span
                  className="text-purple-600"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Build Future
                </motion.span>
              </motion.h1>

              <motion.p className="text-xl text-gray-600 leading-relaxed max-w-lg" variants={itemVariants}>
                Transform your coding journey with our comprehensive platform designed for modern developers and future
                tech leaders.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={containerVariants}>
                <motion.button
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Play className="w-5 h-5" />
                  </motion.div>
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div className="flex gap-8 pt-8" variants={containerVariants}>
                {[
                  { number: "50K+", label: "Students" },
                  { number: "200+", label: "Courses" },
                  { number: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center" whileHover={{ scale: 1.1 }}>
                    <motion.div
                      className="text-2xl lg:text-3xl font-black text-purple-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Code Editor with Centered Button */}
            <motion.div
              className="lg:col-span-7 relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 0.8,
              }}
            >
              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 bg-purple-600/20 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-black/10 rotate-45"
                animate={{
                  rotate: [45, 135, 225, 315, 45],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/4 -right-12 w-8 h-8 bg-purple-800/20 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Main Code Editor Container */}
              <div className="relative w-full max-w-2xl">
                <motion.div
                  className="relative bg-gradient-to-br from-purple-600 to-black p-8 rounded-3xl shadow-2xl"
                  animate={{
                    rotateY: [0, 2, -2, 0],
                    rotateX: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 0,
                    rotateX: 0,
                    boxShadow: "0 30px 60px rgba(147,51,234,0.3)",
                  }}
                >
                  <div className="bg-gray-900 rounded-2xl p-8 font-mono text-sm relative">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-6">
                      <motion.div
                        className="w-3 h-3 bg-red-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-yellow-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-3 h-3 bg-green-500 rounded-full"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                      />
                      <span className="text-gray-400 ml-4 text-sm">future.js</span>
                    </div>

                    {/* Code Content */}
                    <motion.div
                      className="space-y-3 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, staggerChildren: 0.1 }}
                    >
                      <motion.div
                        className="text-green-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 }}
                      >
                        {">"} const future = await learn();
                      </motion.div>
                      <motion.div
                        className="text-blue-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        {">"} if (future.success) {"{"}
                      </motion.div>
                      <motion.div
                        className="text-white ml-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 }}
                      >
                        console.log("Dream job unlocked! 🚀");
                      </motion.div>
                      <motion.div
                        className="text-blue-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.9 }}
                      >
                        {"}"}
                      </motion.div>
                    </motion.div>

                    {/* Centered Start Learning Button */}
                    <div className="flex justify-center">
                      <motion.button
                        className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3 group"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 2.1, type: "spring", damping: 15, stiffness: 300 }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(147,51,234,0.4)",
                          y: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          style={{
                            background: "linear-gradient(90deg, #fff, #e0e7ff, #fff)",
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          Start Learning
                        </motion.span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </motion.div>
                      </motion.button>
                    </div>

                    {/* Animated Cursor */}
                    <motion.div
                      className="absolute bottom-4 right-6 w-2 h-5 bg-green-400"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                </motion.div>

                {/* Floating Code Snippets */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg border"
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-xs font-mono text-gray-600">React.js</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border"
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-xs font-mono text-gray-600">Data Analysis</div>
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border"
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-xs font-mono text-gray-600">Devops and Cloud</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg border"
                  animate={{
                    y: [5, -5, 5],
                    rotate: [2, -2, 2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-xs font-mono text-gray-600">Node.js</div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -left-8 bg-white rounded-lg p-3 shadow-lg border"
                  animate={{
                    x: [-3, 3, -3],
                    rotate: [-1, 1, -1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="text-xs font-mono text-gray-600">Python</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}