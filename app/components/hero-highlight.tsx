"use client";
import { cn } from "@/utils/cn";
import { useMotionValue, motion, useMotionTemplate, useAnimate } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div
            className={cn(
                "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
            <motion.div
                className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
    delay,
  }: {
    children: React.ReactNode;
    className?: string;
    delay: number;
  }) => {
    const highlightRef = useRef<HTMLSpanElement>(null);
    const [scope, animate] = useAnimate();
    const highlightColor = "#ff5e1a";
    const opacity = "0.8";
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && highlightRef.current) {
            animate(
              highlightRef.current,
              {
                backgroundSize: "100% 100%",
              },
              {
                duration: 3,
                ease: "linear",
                delay,
              }
            );
            observer.disconnect();
          }
        });
      });
  
      if (highlightRef.current) {
        observer.observe(highlightRef.current);
      }
  
      return () => {
        if (highlightRef.current) {
          observer.unobserve(highlightRef.current);
        }
      };
    }, [animate, delay]);
  
    return (
      <motion.span
        ref={highlightRef}
        initial={{
          backgroundSize: "0% 100%",
        }}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          display: "inline",
          opacity,
        }}
        className={cn(
          `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500`,
          className
        )}
      >
        {children}
      </motion.span>
    );
  };