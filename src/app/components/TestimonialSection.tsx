import { motion } from "framer-motion"
import { Star } from "lucide-react"
export  default function TestimonialSection(){
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
        id="testimonials"
        className="relative z-10 px-6 lg:px-12 py-20"
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
                What Our
              </motion.span>{" "}
              <motion.span
                className="text-purple-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Students Say
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Sarah Chen",
                role: "Full Stack Developer",
                content:
                  "CodeSphere transformed my career. The hands-on approach and real-world projects gave me the confidence to land my dream job.",
                rating: 5,
              },
              {
                name: "Marcus Johnson",
                role: "Software Engineer",
                content:
                  "The interactive coding environment is incredible. I learned more in 3 months than I did in years of self-study.",
                rating: 5,
              },
              {
                name: "Elena Rodriguez",
                role: "Frontend Developer",
                content:
                  "Amazing platform with excellent mentorship. The community support made all the difference in my learning journey.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 360,
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.p
                  className="text-gray-600 leading-relaxed mb-6 italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  &quot;{testimonial.content}&quot;
                </motion.p>
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#000",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold">{testimonial.name[0]}</span>
                  </motion.div>
                  <div>
                    <motion.div className="font-bold text-black" whileHover={{ color: "#9333ea" }}>
                      {testimonial.name}
                    </motion.div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    )
}