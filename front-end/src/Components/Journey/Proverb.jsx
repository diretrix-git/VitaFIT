import React from "react";
import { motion } from "framer-motion";

const ScrollingText = () => {
  const text = "« Every Step Forward Is A Victory »";
  const duration = 12;

  return (
    <div className="relative w-full overflow-hidden p-12 bg-black">
      <div className="flex">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay: -duration * (i / 4),
            }}
            className="flex-shrink-0 whitespace-nowrap"
          >
            <span
              className="text-7xl font-bold tracking-wider inline-block"
              style={{
                color: "rgb(226, 221, 219)",
                marginRight: "4rem", // Added 4rem (1rem = 16px) spacing after each text instance
              }}
            >
              {text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
