import React from 'react'
import { motion } from 'framer-motion'

const BackgroundFX = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(109,151,115,0.35), rgba(109,151,115,0))' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(187,138,82,0.3), rgba(187,138,82,0))' }}
      />

      {/* Subtle animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="diag" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <g opacity="0.15">
            <path d="M -100 200 L 4000 -1200" stroke="url(#diag)" strokeWidth="2" />
            <path d="M -300 400 L 3800 -1000" stroke="url(#diag)" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, opacity: 0.3 }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            background: i % 3 === 0 ? '#FFBA00' : i % 3 === 1 ? '#6D9773' : '#BB8A52'
          }}
        />
      ))}

      {/* Corner accent shapes */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-[-60px] right-[-60px] w-[260px] h-[260px]"
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M20 40 C 80 0, 120 0, 180 40 L 180 180 L 20 180 Z" fill="url(#accent)" opacity="0.25" />
      </motion.svg>
    </div>
  )
}

export default BackgroundFX


