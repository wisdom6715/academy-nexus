import React from 'react';
import { motion } from 'framer-motion';

    export default function CodeEditor(){
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

    const floatingAnimation = {
        y: [-10, 10, -10],
        rotate: [0, 5, -5, 0],
        transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        },
    }
    return(
        <motion.section
        className="relative z-10 px-6 lg:px-12 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-black text-black leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Introducing Code
              </motion.span>
              <br />
              <motion.span
                className="text-purple-600"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Realized & Enabled
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                in Real-Time
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              Our advanced code editor provides instant feedback, intelligent suggestions, and seamless debugging
              capabilities to accelerate your learning journey.
            </motion.p>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Real-time syntax highlighting and error detection",
                "Intelligent code completion and suggestions",
                "Integrated testing and debugging tools",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#000",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </motion.div>
                  <span className="text-gray-700">{text}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(147,51,234,0.4)",
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              Try Editor Now
            </motion.button>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-6 shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              }}
              animate={floatingAnimation}
            >
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                />
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                />
                <span className="text-gray-400 ml-4 text-sm">main.js</span>
              </div>
              <motion.div
                className="font-mono text-sm space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
              >
                {[
                  "function calculateFibonacci(n) {",
                  "  // Dynamic programming approach",
                  "  if (n <= 1) return n;",
                  "  let a = 0, b = 1;",
                  "  for (let i = 2; i <= n; i++) {",
                  "    [a, b] = [b, a + b];",
                  "  }",
                  "  return b;",
                  "}",
                  "// Output: 55",
                  "console.log(calculateFibonacci(10));",
                ].map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className={
                      line.includes("function")
                        ? "text-purple-400"
                        : line.includes("//")
                          ? "text-gray-400"
                          : line.includes("if") ||
                              line.includes("for") ||
                              line.includes("let") ||
                              line.includes("return")
                            ? "text-blue-400"
                            : line.includes("Output")
                              ? "text-green-400"
                              : "text-white"
                    }
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    )
}