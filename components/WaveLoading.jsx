import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WaveLoading = ({ text = "NeoLeaf", duration = 3, color = "#4FD1C5" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + 1;
      });
    }, (duration * 1000) / 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Base faded text */}
            <h1 className="text-8xl font-bold text-white/20 select-none">
              {text}
            </h1>

            {/* Wave-filled text that rises */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`,
                transition: 'clip-path 0.1s linear'
              }}
            >
              <h1
                className="text-8xl font-bold select-none"
                style={{
                  color: 'transparent',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='wave' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Cpath d='M0 50 Q 25 30, 50 50 T 100 50' stroke='${encodeURIComponent(color)}' fill='none' stroke-width='8' /%3E%3Cpath d='M0 70 Q 25 50, 50 70 T 100 70' stroke='${encodeURIComponent(color)}' fill='none' stroke-width='6' opacity='0.7' /%3E%3Cpath d='M0 30 Q 25 10, 50 30 T 100 30' stroke='${encodeURIComponent(color)}' fill='none' stroke-width='6' opacity='0.7' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23wave)' /%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                  animation: 'waveMove 3s linear infinite'
                }}
              >
                {text}
              </h1>
            </div>

            {/* Loading percentage */}
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Scale animation at end */}
          {progress === 100 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 15, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ zIndex: 100 }}
            >
              <h1 className="text-8xl font-bold" style={{ color }}>
                {text}
              </h1>
            </motion.div>
          )}

          <style jsx>{`
            @keyframes waveMove {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 200px 0;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaveLoading;