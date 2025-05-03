import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
interface HeroProps {
  darkMode: boolean;
}
export function Hero({
  darkMode
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const blur = useMotionTemplate`blur(${blurValue}px)`;
  return <motion.div ref={containerRef} style={{
    scale,
    opacity,
    y
  }} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="home">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-300/20 to-teal-300/20 blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-teal-300/20 to-blue-300/20 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left content - Text */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="md:col-span-6 lg:col-span-5 text-center md:text-left">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="inline-flex items-center space-x-2 mb-6">
              <span className={`h-px w-8 ${darkMode ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${darkMode ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-100 text-emerald-800'}`}>
                Coming Soon to Kickstarter
              </span>
            </motion.div>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Meet{' '}
              <span className="inline-block">
                <span className="text-emerald-500">VerdeVivo</span>
                <motion.span initial={{
                width: 0
              }} animate={{
                width: '100%'
              }} transition={{
                delay: 1,
                duration: 0.8,
                ease: 'easeInOut'
              }} className="block h-1 bg-emerald-500 mt-0" />
              </span>
              ,
              <br />
              Your Plant's Best Friend
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className={`text-lg md:text-xl mb-8 max-w-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The intelligent plant pot that automatically cares for your indoor
              plants. Monitor and control everything from your smartphone.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.2)'
            }} whileTap={{
              scale: 0.95
            }} href="#newsletter" className="px-8 py-4 rounded-full text-white font-medium shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                Get Notified
              </motion.a>
              <motion.a whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} href="#features" className={`px-8 py-4 rounded-full font-medium border-2 transition-all duration-300 ${darkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50'}`}>
                Learn More
              </motion.a>
            </motion.div>
            {/* Stats */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="mt-12 grid grid-cols-3 gap-4">
              <div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  98%
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Plant Survival Rate
                </div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  30+
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Plant Species
                </div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  14 Days
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Autonomous Care
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Right content - Image */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1,
          delay: 0.4
        }} style={{
          filter: blur
        }} className="md:col-span-6 lg:col-span-7 relative z-10">
            <div className="relative h-full flex items-center justify-center">
              {/* Background blob */}
              <motion.div animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0, -1, 0]
            }} transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'easeInOut'
            }} className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${darkMode ? 'bg-emerald-700' : 'bg-emerald-300'}`} />
              <motion.div style={{
              rotate
            }} className="relative z-10 w-full max-w-2xl mx-auto">
                {/* Main product image with floating animation */}
                <motion.div animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0]
              }} transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 10,
                ease: 'easeInOut'
              }} className="relative z-20">
                  <div className={`p-4 rounded-3xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-xl border border-gray-700' : 'bg-white/50 backdrop-blur-xl border border-emerald-100'} shadow-2xl`}>
                    <img src="https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?auto=compress&cs=tinysrgb&w=800" alt="VerdeVivo Smart Plant Pot" className="w-full h-auto rounded-2xl object-cover" id="hero-plant-image" />
                  </div>
                </motion.div>
                {/* Floating app icon */}
                <motion.div initial={{
                opacity: 0,
                scale: 0,
                y: 50
              }} animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }} transition={{
                delay: 0.8,
                duration: 0.5
              }} className="absolute -bottom-4 -right-4 z-30">
                  <motion.div animate={{
                  scale: [1, 1.05, 1]
                }} transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 3,
                  ease: 'easeInOut'
                }}>
                    <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-emerald-100'} shadow-lg`}>
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold">
                        App
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                {/* Floating feature badges */}
                <FeatureBadge darkMode={darkMode} position="-top-6 -left-6" delay={1} icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v6"></path>
                      <circle cx="12" cy="14" r="8"></circle>
                    </svg>} text="Smart Sensors" />
                <FeatureBadge darkMode={darkMode} position="-bottom-6 left-1/4" delay={1.2} icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22V8"></path>
                      <path d="m5 12 7-4 7 4"></path>
                      <path d="M5 16l7-4 7 4"></path>
                    </svg>} text="Water System" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>;
}
interface FeatureBadgeProps {
  darkMode: boolean;
  position: string;
  delay: number;
  icon: React.ReactNode;
  text: string;
}
function FeatureBadge({
  darkMode,
  position,
  delay,
  icon,
  text
}: FeatureBadgeProps) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0,
    y: 20
  }} animate={{
    opacity: 1,
    scale: 1,
    y: 0
  }} transition={{
    delay,
    duration: 0.5
  }} className={`absolute ${position} z-30`}>
      <motion.div animate={{
      y: [0, -5, 0]
    }} transition={{
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 4,
      ease: 'easeInOut',
      delay: Math.random()
    }}>
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-emerald-100'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
            {icon}
          </div>
          <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {text}
          </span>
        </div>
      </motion.div>
    </motion.div>;
}