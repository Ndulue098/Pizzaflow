import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useLandingAnimations() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from(".hero-badge, .hero-title, .hero-text, .hero-actions, .hero-stats", {
        opacity: 0,
        y: 36,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-visual", {
        opacity: 0,
        y: 50,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
        });
      });

      gsap.utils.toArray(".timeline-step").forEach((step, index) => {
        gsap.from(step, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -24 : 24,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
          },
        });
      });

      gsap.to(".hero-visual", {
        y: 10,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => context.revert();
  }, []);
}

export default useLandingAnimations;
