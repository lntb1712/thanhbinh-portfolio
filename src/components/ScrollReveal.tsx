import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
};

const ScrollReveal = ({ children, className, direction = "left" }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setIsVisible(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 transition-all duration-700 ease-out",
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : direction === "left"
            ? "-translate-x-10 opacity-0 md:-translate-x-16"
            : direction === "right"
              ? "translate-x-10 opacity-0 md:translate-x-16"
              : direction === "up"
                ? "translate-y-10 opacity-0 md:translate-y-16"
                : "-translate-y-10 opacity-0 md:-translate-y-16",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
