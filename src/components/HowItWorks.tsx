// import React, { useRef } from 'react'; // React import removed as it's implicitly available
import { useRef } from 'react'; // Only import useRef
import { motion, useInView } from 'framer-motion';
// Removed CheckCircleIcon import as it's not used in the final version

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const steps = [
    {
      title: 'Sign Up',
      description: 'Create your account in seconds and start exploring the platform.',
    },
    {
      title: 'Connect Your Device',
      description: 'Easily pair your VerdeVivo device with our mobile app via Bluetooth.',
    },
    {
      title: 'Monitor & Control',
      description: 'Track your plant\'s health and manage settings directly from the app.',
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="how-it-works"
      className="py-16 sm:py-24 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-rose-300 rounded-full filter blur-3xl opacity-15 dark:opacity-10"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-violet-300 rounded-full filter blur-3xl opacity-15 dark:opacity-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Getting Started is Simple
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Follow these three easy steps to bring smart care to your plants with VerdeVivo.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group text-center"
            >
               <div className="absolute -inset-x-0 top-0 h-1/2 bg-gradient-to-b from-emerald-50/50 dark:from-emerald-900/10 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               <div className="relative flex flex-col items-center p-8 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-300 h-full">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 + index * 0.1 }}
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md"
                  >
                   <span className="text-2xl font-bold">{index + 1}</span>
                 </motion.div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                   {step.title}
                 </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                   {step.description}
                 </p>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 