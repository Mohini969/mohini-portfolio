import React, { useEffect, useState } from "react";
import { motion as Motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  // Smooth spring physics for the cyan glowing ring trailing effect
  const ringX = useSpring(-100, { stiffness: 450, damping: 26, mass: 0.3 });
  const ringY = useSpring(-100, { stiffness: 450, damping: 26, mass: 0.3 });

  useEffect(() => {
    // Check if device is desktop with fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const checkDesktop = () => setIsDesktop(mediaQuery.matches);
    checkDesktop();

    mediaQuery.addEventListener("change", checkDesktop);
    return () => mediaQuery.removeEventListener("change", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });
      ringX.set(clientX);
      ringY.set(clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .glass-card, .theme-tile, .cursor-pointer'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop, isVisible, ringX, ringY]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Cyan Glowing Ring trailing around the cursor tip */}
      <Motion.div
        style={{
          x: ringX,
          y: ringY,
        }}
        className="fixed left-0 top-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <Motion.div
          animate={{
            scale: isHovered ? 1.35 : 1,
            borderColor: isHovered ? "rgba(34, 211, 238, 0.95)" : "rgba(34, 211, 238, 0.75)",
            boxShadow: isHovered
              ? "0 0 16px rgba(34, 211, 238, 0.85), inset 0 0 8px rgba(34, 211, 238, 0.3)"
              : "0 0 10px rgba(34, 211, 238, 0.65)",
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="h-5 w-5 rounded-full border-[1.5px] bg-transparent"
        />
      </Motion.div>

      {/* Main Sharp White Arrow Pointer */}
      <div
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
        className="fixed left-0 top-0 pointer-events-none"
      >
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          <path
            d="M 1 1 L 6.5 19.5 L 10 12.5 L 17 9.5 L 1 1 Z"
            fill="#FFFFFF"
            stroke="#0b1329"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
