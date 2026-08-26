"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const element = document.querySelector(href);

      if (!element) return;

      event.preventDefault();

      lenis.scrollTo(element as HTMLElement, {
        duration: 1.4,
      });

      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleAnchorClick);

    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return null;
}