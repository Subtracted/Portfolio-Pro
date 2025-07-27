import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  const leafVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Feuilles flottantes */}
      <motion.div
        className="absolute top-20 left-16 text-4xl opacity-20"
        variants={leafVariants}
        animate="float"
        style={{ animationDelay: '0s' }}
      >
        🍃
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-3xl opacity-25"
        variants={leafVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      >
        🌿
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20 text-2xl opacity-20"
        variants={leafVariants}
        animate="float"
        style={{ animationDelay: '4s' }}
      >
        🍂
      </motion.div>
      
      <motion.div
        className="absolute bottom-60 right-16 text-3xl opacity-25"
        variants={leafVariants}
        animate="float"
        style={{ animationDelay: '6s' }}
      >
        🌱
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/4 text-2xl opacity-15"
        variants={leafVariants}
        animate="float"
        style={{ animationDelay: '3s' }}
      >
        🍃
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/3 text-3xl opacity-20"
        variants={leafVariants}
        animate="float"
        style={{ animationDelay: '5s' }}
      >
        🌿
      </motion.div>

      {/* Quelques particules subtiles */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-forest-300 rounded-full opacity-20"
          style={{
            left: `${15 + i * 25}%`,
            top: `${25 + i * 20}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements 