import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

const Analytics = () => {
  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', income: 4500, expenses: 3200, savings: 1300 },
    { month: 'Feb', income: 4500, expenses: 2800, savings: 1700 },
    { month: 'Mar', income: 4500, expenses: 3500, savings: 1000 },
    { month: 'Apr', income: 4500, expenses: 3100, savings: 1400 },
    { month: 'May', income: 4500, expenses: 2900, savings: 1600 },
    { month: 'Jun', income: 4500, expenses: 3300, savings: 1200 },
  ]

  const categoryData = [
    { name: 'Entertainment', value: 25, color: '#FFB703' }, // amber
    { name: 'Utilities', value: 30, color: '#219EBC' },      // blue
    { name: 'Food', value: 20, color: '#8E44AD' },           // purple
    { name: 'Transportation', value: 15, color: '#E76F51' }, // orange/red
    { name: 'Health', value: 10, color: '#2A9D8F' },         // teal
  ]

  const spendingTrend = [
    { week: 'Week 1', amount: 800 },
    { week: 'Week 2', amount: 650 },
    { week: 'Week 3', amount: 920 },
    { week: 'Week 4', amount: 730 },
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-3 border border-white/20">
          <p className="text-white">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.dataKey}: ${entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const [hoverCategory, setHoverCategory] = React.useState(null)

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 section-container"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">Analytics</h1>
          <p className="text-xl text-gray-300 mb-8">Track your spending patterns and trends</p>
          <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden gradient-border glass p-6">
            <svg width="100%" height="180" viewBox="0 0 640 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#219EBC" />
                  <stop offset="50%" stopColor="#8E44AD" />
                  <stop offset="100%" stopColor="#FFB703" />
                </linearGradient>
              </defs>
              <rect x="8" y="8" width="624" height="164" rx="14" stroke="url(#g1)" strokeWidth="2" fill="rgba(255,255,255,0.04)" />
              <path d="M20 130 C 120 60, 220 140, 320 90 C 380 60, 460 100, 620 70" stroke="#6D9773" strokeWidth="4" fill="none" />
              <g>
                <rect x="30" y="24" width="80" height="10" rx="5" fill="#BB8A52" />
                <rect x="116" y="24" width="120" height="10" rx="5" fill="#FFB703" />
                <rect x="240" y="24" width="68" height="10" rx="5" fill="#219EBC" />
              </g>
              <circle cx="120" cy="96" r="5" fill="#6D9773" />
              <circle cx="320" cy="90" r="5" fill="#6D9773" />
              <circle cx="620" cy="70" r="5" fill="#6D9773" />
            </svg>
          </div>
        </motion.div>

        {/* Monthly Overview Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="squircle-2 p-6 mb-8 card-genz-ghost hover-lift"
        >
          <h3 className="text-2xl font-semibold text-[#0C3B2E] mb-6">Monthly Overview</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#4B5563" />
              <YAxis stroke="#4B5563" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="income" fill="#FFB703" name="Income" />
              <Bar dataKey="expenses" fill="#219EBC" name="Expenses" />
              <Bar dataKey="savings" fill="#8E44AD" name="Savings" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Spending Categories Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="squircle-2 p-6 card-genz-ghost hover-lift"
          >
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-bl-2xl" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(168,85,247,0.25))' }} />
            <h3 className="text-2xl font-semibold text-[#0C3B2E] mb-6">Spending by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      onMouseEnter={() => setHoverCategory(entry.name)}
                      onMouseLeave={() => setHoverCategory(null)}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Spending Trend Line Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="squircle-2 p-6 card-genz-ghost hover-lift"
          >
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-bl-2xl" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(168,85,247,0.25))' }} />
            <h3 className="text-2xl font-semibold text-[#0C3B2E] mb-6">Weekly Spending Trend {hoverCategory && `• ${hoverCategory}`}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={spendingTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="week" stroke="#4B5563" />
                <YAxis stroke="#4B5563" />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="amount" stroke="#2E7D32" strokeWidth={3} dot={{ fill: '#2E7D32', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card-genz squircle-2 p-6 text-center hover-lift">
            <h4 className="text-lg font-semibold text-white mb-2">Average Monthly Spending</h4>
            <p className="text-3xl font-bold text-purple-400">$3,133</p>
            <p className="text-sm text-gray-400 mt-1">↓ 5% from last month</p>
          </div>
          <div className="card-genz squircle-2 p-6 text-center hover-lift">
            <h4 className="text-lg font-semibold text-white mb-2">Savings Rate</h4>
            <p className="text-3xl font-bold text-cyan-400">23%</p>
            <p className="text-sm text-gray-400 mt-1">↑ 3% from last month</p>
          </div>
          <div className="card-genz squircle-2 p-6 text-center hover-lift">
            <h4 className="text-lg font-semibold text-white mb-2">Top Category</h4>
            <p className="text-3xl font-bold text-green-400">Utilities</p>
            <p className="text-sm text-gray-400 mt-1">30% of total spending</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Analytics