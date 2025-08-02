// components/animations/FloatingShapes.js
'use client';

import { motion } from 'framer-motion';

const shapes = [
  { size: 60, x: '5%', y: '10%', color: 'bg-red-500/80' },
  { size: 30, x: '80%', y: '20%', color: 'bg-orange-400/80' },
  { size: 80, x: '40%', y: '70%', color: 'bg-red-400/80' },
  { size: 20, x: '15%', y: '85%', color: 'bg-orange-300/80' },
  { size: 45, x: '90%', y: '60%', color: 'bg-red-600/80' },
];

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.y,
            left: shape.x,
          }}
          animate={{
            y: ['0%', '5%', '-5%', '0%'], // Gentle floating motion
            x: ['0%', '-3%', '3%', '0%'],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15, // Random duration for each
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}