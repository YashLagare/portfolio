"use client";
import { useEffect } from "react";

const SmoothScroll = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const scroll = new LocomotiveScroll();
        
        // Handle hash navigation with smooth scroll
        const handleHashNavigation = () => {
          const hash = window.location.hash;
          if (hash) {
            const element = document.querySelector(hash);
            if (element) {
              setTimeout(() => {
                scroll.scrollTo(element);
              }, 100);
            }
          }
        };
        
        // Listen for hash changes
        window.addEventListener('hashchange', handleHashNavigation);
        
        // Handle initial hash on page load
        handleHashNavigation();
        
        return () => {
          window.removeEventListener('hashchange', handleHashNavigation);
        };
      }
    )()
  }, [])

  return;
};
export default SmoothScroll;
