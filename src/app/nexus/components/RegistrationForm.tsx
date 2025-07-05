'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/lib/firebase.config'; // Adjust the path to your config file

// Type definitions
interface FormData {
  name: string;
  firstName: string;
  phoneNumber: string;
  companyName: string;
  companyPosition: string;
  email: string;
  location: string;
  course: string;
  trainingProgress: string;
}

interface StudentData {
  email: string;
  name: string;
  firstName: string;
  course: string;
  whatsappGroupLink?: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
}

type SubmitStatus = 'success' | 'error' | '';

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    firstName: '',
    phoneNumber: '',
    companyName: '',
    companyPosition: '',
    email: '',
    location: '',
    course: '',
    trainingProgress: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(''); // 'success' or 'error'

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWelcomeEmail = async (studentData: StudentData): Promise<void> => {
    try {
      const response = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: studentData.email,
          name: studentData.name,
          firstName: studentData.firstName,
          course: studentData.course,
          whatsappGroupLink: 'https://chat.whatsapp.com/your-group-link'
        }),
      });

      const result: EmailResponse = await response.json();
      if (result.success) {
        console.log('✅ Welcome email sent successfully');
      } else {
        console.error('❌ Failed to send welcome email:', result.message);
      }
    } catch (error) {
      console.error('❌ Error sending welcome email:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Add document to Firestore - changed collection name to 'enterprise_registration'
      const docRef = await addDoc(collection(db, 'enterprise_registration'), {
        ...formData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      console.log('Document written with ID: ', docRef.id);
      
      // Send welcome email after successful registration
      await sendWelcomeEmail(formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        firstName: '',
        phoneNumber: '',
        companyName: '',
        companyPosition: '',
        email: '',
        location: '',
        course: '',
        trainingProgress: ''
      });

    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              Transform with CodeSphere Nexus
            </motion.span>
          </motion.h2>
          <motion.p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto" variants={itemVariants}>
            Discover how CodeSphere Nexus can enhance your business capabilities and drive digital transformation.
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
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-semibold">Registration Successful!</p>
                  <p>Thank you for registering. We will be in touch soon.</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-semibold">Registration Failed</p>
                  <p>There was an error submitting your registration. Please try again.</p>
                </motion.div>
              )}

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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </motion.div>

                {/* Company Name */}
                <motion.div variants={itemVariants} className='flex flex-col items-start'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="CodeSphere"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </motion.div>

                {/* Company Position */}
                <motion.div variants={itemVariants} className='flex flex-col items-start'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Position<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyPosition"
                    value={formData.companyPosition}
                    onChange={handleInputChange}
                    placeholder="Chief Technology Officer etc"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Please Select</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="port-harcourt">Port Harcourt</option>
                    <option value="kano">Kano</option>
                    <option value="Ibadan">Ibadan</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Choose your course */}
                <motion.div variants={itemVariants} className='flex flex-col items-start'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose our service
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Please Select</option>
                    <option value="software-dev">Software development</option>
                    <option value="aws-clouds">AWS Clouds</option>
                    <option value="microsoft-azure">Microsoft Azure</option>
                    <option value="cybersecurity">Cybersecurity</option>
                  </select>
                </motion.div>

                {/* Additional information */}
                <motion.div variants={itemVariants} className='flex flex-col items-start'>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have anything you would like us to know?<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="trainingProgress"
                    value={formData.trainingProgress}
                    onChange={handleInputChange}
                    placeholder='enter text ...'
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div className="pt-4" variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 disabled:bg-purple-400 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={!isSubmitting ? {
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Registration'
                    )}
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