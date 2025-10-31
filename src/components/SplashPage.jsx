import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import companyLogo from '../assets/logo2.jpg';

const SplashPage = ({ onAnimationComplete }) => {
  const [showLogo, setShowLogo] = useState(true);
  const [startOpening, setStartOpening] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    const openingTimer = setTimeout(() => {
      setStartOpening(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 4500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(openingTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-blue">
      <AnimatePresence>
        {showLogo && (
          <motion.div
            key="splash-logo"
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }}
          >
            <img src={companyLogo} alt="StanDav Group Logo" className="w-48 h-auto rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 bg-brand-blue z-10"
        initial={{ x: '0%' }}
        animate={startOpening ? { x: '-100%' } : {}}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 bg-brand-blue z-10"
        initial={{ x: '0%' }}
        animate={startOpening ? { x: '100%' } : {}}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </div>
  );
};

SplashPage.propTypes = {
  onAnimationComplete: PropTypes.func.isRequired,
};

export default SplashPage;
