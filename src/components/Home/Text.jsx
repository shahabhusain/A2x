import React from 'react'; 
import v1 from '../../assets/v1.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  "Caring", "Flexible", "Reliable", "Trusted", "Supportive", "Secure",
  "Organized", "Efficient", "Personalized", "Empathetic", "Dedicated",
  "Professional", "Transparent", "Timely", "Respectful"
];

const values1 = [
  "Caring", "Flexible", "Reliable", "Trusted", "Supportive", "Secure",
  "Organized", "Efficient", "Personalized", "Empathetic", "Dedicated",
  "Professional", "Transparent", "Timely", "Respectful"
];

const Text = () => {
  useGSAP(() => {
    gsap.to('.scroll-section', {
      transform: "translate(-70%)",
      scrollTrigger: {
        trigger: '.scroll-container1',
        start: 'top center',
        end: '+=440',
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    gsap.to('.scroll-section1', {
        transform: "translate(-70%)",
      scrollTrigger: {
        trigger: '.scroll-container2',
        start: 'top center',
        end: '+=440',
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-72">
      {/* Section 1 */}
      <div className="scroll-container1 overflow-hidden flex items-center">
        <div className="scroll-section flex flex-nowrap whitespace-nowrap items-center gap-20 w-max">
          {values.map((label, i) => (
            <h1 key={i} className="text-[31px] font-[500] text-[#2E3D32] flex items-center gap-2">
              <img src={v1} alt="" className="w-8 h-8 rounded-full" />
              {label}
            </h1>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <div className="scroll-container2 overflow-hidden flex items-center">
        <div className="scroll-section1 flex flex-nowrap whitespace-nowrap items-center gap-20 w-max">
          {values1.map((label, i) => (
            <h1 key={i} className="text-[31px] font-[500] text-[#2E3D32] flex items-center gap-2">
              <img src={v1} alt="" className="w-8 h-8 rounded-full" />
              {label}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Text;
