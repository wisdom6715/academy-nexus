"use client"

import type React from "react"

import { useState } from "react"
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Tag,
  Clock,
  TrendingUp,
  Code,
  Zap,
} from "lucide-react"
import FooterSection from "../../components/FooterComponent"
import Newsletter from "../../components/Newsletter"

export default function CodeSphereBlog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  

  const categories = ["All", "Product Updates", "Engineering", "Business Tips", "Tech Insights", "Company News"]

  const featuredPosts = [
    {
      id: 1,
      title: "Introducing CodeSphere 3.0: Revolutionary Cloud Development Platform",
      excerpt:
        "Experience the future of cloud development with our latest platform update featuring AI-powered code completion and real-time collaboration.",
      category: "Product Updates",
      date: "December 20, 2024",
      author: "Sarah Johnson",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Scalable Microservices: Lessons from Our Engineering Team",
      excerpt:
        "Deep dive into how we architected our microservices infrastructure to handle millions of requests while maintaining 99.9% uptime.",
      category: "Engineering",
      date: "December 18, 2024",
      author: "Michael Chen",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "The Future of Remote Development: Trends and Predictions for 2025",
      excerpt:
        "Explore the emerging trends in remote development and how cloud-based IDEs are reshaping the software development landscape.",
      category: "Tech Insights",
      date: "December 15, 2024",
      author: "Emily Rodriguez",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "6 min read",
    },
  ]

  const blogPosts = [
    {
      id: 4,
      title: "10 Essential VS Code Extensions for Modern Developers",
      excerpt:
        "Boost your productivity with these carefully selected VS Code extensions that every developer should know about.",
      category: "Tech Insights",
      date: "December 12, 2024",
      author: "David Kim",
      image: "/placeholder.svg?height=250&width=400",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "How We Achieved 50% Faster Build Times with Optimized CI/CD",
      excerpt:
        "Learn about the strategies and tools we implemented to dramatically improve our continuous integration pipeline performance.",
      category: "Engineering",
      date: "December 10, 2024",
      author: "Lisa Wang",
      image: "/placeholder.svg?height=250&width=400",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "CodeSphere's Journey: From Startup to Industry Leader",
      excerpt:
        "Celebrating our 5-year milestone and reflecting on the incredible journey that brought us to where we are today.",
      category: "Company News",
      date: "December 8, 2024",
      author: "Alex Thompson",
      image: "/placeholder.svg?height=250&width=400",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "Security Best Practices for Cloud Development Environments",
      excerpt:
        "Essential security measures every developer should implement when working in cloud-based development environments.",
      category: "Tech Insights",
      date: "December 5, 2024",
      author: "Rachel Green",
      image: "/placeholder.svg?height=250&width=400",
      readTime: "9 min read",
    },
    {
      id: 8,
      title: "Maximizing Team Productivity with Real-Time Collaboration Tools",
      excerpt:
        "Discover how modern collaboration tools can transform your development workflow and boost team efficiency.",
      category: "Business Tips",
      date: "December 3, 2024",
      author: "James Wilson",
      image: "/placeholder.svg?height=250&width=400",
      readTime: "5 min read",
    },
    {
      id: 9,
      title: "Behind the Scenes: Our New AI-Powered Code Assistant",
      excerpt:
        "Get an inside look at how we built our intelligent code assistant and the machine learning models that power it.",
      category: "Engineering",
      date: "December 1, 2024",
      author: "Maria Garcia",
      image: "/placeholder.svg?height=250&width=400",
      readTime: "10 min read",
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length)
  }

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Product Updates":
        return <Zap className="w-4 h-4" />
      case "Engineering":
        return <Code className="w-4 h-4" />
      case "Business Tips":
        return <TrendingUp className="w-4 h-4" />
      default:
        return <Tag className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-6">CodeSphere Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get behind the scenes on our process, exciting news, and the people making dreams come true for millions of
            developers.
          </p>
        </div>
      </section>

      {/* Featured Article Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-400 bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {featuredPosts[currentFeaturedIndex].category}
                  </span>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredPosts[currentFeaturedIndex].title}</h2>
                <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                  {featuredPosts[currentFeaturedIndex].excerpt}
                </p>
                <div className="flex items-center gap-4 text-purple-200 text-sm mb-8">
                  <span>{featuredPosts[currentFeaturedIndex].date}</span>
                  <span>•</span>
                  <span>by {featuredPosts[currentFeaturedIndex].author}</span>
                  <span>•</span>
                  <span>{featuredPosts[currentFeaturedIndex].readTime}</span>
                </div>
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Image */}
              <div className="relative h-80 lg:h-96">
                <img
                  src={featuredPosts[currentFeaturedIndex].image || "/placeholder.svg"}
                  alt={featuredPosts[currentFeaturedIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-600 lg:hidden"></div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-8 flex items-center gap-4">
              {/* Dots */}
              <div className="flex gap-2">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeaturedIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentFeaturedIndex ? "bg-white" : "bg-white bg-opacity-40"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevFeatured}
                  className="w-10 h-10 bg-purple-500 cursor-pointer bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextFeatured}
                  className="w-10 h-10 bg-purple-500 cursor-pointer bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">All Stories</h2>
              <p className="text-xl text-gray-600">Everything you need to know, about everything we do.</p>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search blog..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                  />
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-300"
                }`}
              >
                {getCategoryIcon(category)}
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">by {post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <Newsletter />
      
      <FooterSection />
    </div>
  )
}