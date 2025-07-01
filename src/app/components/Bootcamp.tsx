import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare, Briefcase, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const BootcampFeatures: React.FC = () => {
  const [expandedFeature, setExpandedFeature] = useState<number>(1);
  const route = useRouter()
  const BootcampPage = () =>{
    route.push('/courses')
  }

  const features: Feature[] = [
    {
      id: 1,
      title: "Live Instructor-led Classes",
      description: "Our live instructor-led classes are an opportunity to learn by doing. You'll interact with fellow students & course instructors during live classes for one-on-one impact, get answers to questions & get problems solved!",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "text-pink-500",
      bgColor: "bg-pink-500"
    },
    {
      id: 2,
      title: "Job-ready Portfolio",
      description: "Build real-world projects that showcase your skills to potential employers. Our curriculum focuses on practical applications that demonstrate your expertise.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500"
    },
    {
      id: 3,
      title: "Get Hired, Fast",
      description: "Our career services team works with you to land your dream job quickly. From resume reviews to interview prep, we've got you covered.",
      icon: <Zap className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500"
    }
  ];

  const toggleFeature = (id: number): void => {
    setExpandedFeature(expandedFeature === id ? 0 : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2 className=" flex flex-wrap gap-3 mb-6 justify-center text-4xl lg:text-5xl font-black text-black" whileHover={{ scale: 1.05 }}>
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                Our 
            </motion.span>{" "}
            <motion.span
                className="text-purple-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                Bootcamp
            </motion.span>
        </motion.h2>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Why Learn With Us?
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left side - Interactive list */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFeature(feature.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {feature.id}. {feature.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedFeature === feature.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {expandedFeature === feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Right side - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="aspect-square bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div className="aspect-square bg-green-500 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.button
          className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={BootcampPage}
        >
          Explore Bootcamps
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BootcampFeatures;