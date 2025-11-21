import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-colors duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-dark text-white border border-transparent hover:bg-brand-primary shadow-lg",
    outline: "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white",
    ghost: "bg-transparent text-brand-dark hover:bg-brand-light/50"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs tracking-widest uppercase",
    md: "px-8 py-4 text-sm tracking-widest uppercase",
    lg: "px-10 py-5 text-base tracking-widest uppercase"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Shimmer Effect for Primary Button */}
      {variant === 'primary' && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%', transition: { duration: 1, repeat: Infinity, repeatDelay: 0.5 } }}
        />
      )}
    </motion.button>
  );
};

export default Button;