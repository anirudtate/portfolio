"use client";
import { motion } from "motion/react";

export function AppearFromAbove({
  children,
  duration = 0.8,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
}

export function AppearFromBelow({
  children,
  duration = 0.8,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
