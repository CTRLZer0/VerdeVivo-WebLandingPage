import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Divider } from './components/Divider';
import { ScrollProgress } from './components/ScrollProgress';
export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Check user preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);
  return <AnimatePresence>
      {mounted && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className={`w-full min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-emerald-50 to-teal-50/30'}`}>
          <BackgroundAnimation darkMode={darkMode} />
          <ScrollProgress darkMode={darkMode} />
          <div className="relative z-10">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="overflow-hidden">
              <Hero darkMode={darkMode} />
              <Divider darkMode={darkMode} />
              <Features />
              <Divider darkMode={darkMode} />
              <HowItWorks />
              <Divider darkMode={darkMode} />
              <FAQ />
              <Divider darkMode={darkMode} flip />
              <Newsletter />
              <Footer />
            </main>
          </div>
        </motion.div>}
    </AnimatePresence>;
}