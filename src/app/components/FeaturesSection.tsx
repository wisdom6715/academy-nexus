import React from 'react';
import { motion } from 'framer-motion';
import {  Code, Users, BookOpen, Zap } from "lucide-react"

export default function FeatureSection(){
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

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
        <motion.section
        id="courses"
        className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl lg:text-5xl font-black text-black mb-6" whileHover={{ scale: 1.05 }}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Virtual Environment to Practice
              </motion.span>
              <br />
              <motion.span
                className="text-purple-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Real-World Coding
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Experience hands-on learning with our interactive coding environment designed to simulate real development
              scenarios.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Code,
                title: "Interactive Coding",
                desc: "Practice with real-time feedback and instant code execution",
              },
              {
                icon: Users,
                title: "Collaborative Learning",
                desc: "Work together with peers on challenging coding projects",
              },
              {
                icon: BookOpen,
                title: "Structured Curriculum",
                desc: "Follow our carefully designed learning path for maximum growth",
              },
              {
                icon: Zap,
                title: "Instant Feedback",
                desc: "Get immediate insights on your code quality and performance",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors"
                  whileHover={{
                    rotate: [0, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 className="text-xl font-bold text-black mb-4" whileHover={{ color: "#9333ea" }}>
                  {feature.title}
                </motion.h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    )
}