"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function IntroAnimate({
  children,
  image,
}: {
  children: ReactNode;
  image: ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  return (
    <motion.section ref={ref} className="relative overflow-y-hidden">
      <div className="relative h-[110svh] w-full">{image}</div>
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-10 flex h-[110svh] w-full flex-col items-center gap-10 px-5 py-10"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
