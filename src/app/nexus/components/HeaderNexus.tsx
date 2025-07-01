'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
export default function HeaderNexus(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
        const scrollToBottom = () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            })
            setIsMenuOpen(false)
        }
    return(
        <nav className="fixed left-0 right-0 z-50 p-6 lg:px-96">
          <div className="bg-gradient-to-b from-purple-100/40 to-purple-200/20 backdrop-blur-md bg-white/10 w-full flex items-center p-2 justify-between rounded-2xl shadow-md">
            <div className="text-2xl font-bold text-black">
              <Link href="/nexus">
                <span className="cursor-pointer text-purple-600">Code</span>Sphere{" "}
                <span className="text-purple-600 font-black">Nexus</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-5">
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

              {/* About Dropdown */}
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
          </div>
        </nav>
    )
}