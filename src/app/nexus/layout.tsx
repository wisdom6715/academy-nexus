
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import HeaderNexus from "./components/HeaderNexus"

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
        <HeaderNexus />
        {children}
      </body>
    </html>
  )
}