import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, CreditCard, AlertTriangle, CheckCircle, XCircle, Filter } from 'lucide-react'

const Activity = () => {
  const [filter, setFilter] = useState('all')

  // Mock activity data
  const activities = [
    {
      id: 1,
      type: 'payment',
      title: 'Netflix Subscription Paid',
      amount: 15.99,
      date: '2024-01-15T10:30:00Z',
      status: 'completed',
      category: 'Entertainment'
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Electricity Bill Due Soon',
      amount: 89.50,
      date: '2024-01-14T09:15:00Z',
      status: 'pending',
      category: 'Utilities'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Credit Card Payment',
      amount: 450.00,
      date: '2024-01-13T14:20:00Z',
      status: 'completed',
      category: 'Credit'
    },
    {
      id: 4,
      type: 'overdue',
      title: 'Internet Bill Overdue',
      amount: 65.00,
      date: '2024-01-12T16:45:00Z',
      status: 'overdue',
      category: 'Utilities'
    },
    {
      id: 5,
      type: 'payment',
      title: 'Spotify Premium',
      amount: 9.99,
      date: '2024-01-11T11:00:00Z',
      status: 'completed',
      category: 'Entertainment'
    },
    {
      id: 6,
      type: 'reminder',
      title: 'Gym Membership Renewal',
      amount: 29.99,
      date: '2024-01-10T08:30:00Z',
      status: 'pending',
      category: 'Health'
    }
  ]

  const getActivityIcon = (type, status) => {
    switch (type) {
      case 'payment':
        return status === 'completed' ? 
          <CheckCircle className="w-5 h-5 text-green-400" /> : 
          <CreditCard className="w-5 h-5 text-blue-400" />
      case 'reminder':
        return <Clock className="w-5 h-5 text-yellow-400" />
      case 'overdue':
        return <AlertTriangle className="w-5 h-5 text-red-400" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20'
      case 'pending': return 'text-yellow-400 bg-yellow-400/20'
      case 'overdue': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const filteredActivities = filter === 'all' ? 
    activities : 
    activities.filter(activity => activity.type === filter)

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 section-container"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">Activity Feed</h1>
          <p className="text-xl text-gray-300">Recent payments, reminders, and notifications</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-8 justify-center"
        >
          {[
            { id: 'all', label: 'All Activity', icon: Filter },
            { id: 'payment', label: 'Payments', icon: CreditCard },
            { id: 'reminder', label: 'Reminders', icon: Clock },
            { id: 'overdue', label: 'Overdue', icon: AlertTriangle },
          ].map((filterOption) => {
            const Icon = filterOption.icon
            return (
              <motion.button
                key={filterOption.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === filterOption.id
                    ? 'bg-purple-500/20 text-purple-300 neon-glow'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{filterOption.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Activity List */}
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.01, x: 8 }}
              className="card-genz squircle-2 p-6 hover-lift transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type, activity.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white truncate">
                      {activity.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-2">
                      {activity.category}
                      <svg width="60" height="14" viewBox="0 0 60 14" fill="none" className="opacity-70">
                        <defs>
                          <linearGradient id={`mini-${index}`} x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                        <path d="M0 10 C 10 2, 20 12, 30 6 C 40 2, 50 8, 60 4" stroke={`url(#mini-${index})`} strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                    <span>{new Date(activity.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${activity.amount}</span>
                {activity.status === 'pending' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    className="btn-primary text-sm font-medium"
                      >
                        Take Action
                      </motion.button>
                    )}
                {activity.status === 'overdue' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    className="btn-danger text-sm font-medium"
                      >
                        Pay Overdue
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Activity