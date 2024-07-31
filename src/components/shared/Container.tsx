"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "../../lib/utils";
interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}
const Container = ({ reverse, delay, className, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default Container;
