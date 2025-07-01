"use client"
import CourseCards from "../components/courses"
import RegisterForm from "../components/RegisterFom"
import HeaderComponent from "../components/Header"
import TestimonialSection from "../components/TestimonialSection"
import FooterSection from "../components/FooterSection"
import BackgroundAnime from "../components/BackgroundAnime"
import CodeEditor from "../components/CodeEditor"
import HeroSection from "../components/HeroSection"
import BootcampFeatures from "../components/Bootcamp"
import AboutUs from '../components/AboutUs'

export default function HomePage() {
  // Container variants for staggered animations

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <BackgroundAnime />

      <HeaderComponent />

      {/* Hero Section */}
      <HeroSection />
      
      {/* Learning Paths */}
      <CourseCards />

      <BootcampFeatures />

      {/* Code Editor Showcase */}
      <AboutUs />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <RegisterForm />
      
      {/* Footer */}
      <FooterSection />
    </div>
  )
}