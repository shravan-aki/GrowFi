import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar.jsx'
import Dashboard from './Dashboard.jsx'
import Analytics from './Analytics.jsx'
import Activity from './Activity.jsx'
import Loader from './Loader.jsx'
import BackgroundFX from './BackgroundFX.jsx'
import ParallaxSection from './ParallaxSection.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loaderMessage, setLoaderMessage] = useState('Loading your financial dashboard...')
  const [activeSection, setActiveSection] = useState('dashboard')
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const simulateLogin = () => {
    setLoaderMessage('Logging you in...')
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setLoaderMessage('Loading your financial dashboard...')
    }, 1500)
  }

  const openLogin = () => setIsLoginOpen(true)
  const closeLogin = () => setIsLoginOpen(false)
  const handleLoginSubmit = () => {
    setIsLoginOpen(false)
    simulateLogin()
  }

  return (
    <div className="min-h-screen bg-animated">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" message={loaderMessage} />
        ) : (
          <motion.div key="main" variants={containerVariants} initial="hidden" animate="visible" className="relative">
            <BackgroundFX />
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} onLogin={openLogin} />
            <main className="relative z-10 pt-24 md:pt-28">
              {activeSection === 'dashboard' && (
                <motion.div variants={itemVariants}><Dashboard /></motion.div>
              )}
              {activeSection === 'analytics' && (
                <motion.div variants={itemVariants}><Analytics /></motion.div>
              )}
              {activeSection === 'activity' && (
                <motion.div variants={itemVariants}><Activity /></motion.div>
              )}
              <motion.div variants={itemVariants}><ParallaxSection /></motion.div>
              {isLoginOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                  <Login onSubmit={handleLoginSubmit} onCancel={closeLogin} />
                </motion.div>
              )}
              <motion.div variants={itemVariants}><Footer /></motion.div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App