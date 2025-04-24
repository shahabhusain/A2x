import React, { useRef } from 'react';
import img1 from '../../assets/img1.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.to('.img1', {
      y: '-50%',
      scrollTrigger: {
        trigger: '.scroll',
        start: 'top 80%',   
        end: 'bottom top',  
        scrub: true,
        // pin: true,         // Only use pin if you actually want it to stick during scroll
        // markers: true         // Helpful for debugging
      },
    });
    ScrollTrigger.refresh();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className='w-[90%] mx-auto relative'>
      <div className='scroll relative h-[600px] '>
        <img className='img1' src={img1} alt="" />
      </div>
       <div className='absolute top-12 w-full flex items-center justify-center'>
       <h1 className='text-[#2E3D32] text-[25px] font-[500] '>
        About
      </h1>
      <p className='text-[#2E3D32] text-[32px] font-[600] max-w-[755px] absolute top-32 text-center'>A2Z Health blends cutting-edge technology with human care, making home health care simple, personal, and accessible for everyone.</p>
      <button className='bg-[#2E3D32] py-3 px-5 rounded-full text-white absolute top-72'>About</button>
       </div>
    </div>
  );
};

export default About;
