import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start space-x-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex-shrink-0"
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const QuantumAnalyticsAbout: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h2 className=" flex flex-wrap gap-3 mb-6  text-4xl lg:text-5xl font-black text-black" whileHover={{ scale: 1.05 }}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  About 
                </motion.span>{" "}
                <motion.span
                  className="text-purple-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  us
                </motion.span>
              </motion.h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At CodeSpher Academy, we empower you to become a global talent by providing 
                exceptional training crafted by industry experts. Through a hands-on, experiential 
                learning model and internship opportunities, we ensure you gain the expertise 
                needed to thrive in today workforce.
              </p>
            </motion.div>

            <div className="space-y-4">
              <FeatureCard
                icon={
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                }
                title="Make tech skills accessible"
                description="We ensure that everyone has access to acquiring technology skills."
                delay={0.2}
              />

              <FeatureCard
                icon={
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                }
                title="Community Inclusivity"
                description="We're building a safe community of tech talents without borders & barriers."
                delay={0.4}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-700 hover:bg-purple-800 cursor-pointer text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              {/* Colorful Background Shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-100 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-600 rounded-tl-3xl"></div>
              
              {/* Team Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-gray-100 rounded-2xl m-6 overflow-hidden shadow-xl"
              >
                {/* Placeholder for team image - you can replace with actual image */}
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                          className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto"
                        />
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="w-full h-12 bg-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuantumAnalyticsAbout;