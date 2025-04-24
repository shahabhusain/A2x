import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import React from "react";
import Header from "../Layout/Header";

const Home = () => {
  const comp = useRef(null);
  const guwawaRef = useRef(null);
  const [count, setCount] = useState(1);
  const [showHeader, setShowHeader] = useState(false);

  // Guwawa bounce animation
  useEffect(() => {
    if (guwawaRef.current) {
      gsap.to(guwawaRef.current, {
        scale: 1.2,
        yoyo: true,
        repeat: -1,
        duration: 0.6,
        ease: "power1.inOut",
      });
    }
  }, []);

  // Text transition animation
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#text1", {
      opacity: 1,
      duration: 1,
    })
      .to("#text1", {
        opacity: 0,
        duration: 1,
        delay: 1,
      })
      .to("#text2", {
        opacity: 1,
        duration: 1,
      })
      .to("#text2", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      })
      .to("#text3", {
        opacity: 1,
        duration: 0.5,
      })
      .to("#text3", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });
  }, []);

  // Counter and loader fade out
  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 50);
      return () => clearInterval(interval);
    } else {
      const t1 = gsap.timeline({
        onComplete: () => {
          setShowHeader(true);
        },
      });
      t1.to("#intro-slider", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [count]);

  return (
    <div className="relative" ref={comp}>
      {count <= 100 && (
        <div
          id="intro-slider"
          className="h-screen p-10 bg-white absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col items-center justify-center"
        >
        
           <div
            ref={guwawaRef}
            className="w-[120px] h-[120px] bg-[#aaffcc] rounded-full shadow-lg mb-8"
          ></div>

          <h1
            id="text1"
            className="text-[20px] font-bold text-[#333] absolute top-[27rem] opacity-0"
          >
            Persolized care at your fingertips
          </h1>
          <h1
            id="text2"
            className="text-[20px] font-bold text-[#333] absolute top-[27rem] opacity-0"
          >
            Export heath care anytime, anywhere
          </h1>
          <h1
            id="text3"
            className="text-[20px] font-bold text-[#333] absolute top-[27rem] opacity-0"
          >
            Avocato Health
          </h1>

          <h1 className="text-[44px] font-bold text-[#222] absolute bottom-12 right-12">
            {count}%
          </h1>
          <h1 className="text-[24px] font-bold text-[#222] absolute bottom-14 left-12">
            Your care is on the way
          </h1>
        </div> 
      )} 

      {/* Main site */}
      {showHeader && <Header />}
     
     
    </div>
  );
};

export default Home;
