import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CourseCards = () => {
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const courses = [
    {
      id: 1,
      title: "Software Developer Bootcamp",
      description: "A tailored 20-week bootcamp, perfect for tech newcomers or those with minimal programming experience who want to transform their career.",
      level: "Career change",
      levelColor: "bg-green-600",
      image: "/images/fullstack-dev.jpeg"
    },

    {
      id: 2,
      title: "Introduction to Web Programming",
      description: "A beginner-friendly training, tailored to help you build your first website with hands-on learning and expert guidance.",
      level: "Introduction",
      levelColor: "bg-purple-500",
      image: "/images/backend.jpeg"
    },

    {
      id: 3,
      title: "Front End Developer - React JS",
      description: "Dive into React JS mastery in our advanced course for developers with basic front-end skills.",
      level: "Advanced",
      levelColor: "bg-blue-600",
      image: "/images/Frontend1.jpeg"
    },
    
    {
      id: 4,
      title: "Backend Development Mastery",
      description: "Master server-side development with modern frameworks and database management techniques.",
      level: "Advanced",
      levelColor: "bg-blue-600",
      image: "/images/backend.jpeg"
    },

    {
      id: 5,
      title: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning with hands-on projects and real-world applications.",
      level: "Advanced",
      levelColor: "bg-blue-600",
      image: "/images/data-science.jpeg"
    },

    {
      id: 6,
      title: "UI/UX Design Basics",
      description: "Start your design journey with user interface and experience design principles and practical skills.",
      level: "Introduction",
      levelColor: "bg-purple-500",
      image: "/images/ux.jpeg"
    },

    {
      id: 7,
      title: "Effective Vibe coding",
      description: "Build your first app effectively using code agents",
      level: "Introduction",
      levelColor: "bg-blue-600",
      image: "/images/data-science.jpeg"
    },

    {
      id: 8,
      title: "Data Analysis",
      description: "Build your first app effectively using code agents",
      level: "Introduction",
      levelColor: "bg-blue-600",
      image: "/images/data-analysis.jpeg"
    },

    {
      id: 9,
      title: "LLM Engineering / AI Engineering",
      description: "Build your first app effectively using code agents",
      level: "Introduction",
      levelColor: "bg-blue-600",
      image: "/images/mobile-dev.jpeg"
    },
  ];

  const categories = [
    { name: "Software Development", active: true, color: "bg-purple-500" },
    { name: "Data", active: false, color: "bg-gray-200" },
    { name: "Clouds", active: false, color: "bg-gray-200" },
    { name: "Design", active: false, color: "bg-gray-200" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Category Tabs */}
      <motion.div 
        className="flex flex-wrap gap-3 mb-8 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={index}
            variants={tabVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              category.active
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category.name === "Software Development" && (
              <span className="mr-2">💻</span>
            )}
            {category.name === "Data" && (
              <span className="mr-2">📊</span>
            )}
            {category.name === "Design" && (
              <span className="mr-2">🎨</span>
            )}
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Course Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Card Image */}
            <div className="relative overflow-hidden">
              <Image src={course.image} alt='image of course' width={500} height={600}
              className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center object-cover"
              />
              {/* Level Badge */}
              <motion.div 
                className="absolute top-4 left-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <span className={`${course.levelColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {course.level}
                </span>
              </motion.div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <motion.h3 
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                {course.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                {course.description}
              </motion.p>
              <motion.button 
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                Learn more
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseCards;