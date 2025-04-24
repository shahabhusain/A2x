import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import box from '../../assets/box.png';

gsap.registerPlugin(ScrollTrigger);

const A2x = () => {
  const sectionRef = useRef();
  const scrollRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const containerWidth = sectionRef.current.offsetWidth;
      const scrollDistance = scrollWidth - containerWidth;

      // Horizontal scroll text animation
      gsap.to(scrollRef.current, {
        x: -scrollDistance,
        duration:1,
        delay:0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate each box with staggered horizontal movement
      gsap.utils.toArray(".a2z-box").forEach((img, i) => {
        gsap.to(img, {
          x: -1500,
          duration:1,
          delay:0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: true,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white">
      {/* Horizontal scroll text */}
      <div className="overflow-hidden w-full h-full">
        <div
          ref={scrollRef}
          className="flex items-center h-full gap-20 w-max whitespace-nowrap"
        >
          <h2 className="text-[160px] font-bold text-[#EEEEEE]">
            A2Z Home Health Care
          </h2>
        </div>
      </div>

      {/* Animated Boxes */}
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start gap-32 px-20 pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <img key={i} src={box} alt="" className="a2z-box object-contain" />
        ))}
      </div>
    </section>
  );
};

export default A2x;
