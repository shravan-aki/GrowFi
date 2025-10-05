import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll()
  const yVideo = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacityOverlay = useTransform(scrollYProgress, [0, 1], [0.4, 0.6])

  return (
    <section className="relative py-24">
      <div className="relative h-[420px] rounded-2xl overflow-hidden gradient-border">
        <motion.div style={{ y: yVideo }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-waves-in-the-dark-3873/1080p.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div style={{ opacity: opacityOverlay }} className="absolute inset-0 bg-gradient-to-b from-[#0C3B2E]/50 to-[#283618]/60 backdrop-blur-[2px]" />

        <motion.div style={{ y: yContent }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Deeper Insights</h2>
          <p className="max-w-2xl text-gray-200/90 mb-6">
            Scroll to explore trends, categories, and patterns that power smarter financial decisions.
          </p>
          <button
            className="px-6 py-3 rounded-lg font-medium ripple-hover gradient-border bg-white/10 hover:bg-white/20 transition-colors"
          >
            Explore Insights
          </button>
        </motion.div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="glass rounded-2xl p-6 gradient-border">
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
            <rect x="10" y="20" width="200" height="80" rx="12" stroke="#FFB703" strokeWidth="2" fill="rgba(255,255,255,0.05)" />
            <path d="M20 80 C 60 40, 100 100, 140 60 C 160 44, 180 48, 200 36" stroke="#6D9773" strokeWidth="3" fill="none" />
            <circle cx="60" cy="58" r="4" fill="#6D9773" />
            <circle cx="140" cy="62" r="4" fill="#6D9773" />
            <circle cx="200" cy="36" r="4" fill="#6D9773" />
            <g>
              <rect x="28" y="30" width="28" height="8" rx="4" fill="#BB8A52" />
              <rect x="60" y="30" width="36" height="8" rx="4" fill="#FFB703" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection


