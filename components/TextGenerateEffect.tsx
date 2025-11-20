
import React, { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = "",
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`opacity-0 blur-sm transition-colors duration-500 inline-block mr-3 pb-2 ${
                idx > 3 ? "text-brand-gold" : "text-white"
              }`}
              style={{ filter: "blur(10px)" }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="mt-4">
        <div className=" leading-tight tracking-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
