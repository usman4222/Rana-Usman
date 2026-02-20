// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const WaveLoading = ({ text = "NeoLeaf", duration = 3 }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => setIsLoading(false), 500); // End loading after scale
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, (duration * 1000) / 100);

//     return () => clearInterval(interval);
//   }, [duration]);

//   return (
//     <AnimatePresence>
//       {isLoading && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="relative">
//             {/* Background faded text */}
//             <motion.h1
//               className="text-8xl font-bold text-white/20 select-none"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               {text}
//             </motion.h1>

//             {/* Water wave effect text */}
//             <motion.div
//               className="absolute inset-0 overflow-hidden"
//               initial={{ y: "100%" }}
//               animate={{ y: `${100 - progress}%` }}
//               transition={{ duration: 0.1 }}
//             >
//               <motion.h1
//                 className="text-8xl font-bold text-[#4FD1C5] select-none relative"
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   width: "100%",
//                 }}
//               >
//                 {text}
//                 {/* Wave overlay */}
//                 <motion.div
//                   className="absolute inset-0 bg-[#4FD1C5]/20"
//                   animate={{
//                     y: [0, -10, 0, 10, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   style={{
//                     filter: "url(#wave)",
//                   }}
//                 />
//               </motion.h1>
//             </motion.div>

//             {/* Loading percentage */}
//             <motion.div
//               className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/60"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               {progress}%
//             </motion.div>
//           </div>

//           {/* Scale animation at end */}
//           {progress === 100 && (
//             <motion.div
//               className="absolute inset-0 flex items-center justify-center"
//               initial={{ scale: 1 }}
//               animate={{ scale: 15 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               style={{ zIndex: 100 }}
//             >
//               <h1 className="text-8xl font-bold text-[#4FD1C5]">{text}</h1>
//             </motion.div>
//           )}

//           {/* SVG filter for wave effect */}
//           <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//             <defs>
//               <filter id="wave">
//                 <feTurbulence 
//                   baseFrequency="0.02 0.05" 
//                   numOctaves="3" 
//                   seed="2"
//                 >
//                   <animate
//                     attributeName="baseFrequency"
//                     dur="10s"
//                     values="0.02 0.05;0.03 0.07;0.02 0.05"
//                     repeatCount="indefinite"
//                   />
//                 </feTurbulence>
//                 <feDisplacementMap in="SourceGraphic" scale="10" />
//                 <feGaussianBlur stdDeviation="2" />
//               </filter>
//             </defs>
//           </svg>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default WaveLoading;