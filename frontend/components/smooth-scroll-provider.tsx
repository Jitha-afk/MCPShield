"use client";
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!(gsap as any).registeredScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      (gsap as any).registeredScrollTrigger = true;
    }

    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      duration: 1.0,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
