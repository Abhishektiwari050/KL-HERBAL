import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // Higher number = faster movement (more parallax)
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = "", speed = 0.15 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to vertical offset
  // Moving from -speed to +speed percentage
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div 
        style={{ y, scale }}
        className="w-full h-[120%] -mt-[10%]" // container needs to be larger than viewport
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;