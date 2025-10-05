import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, CreditCard, BarChart3, Activity as ActivityIcon, Home } from 'lucide-react'

const Navbar = ({ activeSection, setActiveSection, onLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'activity', label: 'Activity', icon: ActivityIcon },
  ]

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 header-cream border-b border-black/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <CreditCard className="w-8 h-8 text-brand-amber" />
            <span className="text-xl font-bold" style={{ color: '#0C3B2E' }}>GrowFi</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-2 px-2 py-1 relative">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-black/5 text-black dark:bg-white/10 dark:text-white'
                      : 'text-black hover:text-black hover:bg-black/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
            <span aria-hidden className="nav-indicator hidden dark:block" />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsDark(!isDark)
              document.documentElement.classList.toggle('dark')
            }}
            className="ml-4 px-3 py-2 rounded-lg text-sm bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            {isDark ? 'Light' : 'Dark'}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onLogin}
            className="ml-3 btn-primary text-sm"
          >
            Login
          </motion.button>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-black/5 text-black dark:bg-purple-500/20 dark:text-purple-300'
                      : 'text-slate-700 hover:text-black hover:bg-black/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar