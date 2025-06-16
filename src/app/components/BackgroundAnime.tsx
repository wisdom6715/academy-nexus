import React, {useState, useEffect} from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundAnime(){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { scrollYProgress } = useScroll()

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])
    

    return(
    <motion.div className="fixed inset-0 pointer-events-none" style={{ y: backgroundY }}>
        <motion.div
          className="absolute w-32 h-32 bg-purple-600/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            left: `${mousePosition.x * 0.01}%`,
            top: `${mousePosition.y * 0.01}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-black/5 rotate-45"
          animate={{
            rotate: [45, 135, 225, 315, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-24 h-24 border-2 border-purple-600/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            borderWidth: [2, 4, 2],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            borderWidth: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-800/10 rotate-12"
          animate={{
            rotate: [12, 72, 132, 192, 252, 312, 12],
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-12 h-12 border border-black/10"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 0.8, 1.2, 1],
            borderRadius: ["0%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    )
}