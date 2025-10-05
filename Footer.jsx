import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="mt-16 relative">
      <svg className="absolute -top-10 left-0 right-0 w-full h-10" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" fill="url(#footerGrad)" opacity="0.25" />
        <defs>
          <linearGradient id="footerGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-6 gradient-border relative overflow-hidden">
          <svg className="absolute -right-6 -bottom-6 w-28 h-28" viewBox="0 0 200 200" aria-hidden>
            <defs>
              <linearGradient id="corner" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path d="M0 200 L200 200 L200 0 C150 40, 100 80, 0 120 Z" fill="url(#corner)" opacity="0.15" />
          </svg>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} GrowFi. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


