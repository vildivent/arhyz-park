"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function HeroAnimate({
  children,
  image,
}: {
  children: ReactNode;
  image: ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "140%"]);
  return (
    <motion.section ref={ref} className="relative w-full overflow-hidden">
      <motion.div style={{ scale }}>
        <div className="relative h-dvh w-[calc(100%+4rem)] -translate-x-16 sm:w-full sm:translate-x-0">
          {image}
        </div>
      </motion.div>
      {children}
    </motion.section>
  );
}
