import { motion } from "framer-motion";

export default function HeartShape({ onComplete }: { onComplete: () => void }) {
  const hearts = Array.from({ length: 90 });

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      {hearts.map((_, i) => {
        const angle = (i / hearts.length) * Math.PI * 2;
        const x = 160 * Math.pow(Math.sin(angle), 3);
        const y =
          -130 *
          (0.812 * Math.cos(angle) -
            0.312 * Math.cos(2 * angle) -
            0.125 * Math.cos(3 * angle) -
            0.0625 * Math.cos(4 * angle));

        return (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 800 - 400,
              y: Math.random() * 800 - 400,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              x,
              y,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              duration: 2,
              delay: i * 0.02,
              ease: "easeOut",
            }}
            className="absolute text-pink-500 text-2xl">
            ❤️
          </motion.div>
        );
      })}

      {/* Gọi callback sau khi tim lớn hoàn thành */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        onAnimationComplete={onComplete}
      />
    </div>
  );
}
