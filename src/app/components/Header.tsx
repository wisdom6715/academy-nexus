import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function HeaderComponent(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
        setIsMenuOpen(false)
    }

    return(
        <motion.nav
            className="fixed left-0 right-0 z-50 p-6 lg:px-96"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 120,
                delay: 0.5,
            }}
        >
            <motion.div
                className="bg-gradient-to-b from-purple-100/40 to-purple-200/20 backdrop-blur-md bg-white/10 w-full flex items-center p-2 justify-between rounded-2xl shadow-md"
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
                <Link href='/'>
                    <motion.div
                    className="text-2xl font-bold text-black cursor-pointer"
                    whileHover={{
                        scale: 1.1,
                        color: "#9333ea",
                    }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                >
                    CodeSphere
                </motion.div>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/home"
                        className="text-gray-700 hover:text-purple-600 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/courses"
                        className="text-gray-700 hover:text-purple-600 transition-colors"
                    >
                        Bootcamps
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-purple-600 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/blog"
                        className="text-gray-700 hover:text-purple-600 transition-colors"
                    >
                        Blog
                    </Link>
                    <motion.button
                        onClick={scrollToBottom}
                        className="bg-purple-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(147,51,234,0.4)",
                            y: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 300,
                            delay: 1,
                        }}
                    >
                        Get started
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        className="w-6 h-0.5 bg-gray-700 block"
                        animate={{
                            rotate: isMenuOpen ? 45 : 0,
                            y: isMenuOpen ? 4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-gray-700 block"
                        animate={{
                            opacity: isMenuOpen ? 0 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-gray-700 block"
                        animate={{
                            rotate: isMenuOpen ? -45 : 0,
                            y: isMenuOpen ? -4 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-6 right-6 mt-2 bg-gradient-to-b from-purple-100/90 to-purple-200/70 backdrop-blur-md bg-white/20 rounded-xl shadow-lg overflow-hidden"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className="py-4 px-2">
                            <motion.a
                                href="/courses"
                                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-white/20 rounded-lg transition-all"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0 * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Bootcamps
                            </motion.a>
                            <motion.a
                                href="/about"
                                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-white/20 rounded-lg transition-all"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </motion.a>
                            <motion.a
                                href="/blog"
                                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-white/20 rounded-lg transition-all"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </motion.a>
                            <motion.button
                                onClick={scrollToBottom}
                                className="block w-full text-left px-4 py-3 bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-all mt-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3 * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}