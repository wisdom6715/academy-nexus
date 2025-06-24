
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "../globals.css"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexus - Premium Tech Solutions by CodeSphere",
  description:
    "Professional cloud services, cybersecurity, and development solutions. AWS, Microsoft Azure, mobile apps, and web development by CodeSphere Nexus.",
}

export default function NexusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Fixed Navigation for Nexus */}
        <nav className="fixed left-0 right-0 z-50 p-6 lg:px-96">
          <div className="bg-gray-100 w-full flex items-center p-2 justify-between rounded-2xl">
            <div className="text-2xl font-bold text-black">
              <Link href="/nexus">
                <span className="text-purple-600">Code</span>Sphere{" "}
                <span className="text-purple-600 font-black">Nexus</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-purple-600 transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                <button className="text-gray-700 hover:text-purple-600 transition-colors flex items-center">
                  Insights
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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

              <Link
                href="/nexus/get-started"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}