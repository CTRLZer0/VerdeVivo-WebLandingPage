import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SendIcon, CheckIcon } from 'lucide-react';
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with Mailchimp or other service
    console.log('Submitted email:', email);
    setSubmitted(true);
    setEmail('');
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return <section ref={ref} className="py-24 relative overflow-hidden" id="newsletter">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 z-0"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 0.8
      }} className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
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
                delay: 0.2
              }}>
                  <div className="inline-flex items-center space-x-2 mb-6">
                    <span className="h-px w-8 bg-emerald-500 dark:bg-emerald-400"></span>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      JOIN THE REVOLUTION
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Be the First to Experience{' '}
                    <span className="text-emerald-500">VerdeVivo</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Join our waitlist to be notified when our Kickstarter
                    campaign launches and get exclusive early-bird discounts up
                    to 40% off.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" required className="w-full px-6 py-4 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm" />
                      <motion.button whileHover={{
                      scale: 1.03
                    }} whileTap={{
                      scale: 0.97
                    }} type="submit" disabled={submitted} className={`absolute right-1 top-1 bottom-1 px-6 rounded-full text-white font-medium flex items-center justify-center transition-all duration-300 ${submitted ? 'bg-emerald-600' : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700'}`}>
                        {submitted ? <span className="flex items-center">
                            <CheckIcon size={18} className="mr-1" />
                            Subscribed!
                          </span> : <span className="flex items-center">
                            Subscribe
                            <SendIcon size={18} className="ml-2" />
                          </span>}
                      </motion.button>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <p className="text-gray-500 dark:text-gray-400">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="block w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-gray-600 dark:text-gray-300">
                          256 people joined
                        </span>
                      </div>
                    </div>
                  </form>
                </motion.div>
              </div>
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: 50
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} className="relative md:col-span-2 h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 z-0"></div>
                <motion.div initial={{
                scale: 1.1,
                rotate: -3
              }} animate={isInView ? {
                scale: 1,
                rotate: 0
              } : {
                scale: 1.1,
                rotate: -3
              }} transition={{
                duration: 0.8,
                delay: 0.5
              }} className="absolute inset-0 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Healthy plants with VerdeVivo" className="w-full h-full object-cover" />
                </motion.div>
                {/* Overlay with testimonial */}
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
                duration: 0.5,
                delay: 0.8
              }} className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/20">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                        JD
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                        "My plants have never been healthier since I started
                        using VerdeVivo. It's like having a plant expert at
                        home!"
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Jane Doe, Early Tester
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
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
        delay: 0.6
      }} className="mt-12 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Expected Kickstarter Launch:
            </p>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xl px-6 py-2 rounded-lg">
              Summer 2023
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}