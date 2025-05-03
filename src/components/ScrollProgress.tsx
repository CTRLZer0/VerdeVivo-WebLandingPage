import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
interface ScrollProgressProps {
  darkMode: boolean;
}
export function ScrollProgress({
  darkMode
}: ScrollProgressProps) {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 origin-left z-50" style={{
      scaleX
    }} />
      <AnimatedScrollTopButton isVisible={showScrollTop} onClick={scrollToTop} darkMode={darkMode} />
    </>;
}
interface AnimatedScrollTopButtonProps {
  isVisible: boolean;
  onClick: () => void;
  darkMode: boolean;
}
function AnimatedScrollTopButton({
  isVisible,
  onClick,
  darkMode
}: AnimatedScrollTopButtonProps) {
  return <motion.button initial={{
    opacity: 0,
    scale: 0.8
  }} animate={{
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.8,
    y: isVisible ? 0 : 20
  }} whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.95
  }} onClick={onClick} className={`fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 ${darkMode ? 'bg-gray-800 text-emerald-400 border border-gray-700' : 'bg-white text-emerald-600 border border-emerald-100'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </motion.button>;
}