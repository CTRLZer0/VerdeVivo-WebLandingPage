import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HelpCircleIcon } from 'lucide-react'; // Import icon

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Example FAQ data - replace with your actual FAQs
  const faqs = [
    {
      question: 'What is the main feature of VerdeVivo?',
      answer: 'VerdeVivo automatically waters your plants based on their specific needs, monitors light exposure, and provides growth analytics, all accessible via our mobile app.',
    },
    {
      question: 'How do I set up the VerdeVivo device?',
      answer: 'Setup is simple! Just plug in the device, download the VerdeVivo app (iOS/Android), and follow the in-app pairing instructions. It usually takes less than 5 minutes.',
    },
    {
      question: 'Is my plant data secure?',
      answer: 'Yes, we prioritize your data security. All plant data is stored securely in the cloud using industry-standard encryption and privacy practices.',
    },
    {
      question: 'What types of plants does VerdeVivo support?',
      answer: 'VerdeVivo supports a wide variety of common houseplants. Our app database contains profiles for hundreds of species, and you can also create custom watering schedules.',
    },
    {
      question: 'Is there a subscription required?',
      answer: 'The core features (smart watering, monitoring) are included with the device purchase. We may offer optional premium features through a subscription in the future.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team via email at support@verdevivo.example or through the Help section within the VerdeVivo mobile app.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="faq"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
           <div className="flex justify-center mb-4">
             <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-lg"
              >
                <HelpCircleIcon size={32} />
             </motion.div>
           </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Have questions? We've got answers. If you need more help, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-2xl bg-white dark:bg-gray-800/70 shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700/50"
            >
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-45">
                    <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </summary>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                 >
                   <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700/50">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                </motion.div>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 