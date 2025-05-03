import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, TwitterIcon, ArrowRightIcon } from 'lucide-react';
export function Footer() {
  return <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-50 to-transparent dark:from-gray-900 dark:to-transparent z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="flex items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                  V
                </div>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  VerdeVivo
                </span>
              </div>
            </motion.div>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-gray-600 dark:text-gray-300 mb-6">
              The intelligent plant pot that makes caring for your plants
              effortless and enjoyable. Bringing technology and nature together.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="flex space-x-4">
              <motion.a whileHover={{
              y: -3
            }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                <InstagramIcon size={18} />
              </motion.a>
              <motion.a whileHover={{
              y: -3
            }} href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                <FacebookIcon size={18} />
              </motion.a>
              <motion.a whileHover={{
              y: -3
            }} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white shadow-md">
                <TwitterIcon size={18} />
              </motion.a>
            </motion.div>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-2">
            <motion.h3 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Quick Links
            </motion.h3>
            <motion.ul initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="space-y-3">
              {['Home', 'Features', 'How It Works', 'FAQ'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    <ArrowRightIcon size={14} className="mr-2 text-emerald-500" />
                    {item}
                  </a>
                </li>)}
            </motion.ul>
          </div>
          {/* Contact */}
          <div className="md:col-span-3">
            <motion.h3 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Contact
            </motion.h3>
            <motion.ul initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  info@verdevivo.com
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </span>
              </li>
            </motion.ul>
          </div>
          {/* Newsletter */}
          <div className="md:col-span-3">
            <motion.h3 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Subscribe to Our Newsletter
            </motion.h3>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
              <div className="flex">
                <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 rounded-l-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none" />
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-r-lg hover:bg-emerald-600 transition-colors">
                  <ArrowRightIcon size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Get the latest updates and offers.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Bottom section */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} VerdeVivo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-emerald-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-emerald-500">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 text-sm hover:text-emerald-500">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>;
}