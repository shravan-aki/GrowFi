import React from 'react'
import { motion } from 'framer-motion'

const Loader = ({ message = 'Loading your financial dashboard...' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="relative">
        <div className="absolute inset-0 w-96 h-96 rounded-full overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30">
            <source src="https://cdn.coverr.co/videos/coverr-abstract-sphere-8084/1080p.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-8">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-2">GrowFi</h1>
            <p className="text-gray-300">{message}</p>
          </motion.div>
          <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3, ease: 'easeInOut' }} className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </div>
        </div>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Loader