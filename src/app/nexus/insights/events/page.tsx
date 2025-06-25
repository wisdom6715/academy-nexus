"use client"

import type React from "react"

import { useState } from "react"
import {
  Search,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Tag,
  Clock,
  Users,
  Code,
  Zap,
  Star,
  Globe,
} from "lucide-react"
import Newsletter from "../../components/Newsletter"
import FooterSection from "@/app/components/FooterSection"

export default function CodeSphereEvents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  

  const categories = ["All", "Conferences", "Workshops", "Meetups", "Webinars", "Hackathons"]

  const featuredEvents = [
    {
      id: 1,
      title: "CodeSphere Developer Conference 2025",
      description:
        "Join us for the biggest developer conference of the year featuring AI-powered development, cloud architecture, and the future of coding.",
      category: "Conferences",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      attendees: "2,500+ Expected",
      price: "$299",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
      virtual: false,
    }
  ]

  const upcomingEvents = [
    {
      id: 4,
      title: "React Performance Optimization Workshop",
      description:
        "Learn advanced techniques to optimize your React applications for better performance and user experience.",
      category: "Workshops",
      date: "January 30, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "New York Tech Center",
      attendees: "150",
      price: "$89",
      image: "/placeholder.svg?height=250&width=400",
      virtual: false,
    }
  ]

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredEvents.length)
  }

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Conferences":
        return <Users className="w-4 h-4" />
      case "Workshops":
        return <Code className="w-4 h-4" />
      case "Meetups":
        return <Users className="w-4 h-4" />
      case "Webinars":
        return <Globe className="w-4 h-4" />
      case "Hackathons":
        return <Zap className="w-4 h-4" />
      default:
        return <Tag className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Curved Background */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-16"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">CodeSphere Events</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Discover, learn, and connect at our exciting developer events. From conferences to workshops, 
            find your next opportunity to grow and network with the community.
          </p>
        </div>
      </section>

      {/* Featured Event Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-400 bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-1">
                    {getCategoryIcon(featuredEvents[currentFeaturedIndex].category)}
                    {featuredEvents[currentFeaturedIndex].category}
                  </span>
                  <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{featuredEvents[currentFeaturedIndex].title}</h2>
                <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                  {featuredEvents[currentFeaturedIndex].description}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-purple-200">
                    <Calendar className="w-5 h-5" />
                    <span>{featuredEvents[currentFeaturedIndex].date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-200">
                    <Clock className="w-5 h-5" />
                    <span>{featuredEvents[currentFeaturedIndex].time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-200">
                    <MapPin className="w-5 h-5" />
                    <span>{featuredEvents[currentFeaturedIndex].location}</span>
                    {featuredEvents[currentFeaturedIndex].virtual && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Virtual</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-purple-200">
                    <Users className="w-5 h-5" />
                    <span>{featuredEvents[currentFeaturedIndex].attendees}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                    Register Now <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-2xl font-bold text-yellow-300">
                    {featuredEvents[currentFeaturedIndex].price}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-80 lg:h-96">
                <img
                  src={featuredEvents[currentFeaturedIndex].image || "/placeholder.svg"}
                  alt={featuredEvents[currentFeaturedIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-600 lg:hidden"></div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-8 flex items-center gap-4">
              {/* Dots */}
              <div className="flex gap-2">
                {featuredEvents.map((_, index) => (
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

      {/* All Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Don't miss out on these amazing opportunities to learn and connect.</p>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
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

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      {getCategoryIcon(event.category)}
                      {event.category}
                    </span>
                    {event.virtual && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Virtual
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                      {event.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    Register Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
      <FooterSection />
    </div>
  )
}