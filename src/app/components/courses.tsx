import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

  const courses = [
    {
      id: 1,
      title: "FullStack Development",
      description: "A tailored 20-week bootcamp, perfect for tech newcomers or those with minimal programming experience who want to transform their career.",
      level: "Career change",
      levelColor: "bg-green-600",
      image: "/images/fullstack-dev.jpeg",
      link: 'fullstack-development'
    },

    {
      id: 5,
      title: "Data Science Fundamentals",
      description: "Learn data analysis, visualization, and machine learning with hands-on projects and real-world applications.",
      level: "Advanced",
      levelColor: "bg-blue-600",
      image: "/images/data-science.jpeg",
      link: 'data-science'
    },

    {
      id: 8,
      title: "Data Analysis",
      description: "Build your first app effectively using code agents",
      level: "Introduction",
      levelColor: "bg-blue-600",
      image: "/images/data-analysis.jpeg",
      link: 'data-analysis'
    },
  ];

  return (
    <div className="bg-gray-50 p-6">
      {/* Category Tabs */}

      <div className='flex flex-col items-center mb-3'>
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
            Courses
          </motion.span>
        </motion.h2>

        <motion.p className="max-w-4xl text-center flex flex-wrap gap-3 mb-6 justify-center text-lg text-black">
          At CodeSphere Academy, we provide a diverse selection of immersive bootcamps tailored to equip you with the in-demand skills and practical experience needed to succeed in today’s tech-driven world.
        </motion.p>
      </div>
      

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
            <div className="p-6 flex flex-col justify-center">
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
              <Link 
                className="w-full text-center bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                href={`courses/${course.link}`}
              >
                Learn more
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CourseCards;