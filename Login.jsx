import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Login = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="card-genz squircle-2 p-6 hover-lift">
          <h1 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h1>
          <p className="text-gray-300 mb-6">Log in to continue to your dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full squircle bg-white/5 border border-white/10 text-white px-3 py-2 outline-none focus:border-white/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full squircle bg-white/5 border border-white/10 text-white px-3 py-2 outline-none focus:border-white/30"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button type="button" onClick={onCancel} className="btn-ghost">Cancel</button>
              <button type="submit" className="btn-primary">Login</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Login


