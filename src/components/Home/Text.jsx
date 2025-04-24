import React, { useRef, useLayoutEffect } from 'react';
import v1 from '../../assets/v1.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  "Caring", "Flexible", "Reliable", "Trusted", "Supportive", "Secure",
  "Organized", "Efficient", "Personalized", "Empathetic", "Dedicated",
  "Professional", "Transparent", "Timely", "Respectful"
];

const Text = () => {
  const sectionRef = useRef();
  const scrollRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const containerWidth = sectionRef.current.offsetWidth;
      const scrollDistance = scrollWidth - containerWidth;

      gsap.to(scrollRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollWidth}`,
          scrub: true,
          pin: true,
          // markers: true, // remove later
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // clean up
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#FAFFF4] h-screen overflow-hidden scroll-container1">
      <div className="scale py-12 px-4 flex flex-col items-center justify-center">
        <h1 className="text-[24px] font-[500] max-w-[555px] text-center text-[#000] mb-12">
          We Provide personalized Home health Solution to keep you healthy, anytime, anywhere..
        </h1>
      </div>

      {/* Horizontal scroll section */}
      <div className="overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="scroll-section flex whitespace-nowrap gap-20 w-max px-12 py-16"
        >
          {values.map((label, i) => (
            <div key={i} className="flex flex-col gap-12">
              {[...Array(3)].map((_, j) => (
                <h1 key={j} className="text-[31px] font-[500] text-[#2E3D32] flex items-center gap-2">
                  <img src={v1} alt="" className="w-8 h-8 rounded-full" />
                  {label}
                </h1>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Text;
