import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const AnimatedTitle = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="home"
          initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
          transition={{ duration: 0.3 }}
          className="flex min-h-screen items-center justify-center flex-col"
        >
          <motion.h1
            layout="position"
            className="text-4xl font-bold"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Hello, Astro!
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Welcome to Astro! 🚀
          </motion.p>
          <Button onClick={() => setIsVisible(!isVisible)}>Click me!</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedTitle;