import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, DollarSign, TrendingUp, Calendar, Bell, Settings } from 'lucide-react'

const Dashboard = () => {
  const mockBills = [
    { id: 1, name: 'Netflix Subscription', amount: 15.99, dueDate: '2024-01-15', category: 'Entertainment', status: 'paid', type: 'subscription' },
    { id: 2, name: 'Electricity Bill', amount: 89.5, dueDate: '2024-01-20', category: 'Utilities', status: 'pending', type: 'utility' },
    { id: 3, name: 'Credit Card Payment', amount: 450, dueDate: '2024-01-25', category: 'Credit', status: 'pending', type: 'credit' },
    { id: 4, name: 'Spotify Premium', amount: 9.99, dueDate: '2024-01-10', category: 'Entertainment', status: 'paid', type: 'subscription' },
    { id: 5, name: 'Internet Bill', amount: 65, dueDate: '2024-01-18', category: 'Utilities', status: 'pending', type: 'utility' },
    { id: 6, name: 'Gym Membership', amount: 29.99, dueDate: '2024-01-12', category: 'Health', status: 'paid', type: 'subscription' }
  ]

  const stats = [
    { title: 'Total Bills', value: '$659.47', change: '+12%', icon: CreditCard, color: 'text-purple-400' },
    { title: 'Monthly Income', value: '$4,500', change: '+5%', icon: DollarSign, color: 'text-green-400' },
    { title: 'Savings Rate', value: '23%', change: '+3%', icon: TrendingUp, color: 'text-cyan-400' },
    { title: 'Upcoming Bills', value: '3', change: 'This week', icon: Calendar, color: 'text-orange-400' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'text-green-400 bg-green-400/20'
      case 'pending': return 'text-yellow-400 bg-yellow-400/20'
      case 'overdue': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Entertainment': return '🎬'
      case 'Utilities': return '⚡'
      case 'Credit': return '💳'
      case 'Health': return '💪'
      default: return '📄'
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="fixed inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-10">
          <source src="https://cdn.coverr.co/videos/coverr-green-ink-blob-1083/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: '#283618CC' }} />
      </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12 section-container">
          <h1 className="text-5xl font-bold gradient-text mb-4">Financial Dashboard</h1>
          <p className="text-xl text-gray-300">Manage your bills and track your spending</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
            <motion.div key={stat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.03, y: -4 }} className="card-genz squircle-2 p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-brand-amber" />
                  <span className="text-sm text-green-400">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-brand-sage mb-3">{stat.title}</p>
                <svg width="100%" height="36" viewBox="0 0 200 36" fill="none" className="opacity-70">
                  <defs>
                    <linearGradient id={`spark-${index}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <path d="M0 28 C 20 10, 40 32, 60 18 C 80 10, 100 24, 120 14 C 140 8, 160 20, 200 12" stroke={`url(#spark-${index})`} strokeWidth="3" fill="none" />
                </svg>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBills.map((bill, index) => (
            <motion.div key={bill.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} whileHover={{ scale: 1.02, y: -4 }} className="card-genz squircle-2 p-6 hover-lift transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{getCategoryIcon(bill.category)}</span>
                  <div>
                    <h3 className="font-semibold text-white">{bill.name}</h3>
                    <p className="text-sm text-gray-400">{bill.category}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(bill.status)}`}>
                  {bill.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Amount</span>
                  <span className="text-xl font-bold text-white">${bill.amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Due Date</span>
                  <span className="text-white">{new Date(bill.dueDate).toLocaleDateString()}</span>
                </div>
              </div>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full mt-4 btn-success font-medium">
                {bill.status === 'paid' ? 'View Details' : 'Pay Now'}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className="mt-12 glass rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-all duration-300">
              <Bell className="w-4 h-4" />
              <span>Set Reminder</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-all duration-300">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard


