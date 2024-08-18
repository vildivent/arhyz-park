"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

export default function ParalaxBg({
  children,
  image,
  outputRange,
}: {
  children: React.ReactNode;
  image: React.ReactNode;
  outputRange: string[];
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRange = useSpring(scrollYProgress, { mass: 0.1 });
  const top = useTransform(yRange as MotionValue<number>, [0, 1], outputRange);
  return (
    <section ref={ref}>
      <motion.div className="fixed inset-0 -bottom-16 -z-10" style={{ top }}>
        {image}
      </motion.div>
      {children}
    </section>
  );
}
