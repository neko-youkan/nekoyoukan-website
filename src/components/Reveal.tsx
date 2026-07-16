"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${
        visible ? "reveal-visible" : ""
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}