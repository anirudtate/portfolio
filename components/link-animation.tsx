"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function LinkAnimation({
  children,
  height = "27px",
}: {
  children: React.ReactNode;
  height?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="overflow-y-clip"
      style={{ maxHeight: height, lineHeight: height }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        animate={{
          y: hovered ? `-${height}` : 0,
          transition: {
            duration: 0.2,
          },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="text-muted-foreground"
        animate={{
          y: hovered ? `-${height}` : 0,
          transition: {
            duration: 0.2,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
