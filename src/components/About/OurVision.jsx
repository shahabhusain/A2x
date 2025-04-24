import React from 'react'
import main from '../../assets/about1.png'
const OurVision = () => {
  return (
    <div className=' flex w-[90%] mx-auto'>
         
        <div className=' flex flex-col gap-4 bg-[#DCFFAB] p-12 rounded-l-2xl'>
            <h1 className=' text-[36px] font-[600] text-[#2E3D32]'>Our Vision</h1>
            <p className=' text-[20px] font-[400] text-[#2E3D32]'>To be the most trusted home health care provider, delivering compassionate and high-quality care. We strive to enhance the well-being of every client with dignity, respect, and personalized support. Our goal is to empower individuals to live independently in the comfort of their homes. </p>
            <button className=' py-3 px-6 rounded-full bg-white text-black w-fit'>View all Services</button>
           
        </div>
        <img src={main} alt="" />
    </div>
  )
}

export default OurVision