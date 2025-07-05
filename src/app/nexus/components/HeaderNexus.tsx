'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HeaderNexus(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return(
        <nav className="fixed left-0 right-0 z-50 p-3 sm:p-4 lg:px-20 xl:px-44">
          <div className="bg-gradient-to-b from-purple-100/40 to-purple-200/20 backdrop-blur-md bg-white/10 w-full flex items-center p-2 justify-between rounded-2xl shadow-md">
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold text-black">
              <Link href="/nexus">
                <span className="cursor-pointer text-purple-600">Code</span>Sphere{" "}
                <span className="text-purple-600 font-black">Nexus</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-5">
              {/* Services Dropdown */}
              <Link href="/nexus" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <div className="relative group">
                <button className="text-gray-700 cursor-pointer hover:text-purple-600 transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute cursor-pointer top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-3">
                    <Link href="/nexus/services/aws" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Image src="/images/aws.jpeg" alt="AWS" width={30} height={30}  />
                      <span className="text-gray-700 hover:text-purple-600">AWS</span>
                    </Link>
                    <Link href="/nexus/services/azure" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Image src="/images/azure.jpeg" alt="Microsoft" width={30} height={30} />
                      <span className="text-gray-700 hover:text-purple-600">Microsoft</span>
                    </Link>
                    <Link href="/nexus/services/cybersecurity" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Image src="/images/cybersecurity.jpeg" alt="Cybersecurity" width={30} height={30} />
                      <span className="text-gray-700 hover:text-purple-600">Cybersecurity</span>
                    </Link>
                    <Link href="/nexus/services/software-dev" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Image src="/images/code.jpeg" alt="Software Development" width={30} height={30} />
                      <span className="text-gray-700 hover:text-purple-600">Software Development</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Insights Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 cursor-pointer hover:text-purple-600 transition-colors flex items-center">
                  Insights
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full cursor-pointer left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2 space-y-1">
                    <Link href="/nexus/insights/blog" className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">
                      Blog
                    </Link>
                    <Link href="/nexus/insights/events" className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-colors">
                      Events
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/nexus/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                about
              </Link>

              <Link href="/nexus/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>

              <Link href="/nexus/career" className="text-gray-700 hover:text-purple-600 transition-colors">
                Career
              </Link>

              <p onClick={scrollToBottom} className="bg-purple-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all">
                Get Started
              </p>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-purple-600 transition-colors p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-2 bg-gradient-to-b from-purple-100/40 to-purple-200/20 backdrop-blur-md bg-white/10 rounded-2xl shadow-md">
              <div className="p-4 space-y-3">
                <Link 
                  href="/nexus" 
                  className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Services Section */}
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-gray-900 font-medium mb-2">Services</p>
                  <div className="space-y-2 pl-4">
                    <Link 
                      href="/nexus/services/aws" 
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image src="/images/aws.jpeg" alt="AWS" width={20} height={20} />
                      <span>AWS</span>
                    </Link>
                    <Link 
                      href="/nexus/services/azure" 
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image src="/images/azure.jpeg" alt="Microsoft" width={20} height={20} />
                      <span>Microsoft</span>
                    </Link>
                    <Link 
                      href="/nexus/services/cybersecurity" 
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image src="/images/cybersecurity.jpeg" alt="Cybersecurity" width={20} height={20} />
                      <span>Cybersecurity</span>
                    </Link>
                    <Link 
                      href="/nexus/services/software-dev" 
                      className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Image src="/images/code.jpeg" alt="Software Development" width={20} height={20} />
                      <span>Software Development</span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Insights Section */}
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-gray-900 font-medium mb-2">Insights</p>
                  <div className="space-y-2 pl-4">
                    <Link 
                      href="/nexus/insights/blog" 
                      className="block text-gray-700 hover:text-purple-600 transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/nexus/insights/events" 
                      className="block text-gray-700 hover:text-purple-600 transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Events
                    </Link>
                  </div>
                </div>

                <Link 
                  href="/nexus/about" 
                  className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>

                <Link 
                  href="/nexus/contact" 
                  className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link 
                  href="/nexus/career" 
                  className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Career
                </Link>

                <button 
                  onClick={() => {
                    scrollToBottom()
                    setIsMobileMenuOpen(false)
                  }} 
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all mt-4"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
    )
}