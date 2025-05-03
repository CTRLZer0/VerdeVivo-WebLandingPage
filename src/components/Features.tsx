import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { DropletIcon, SunIcon, BellIcon, SmartphoneIcon, BarChart2Icon, CloudIcon } from 'lucide-react';
export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2
  });
  const features = [{
    icon: <DropletIcon size={24} />,
    title: 'Smart Watering',
    description: 'Automatically waters your plants based on their specific needs and moisture levels.',
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-100',
    darkBg: 'bg-blue-900/30',
    lightText: 'text-blue-600',
    darkText: 'text-blue-400'
  }, {
    icon: <SunIcon size={24} />,
    title: 'Light Monitoring',
    description: 'Tracks light exposure and suggests optimal placement for your plants.',
    color: 'from-amber-500 to-amber-600',
    lightBg: 'bg-amber-100',
    darkBg: 'bg-amber-900/30',
    lightText: 'text-amber-600',
    darkText: 'text-amber-400'
  }, {
    icon: <BellIcon size={24} />,
    title: 'Timely Alerts',
    description: 'Receive notifications when your plant needs attention or care.',
    color: 'from-rose-500 to-rose-600',
    lightBg: 'bg-rose-100',
    darkBg: 'bg-rose-900/30',
    lightText: 'text-rose-600',
    darkText: 'text-rose-400'
  }, {
    icon: <SmartphoneIcon size={24} />,
    title: 'Mobile Control',
    description: 'Manage everything from our intuitive mobile app, available for iOS and Android.',
    color: 'from-violet-500 to-violet-600',
    lightBg: 'bg-violet-100',
    darkBg: 'bg-violet-900/30',
    lightText: 'text-violet-600',
    darkText: 'text-violet-400'
  }, {
    icon: <BarChart2Icon size={24} />,
    title: 'Growth Analytics',
    description: "Track your plant's growth and health with detailed analytics and insights.",
    color: 'from-emerald-500 to-emerald-600',
    lightBg: 'bg-emerald-100',
    darkBg: 'bg-emerald-900/30',
    lightText: 'text-emerald-600',
    darkText: 'text-emerald-400'
  }, {
    icon: <CloudIcon size={24} />,
    title: 'Cloud Integration',
    description: 'Access your plant data from anywhere with secure cloud storage.',
    color: 'from-cyan-500 to-cyan-600',
    lightBg: 'bg-cyan-100',
    darkBg: 'bg-cyan-900/30',
    lightText: 'text-cyan-600',
    darkText: 'text-cyan-400'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return <section ref={ref} className="py-24 relative overflow-hidden" id="features">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-400 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <motion.div initial={{
            scale: 0
          }} animate={isInView ? {
            scale: 1
          } : {
            scale: 0
          }} transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: 0.2
          }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m7 10 2 2 6-6"></path>
                <path d="m7 16 2 2 6-6"></path>
              </svg>
            </motion.div>
          </div>
          <motion.h2 initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {
          opacity: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Intelligent Features for Effortless Plant Care
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} animate={isInView ? {
          opacity: 1
        } : {
          opacity: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            VerdeVivo combines cutting-edge technology with beautiful design to
            make plant care simple and enjoyable.
          </motion.p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => <motion.div key={index} variants={itemVariants} whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transform transition-all duration-300 -m-1`}></div>
              <div className="relative h-full backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${feature.lightBg} dark:${feature.darkBg} flex items-center justify-center ${feature.lightText} dark:${feature.darkText} mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {feature.description}
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a href="#" className={`inline-flex items-center ${feature.lightText} dark:${feature.darkText} font-medium text-sm`}>
                    Learn more
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>)}
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="mt-20 text-center">
          <motion.a whileHover={{
          scale: 1.05,
          boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.2)'
        }} whileTap={{
          scale: 0.95
        }} href="#newsletter" className="inline-block px-8 py-4 rounded-full text-white font-medium shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
            Join the Waitlist
          </motion.a>
        </motion.div>
      </div>
    </section>;
}