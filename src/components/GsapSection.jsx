import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const GsapSection = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const pEls = gsap.utils.toArray(".gsaptext > h2");
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Adjust for how long you want it pinned
          pin: true,
          scrub: 1,
          markers: false,
        },
      })
      .fromTo(
        pEls,
        { opacity: 0, y: 40, backgroundPositionX: "100%" },
        {
          opacity: 1,
          y: 0,
          backgroundPositionX: "200%",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.8,
        }
      );
  }, []);

  return (
    <section
      id="gsap-section"
      className="container mx-auto px-4 h-screen flex items-center justify-center"
      ref={containerRef}
    >
      <div className="p-8">
        <div className="gsaptext p-4 bg-background/10 rounded-lg mb-4">
          <h2 className="relative tracking-[2px]">Designer</h2>
          <h2 className="relative tracking-[2px]">Developer</h2>
          <h2 className="relative tracking-[2px]">Dreamer</h2>
          <h2 className="relative tracking-[2px]">Drummer</h2>
          <h2 className="relative tracking-[2px]">Deliverer</h2>
        </div>
      </div>
    </section>
  );
};
