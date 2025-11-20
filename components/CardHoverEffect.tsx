
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Item {
  title: string;
  description?: string;
  icon?: React.ElementType;
  link?: string;
}

interface HoverEffectProps {
  items: Item[];
  className?: string;
}

export const CardHoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-brand-light/50 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-stone-100 group-hover:border-brand-gold/30 relative z-20 transition-colors duration-300 shadow-sm group-hover:shadow-md flex flex-col items-center text-center gap-4">
             {item.icon && (
                <div className="p-3 bg-brand-cream rounded-full group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
             )}
            <div className="relative z-50">
              <h4 className="font-serif text-brand-dark font-bold tracking-wide mt-2">
                {item.title}
              </h4>
              {item.description && (
                  <p className="mt-2 text-stone-500 tracking-wide leading-relaxed text-sm">
                    {item.description}
                  </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
