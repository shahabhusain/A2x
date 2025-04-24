import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {
    useGSAP(()=>{
        gsap.from("#p",{
            y:-30,
            opacity:0,
            duration:1,
            delay:0.5,
            stagger:0.1,
            yoyo:true
        })
        gsap.from("#get",{
            opacity:0,
            duration:1,
            delay:0.5,
        })
    })
  return (
    <div className=' flex flex-col gap-2 max-w-[555px] pt-96 pl-12'>
        <h2 className=' text-white text-[32px] font-[600] flex items-center gap-3 flex-wrap'><p id='p'>A2Z</p> <p id='p'>Health:</p> <p id='p'>Your</p> <p id='p'>Wellness</p>, <p id='p'>Our</p> <p id='p'>Digital</p> <p id='p'>Care</p></h2>
        <button id='get' className=' bg-[#DCFFAA] py-2 px-5 rounded-full text-black w-fit'>Get Started</button>
    </div>
  )
}

export default Hero