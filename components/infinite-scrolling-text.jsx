"use-client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


const InfiniteScrollingText = ({ items }) => {
  const scrollerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const scroller = scrollerRef.current;
    const animateScroll = async () => {
      await controls.start({
        x: -scroller.offsetWidth, // Translate the width of the container
        transition: {
          duration: 60, // Adjust speed here (higher duration for slower speed)
          ease: 'linear',
          repeat: Infinity,
        },
      });
    };

    animateScroll();

    return () => {
      controls.stop();
    };
  }, [controls]);

  return (
    <div className="overflow-hidden">
      <div className="relative z-20 w-[100] overflow-hidden">
        <motion.div
          ref={scrollerRef}
          className="inline-flex whitespace-nowrap"
          animate={{
            x: '-50%', // Translate halfway to start the animation in the middle
          }}
          initial={{
            x: '0%', // Initial position, can adjust if needed
          }}
          transition={{
            duration: 40, // Animation duration, adjust as per your configuration
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{
            animationName: 'scroll', // Apply Tailwind CSS animation
          }}
        >
          {items.map((item, index) => (
            <span key={index} className="text-white px-4">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollingText;
