"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WordReveal({
  text,
  className,
  delay = 0.15,
}: WordRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        delay: i * delay,
        type: "spring",
        damping: 12,
        stiffness: 100,
        // The underdamped spring overshoots past its target, which would drive
        // filter: blur() into negative values (blur(-0.94px)) and flood the
        // console with "Invalid keyframe value" warnings. Give blur its own
        // non-overshooting tween so it lands cleanly at 0px while y keeps its
        // springy bounce.
        filter: {
          delay: i * delay,
          type: "tween",
          ease: "easeOut",
          duration: 0.4,
        },
      },
    }),
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn(
        "text-accent-foreground text-center text-5xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-6xl md:leading-[5rem]",
        className,
      )}
    >
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          variants={child}
          custom={i}
          className="mr-[0.25em] inline-block last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
