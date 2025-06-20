import React from "react"
import { motion } from 'framer-motion';
export default function FooterSection(){
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
        <motion.footer
        className="relative z-10 bg-black text-white px-6 lg:px-12 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="text-2xl font-bold mb-4"
                whileHover={{
                  scale: 1.1,
                  color: "#9333ea",
                }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
              >
                CodeSphere
              </motion.div>
              <p className="text-gray-400">
                Empowering the next generation of developers through innovative coding education.
              </p>
            </motion.div>
            {[
              {
                title: "Courses",
                items: ["Frontend Development", "Backend Engineering", "Mobile Apps", "DevOps"],
              },
              {
                title: "Company",
                items: ["About Us", "Careers", "Blog", "Contact"],
              },
              {
                title: "Support",
                items: ["Help Center", "Community", "Documentation", "Status"],
              },
            ].map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <motion.h3 className="font-bold mb-4" whileHover={{ color: "#9333ea" }}>
                  {section.title}
                </motion.h3>
                <div className="space-y-2 text-gray-400">
                  {section.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{
                        color: "#fff",
                        x: 5,
                      }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="cursor-pointer"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="border-t border-gray-800 pt-8 text-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 CodeSphere. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    )
}