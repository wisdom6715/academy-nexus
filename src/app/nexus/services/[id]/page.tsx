"use client"

import type React from "react"

import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import {
  Shield,
  Cloud,
  Code,
  Lock,
  ArrowRight,
  Zap,
  Users,
  Award,
  Server,
  Database,
  Globe,
  Cpu,
  Layers,
  Settings,
} from "lucide-react"
import FooterSection from "../../components/FooterComponent"
import RegisterForm from "../../components/RegistrationForm"

interface ServiceData {
  id: string
  title: string
  subtitle: string
  description: string
  heroImage: string
  icon: React.ComponentType<any>
  color: string
  gradient: string
  features: {
    icon: React.ComponentType<any>
    title: string
    description: string
  }[]
  benefits: {
    title: string
    description: string
    metric?: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  technologies: string[]
  cta: {
    title: string
    description: string
  }
}

const servicesData: Record<string, ServiceData> = {
  aws: {
    id: "aws",
    title: "AWS Cloud Solutions",
    subtitle: "Scalable Cloud Infrastructure & Services",
    description:
      "Transform your business with enterprise-grade AWS cloud solutions. We help you migrate, optimize, and scale your infrastructure with industry-leading cloud services.",
    heroImage: "/images/aws.jpeg",
    icon: Cloud,
    color: "purple-600",
    gradient: "from-purple-600 to-purple-800",
    features: [
      {
        icon: Server,
        title: "Cloud Migration",
        description:
          "Seamless migration of your existing infrastructure to AWS with minimal downtime and maximum efficiency.",
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description:
          "Enterprise-grade security measures and compliance frameworks to protect your data and applications.",
      },
      {
        icon: Zap,
        title: "Auto Scaling",
        description:
          "Dynamic resource allocation that automatically scales based on demand to optimize costs and performance.",
      },
      {
        icon: Database,
        title: "Data Management",
        description:
          "Comprehensive data storage, backup, and analytics solutions using AWS's powerful database services.",
      },
    ],
    benefits: [
      {
        title: "Cost Reduction",
        description: "Reduce infrastructure costs by up to 40% with optimized cloud resource management.",
        metric: "40%",
      },
      {
        title: "Improved Performance",
        description: "Experience faster load times and better application performance with AWS global infrastructure.",
        metric: "3x",
      },
      {
        title: "Enhanced Security",
        description: "Benefit from AWS's world-class security measures and compliance certifications.",
        metric: "99.9%",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment & Planning",
        description: "Comprehensive analysis of your current infrastructure and migration strategy development.",
      },
      {
        step: 2,
        title: "Migration & Setup",
        description: "Careful migration of your applications and data to AWS with minimal business disruption.",
      },
      {
        step: 3,
        title: "Optimization & Monitoring",
        description: "Continuous optimization and 24/7 monitoring to ensure peak performance and cost efficiency.",
      },
    ],
    technologies: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "VPC", "IAM", "CloudWatch"],
    cta: {
      title: "Ready to Move to the Cloud?",
      description: "Let's discuss how AWS can transform your business infrastructure and drive growth.",
    },
  },
  azure: {
    id: "azure",
    title: "Microsoft Azure Services",
    subtitle: "Enterprise Cloud Solutions & Integration",
    description:
      "Leverage Microsoft Azure's comprehensive cloud platform to build, deploy, and manage applications with seamless integration to your existing Microsoft ecosystem.",
    heroImage: "/images/azure.jpeg",
    icon: Layers,
    color: "purple-600",
    gradient: "from-purple-600 to-purple-800",
    features: [
      {
        icon: Globe,
        title: "Hybrid Cloud Solutions",
        description: "Seamlessly integrate on-premises and cloud environments with Azure's hybrid capabilities.",
      },
      {
        icon: Settings,
        title: "DevOps Integration",
        description: "Streamline your development lifecycle with Azure DevOps and continuous integration/deployment.",
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Advanced threat protection and identity management with Azure Active Directory integration.",
      },
      {
        icon: Cpu,
        title: "AI & Machine Learning",
        description: "Harness the power of Azure AI services to build intelligent applications and insights.",
      },
    ],
    benefits: [
      {
        title: "Seamless Integration",
        description: "Perfect integration with existing Microsoft tools and services for enhanced productivity.",
        metric: "100%",
      },
      {
        title: "Global Reach",
        description: "Deploy applications across Azure's global network of data centers for optimal performance.",
        metric: "60+",
      },
      {
        title: "Cost Optimization",
        description: "Reduce operational costs with Azure's pay-as-you-use pricing model and reserved instances.",
        metric: "35%",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description: "Evaluate your current Microsoft ecosystem and develop a comprehensive Azure adoption strategy.",
      },
      {
        step: 2,
        title: "Implementation & Migration",
        description: "Execute the migration plan with minimal disruption to your business operations.",
      },
      {
        step: 3,
        title: "Optimization & Support",
        description: "Ongoing optimization and support to maximize your Azure investment and performance.",
      },
    ],
    technologies: [
      "Azure VMs",
      "Azure SQL",
      "Azure AD",
      "Azure Functions",
      "Azure DevOps",
      "Power BI",
      "Office 365",
      "Teams",
    ],
    cta: {
      title: "Transform with Azure",
      description:
        "Discover how Microsoft Azure can enhance your business capabilities and drive digital transformation.",
    },
  },
  "software-dev": {
    id: "software-dev",
    title: "Software Development",
    subtitle: "Custom Software Solutions & Applications",
    description:
      "Build powerful, scalable software solutions tailored to your business needs. From web applications to mobile apps, we deliver cutting-edge technology that drives results.",
    heroImage: "/images/code.jpeg",
    icon: Code,
    color: "purple-600",
    gradient: "from-purple-600 to-purple-800",
    features: [
      {
        icon: Code,
        title: "Full-Stack Development",
        description: "End-to-end development services covering frontend, backend, and database architecture.",
      },
      {
        icon: Globe,
        title: "Web Applications",
        description: "Responsive, fast, and secure web applications built with modern frameworks and technologies.",
      },
      {
        icon: Cpu,
        title: "Mobile Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android with exceptional user experience.",
      },
      {
        icon: Database,
        title: "API Development",
        description: "Robust RESTful APIs and microservices architecture for seamless system integration.",
      },
    ],
    benefits: [
      {
        title: "Faster Time to Market",
        description: "Accelerate your product launch with agile development methodologies and rapid prototyping.",
        metric: "50%",
      },
      {
        title: "Scalable Architecture",
        description: "Build applications that grow with your business using modern, scalable technologies.",
        metric: "10x",
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive testing and quality assurance processes ensure bug-free, reliable software.",
        metric: "99%",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirements & Design",
        description:
          "Detailed requirement analysis and user experience design to create the perfect solution blueprint.",
      },
      {
        step: 2,
        title: "Development & Testing",
        description: "Agile development with continuous testing and regular client feedback integration.",
      },
      {
        step: 3,
        title: "Deployment & Maintenance",
        description: "Smooth deployment and ongoing maintenance to ensure optimal performance and updates.",
      },
    ],
    technologies: ["React", "Node.js", "Python", "TypeScript", "Next.js", "MongoDB", "PostgreSQL", "Docker"],
    cta: {
      title: "Build Your Vision",
      description: "Let's turn your ideas into powerful software solutions that drive your business forward.",
    },
  },
  cybersecurity: {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    subtitle: "Advanced Security & Risk Management",
    description:
      "Protect your digital assets with comprehensive cybersecurity solutions. From threat detection to compliance management, we safeguard your business against evolving cyber threats.",
    heroImage: "/images/cybersecurity.jpeg",
    icon: Lock,
    color: "purple-600",
    gradient: "from-purple-600 to-purple-800",
    features: [
      {
        icon: Shield,
        title: "Threat Detection",
        description:
          "Advanced threat detection and response systems to identify and neutralize security risks in real-time.",
      },
      {
        icon: Lock,
        title: "Data Protection",
        description:
          "Comprehensive data encryption and protection strategies to secure sensitive business information.",
      },
      {
        icon: Users,
        title: "Identity Management",
        description: "Robust identity and access management solutions to control and monitor user permissions.",
      },
      {
        icon: Award,
        title: "Compliance Management",
        description: "Ensure regulatory compliance with industry standards like GDPR, HIPAA, and SOC 2.",
      },
    ],
    benefits: [
      {
        title: "Risk Reduction",
        description: "Minimize security risks and potential data breaches with proactive security measures.",
        metric: "95%",
      },
      {
        title: "Compliance Assurance",
        description: "Maintain compliance with industry regulations and avoid costly penalties.",
        metric: "100%",
      },
      {
        title: "Business Continuity",
        description: "Ensure uninterrupted business operations with robust security and disaster recovery plans.",
        metric: "24/7",
      },
    ],
    process: [
      {
        step: 1,
        title: "Security Assessment",
        description: "Comprehensive security audit to identify vulnerabilities and assess current security posture.",
      },
      {
        step: 2,
        title: "Implementation & Training",
        description: "Deploy security solutions and provide staff training on security best practices.",
      },
      {
        step: 3,
        title: "Monitoring & Response",
        description: "Continuous monitoring and rapid incident response to maintain optimal security levels.",
      },
    ],
    technologies: [
      "SIEM",
      "Firewall",
      "VPN",
      "Multi-Factor Authentication",
      "Encryption",
      "Penetration Testing",
      "SOC",
      "GDPR",
    ],
    cta: {
      title: "Secure Your Business",
      description: "Protect your organization from cyber threats with our comprehensive security solutions.",
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = servicesData[params.id]

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div
                className={`inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6`}
              >
                <IconComponent className="w-4 h-4" />
                {service.subtitle}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2`}
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-medium transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div
                className={`absolute -top-4 -right-4 w-full h-full bg-gradient-to-br ${service.gradient} rounded-2xl opacity-20`}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the powerful capabilities that make our {service.title.toLowerCase()} stand out
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {service.features.map((feature, index) => {
              const FeatureIcon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4`}>
                    <FeatureIcon className={`w-6 h-6 text-purple-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience measurable results and transformative benefits for your business
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {service.benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                {benefit.metric && <div className={`text-5xl font-bold text-purple-600 mb-4`}>{benefit.metric}</div>}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {service.process.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div
                    className={`w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className={`w-8 h-8 text-purple-300`} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and technologies that power our solutions
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {service.technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-medium`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <RegisterForm />
      <FooterSection />
    </div>
  )
}