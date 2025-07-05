'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function TeamSection(){

    const team = [
        {
          name: "Oladosu Ibrahim",
          role: "Founder & CEO",
          bio: "Certified Cloud/DevOps Engineer and Data Analyst with a finance background, blending tech skills with financial insight to deliver smart, data-driven solutions.",
          image: "/images/ceo.jpg",
          gradient: "from-purple-500 to-purple-600",
        },
        {
          name: "Subair Nurudeen Adewale",
          role: "Founder and CTO",
          bio: "Certified Cloud/DevOps Engineer and tech entrepreneur shaping future talent through practical, industry-ready training.",
          image: "/images/avatar.jpeg",
          gradient: "from-purple-400 to-purple-500",
        },
        {
          name: "Oladosu Ibrahim",
          role: "Director of Career Services",
          bio: "Former tech recruiter at Amazon. Helps our graduates land their dream jobs at top companies.",
          image: "/images/avatar.jpeg",
          gradient: "from-purple-600 to-purple-700",
        },
        {
          name: "Oladosu Ibrahim",
          role: "Lead Instructor",
          bio: "Full-stack expert with 8+ years at startups and big tech. Makes complex concepts simple and fun.",
          image: "/images/avatar.jpeg",
          gradient: "from-purple-300 to-purple-400",
        },
    ]

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
                Meet Our
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
                Team
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Industry veterans and passionate educators dedicated to your success
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-100 relative overflow-hidden group"
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
                  className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />

                <div className="relative z-10">
                  <motion.div className="relative mb-6" whileHover={{ scale: 1.05 }}>
                    <Image 
                      src={member.image || "/placeholder.svg"}
                      width={250}
                      height={250}
                      alt={member.name}
                      className="rounded-full object-cover mx-auto border-4 border-purple-100"
                    />
                  </motion.div>

                  <motion.h3
                    className="text-xl font-black text-black mb-2 group-hover:text-purple-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h3>

                  <motion.div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${member.gradient} text-white rounded-full text-sm font-bold mb-4`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.role}
                  </motion.div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
}