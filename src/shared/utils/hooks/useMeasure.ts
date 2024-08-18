import { useState, useRef, useLayoutEffect, type RefObject } from "react";

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type UseMeasureReturnType = [RefObject<HTMLDivElement>, Rect];

export function useMeasure(): UseMeasureReturnType {
  const [rect, setRect] = useState<Rect>({ x: 0, y: 0, width: 0, height: 0 });

  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    function handleResize() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        if (ref.current !== null) {
          setRect(ref.current.getBoundingClientRect());
        }
      }, 0);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [ref, rect];
}
