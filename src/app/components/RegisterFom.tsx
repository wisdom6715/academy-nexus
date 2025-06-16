import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    location: '',
    course: '',
    trainingProgress: ''
  });

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
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: 0.2
      }
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="relative z-10 bg-gradient-to-r from-black to-purple-900 text-white px-6 lg:px-12 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-black leading-tight"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Start Your Tech
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Journey Today
            </motion.span>
          </motion.h2>
          <motion.p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto" variants={itemVariants}>
            Join thousands of developers who have transformed their careers with our comprehensive coding education
            academy.
          </motion.p>
          {/* Registration Form Section */}
            <motion.section
                className="py-4 px-6 lg:px-12 text-black"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={formVariants}
            >
            <div className="max-w-2xl mx-auto">
                    <motion.form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
                        variants={containerVariants}
                    >
                        {/* Name and First Name Row */}
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
                            <div className='flex flex-col items-start'>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                type="text"
                                name="name"
                                placeholder='Olayiwola'
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className='flex flex-col items-start'>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                First name<span className="text-red-500">*</span>
                                </label>
                                <input
                                type="text"
                                name="firstName"
                                placeholder='Ibrahim'
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                                />
                            </div>
                        </motion.div>

                        {/* Phone Number */}
                        <motion.div variants={itemVariants} className='flex flex-col items-start'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone number<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="+234"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants} className='flex flex-col items-start'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder='olayiwolaibrahim46@gmail.com'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                            />
                        </motion.div>

                        {/* Location */}
                        <motion.div variants={itemVariants} className='flex flex-col items-start'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-white"
                            >
                                <option value="">Please Select</option>
                                <option value="lagos">Lagos</option>
                                <option value="abuja">Abuja</option>
                                <option value="port-harcourt">Port Harcourt</option>
                                <option value="kano">Kano</option>
                                <option value="other">Other</option>
                            </select>
                        </motion.div>

                        {/* Choose your course */}
                        <motion.div variants={itemVariants} className='flex flex-col items-start'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Choose your course
                            </label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-white"
                            >
                                <option value="">Please Select</option>
                                <option value="frontend">Frontend Development</option>
                                <option value="backend">Backend Development</option>
                                <option value="fullstack">Full Stack Development</option>
                                <option value="mobile">Mobile Development</option>
                                <option value="data-science">Data Science</option>
                            </select>
                        </motion.div>

                        {/* Training Progress */}
                        <motion.div variants={itemVariants} className='flex flex-col items-start'>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                How far are you in your training project?<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="trainingProgress"
                                value={formData.trainingProgress}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-white"
                            >
                                <option value="">Please Select</option>
                                <option value="beginner">Just Starting</option>
                                <option value="intermediate">Some Experience</option>
                                <option value="advanced">Advanced</option>
                                <option value="professional">Professional</option>
                            </select>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div className="pt-4" variants={itemVariants}>
                        <motion.button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200"
                            whileHover={{
                            scale: 1.02,
                            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Submit
                        </motion.button>
                        </motion.div>
                    </motion.form>
                    </div>
            </motion.section>
        </motion.div>

        {/* Floating elements for the dark section */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 border border-purple-400/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-12 h-12 bg-purple-600/20 rotate-45"
          animate={{
            rotate: [45, 135, 225, 315, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-8 h-8 bg-white/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.section>
    </div>
  );
}