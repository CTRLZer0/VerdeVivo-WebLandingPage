import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}
export function Header({
  darkMode,
  setDarkMode
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Features',
    href: '#features'
  }, {
    name: 'How It Works',
    href: '#how-it-works'
  }, {
    name: 'FAQ',
    href: '#faq'
  }];
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      type: 'spring',
      stiffness: 100
    }} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className={`backdrop-blur-md ${darkMode ? scrolled ? 'bg-gray-900/90' : 'bg-gray-900/70' : scrolled ? 'bg-white/90' : 'bg-white/70'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <motion.div whileHover={{
                scale: 1.05
              }} className="flex-shrink-0 flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                    V
                  </div>
                  <span className={`text-2xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    VerdeVivo
                  </span>
                </motion.div>
              </div>
              <nav className="hidden md:flex items-center space-x-1">
                {menuItems.map(item => <motion.a key={item.name} href={item.href} whileHover={{
                y: -2
              }} className={`px-4 py-2 text-sm font-medium rounded-lg ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'} transition-all duration-200`}>
                    {item.name}
                  </motion.a>)}
                <div className="ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
                  <motion.button whileTap={{
                  scale: 0.9
                }} onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'} transition-colors duration-200`}>
                    {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
                  </motion.button>
                </div>
                <motion.a whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.97
              }} href="#newsletter" className="ml-4 px-5 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-sm">
                  Get Started
                </motion.a>
              </nav>
              <div className="md:hidden flex items-center">
                <motion.button whileTap={{
                scale: 0.9
              }} onClick={() => setDarkMode(!darkMode)} className={`p-2 mr-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-emerald-100 text-emerald-700'}`}>
                  {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
                </motion.button>
                <motion.button whileTap={{
                scale: 0.9
              }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'}`}>
                  {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0,
        y: -10
      }} animate={{
        opacity: 1,
        height: 'auto',
        y: 0
      }} exit={{
        opacity: 0,
        height: 0,
        y: -10
      }} transition={{
        duration: 0.3
      }} className={`fixed top-20 left-0 right-0 z-30 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} shadow-lg`}>
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map(item => <motion.a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} transition={{
            duration: 0.2
          }} className={`block px-4 py-3 rounded-lg text-base font-medium ${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'} transition-colors duration-200`}>
                  {item.name}
                </motion.a>)}
              <motion.a initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} transition={{
            duration: 0.2,
            delay: 0.2
          }} href="#newsletter" onClick={() => setMobileMenuOpen(false)} className="block mt-4 px-4 py-3 rounded-lg text-center text-white font-medium bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-sm">
                Get Started
              </motion.a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}