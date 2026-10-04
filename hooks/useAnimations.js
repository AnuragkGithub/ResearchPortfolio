import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAnimations() {
  useEffect(() => {
    // HERO
    gsap.from(".hero-text", {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        scrub: true,
      },
    });

    // SECTIONS
    gsap.utils.toArray(".section").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          scrub: true,
        },
      });
    });

    // HORIZONTAL SCROLL
    const panels = gsap.utils.toArray(".panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal",
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () =>
  "+=" + document.querySelector(".horizontal-container").offsetWidth,
      },
    });

    // 🔥 CENTER FOCUS EFFECT
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "center center",
        end: "center center",
        onEnter: () => {
          gsap.to(panel, { scale: 1.2, opacity: 1, duration: 0.4 });
        },
        onLeave: () => {
          gsap.to(panel, { scale: 0.8, opacity: 0.3, duration: 0.4 });
        },
        onEnterBack: () => {
          gsap.to(panel, { scale: 1.2, opacity: 1, duration: 0.4 });
        },
        onLeaveBack: () => {
          gsap.to(panel, { scale: 0.8, opacity: 0.3, duration: 0.4 });
        },
      });
    });
  }, []);
}