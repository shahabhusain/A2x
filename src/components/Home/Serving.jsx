import React from 'react'
import bg1 from '../../assets/bg1.png'
const Serving = () => {
  return (
    <div>
          <div  className=' flex flex-col items-center justify-center'>
          <p className=' text-[24px] font-[500] text-black max-w-[555px] text-center'>Our mission is to deliver seamless healthcare experiences that fit into your life, no matter where you are.</p>
          </div>

        <div className=' bg-[#FFFFDB] pt-20 pb-12 rounded-2xl px-20 mt-20'>
         <h1 className=' text-[#2E3D32] text-[36px] font-[600] text-center'>Serving You with Care</h1>
           <div className=' bg2 flex flex-col gap-5 pt-72 p-12 mt-12'>
            <h1 className=' text-[32px] font-[600] text-white'>Personal Care Assistance</h1>
            <p className=' text-[20px] font-[400] text-white max-w-[555px]'>Helping with daily activities like bathing, dressing, and meal preparation to ensure comfort and dignity.</p>
            <button className=' bg-[#DCFFAA] py-2.5 px-5 rounded-full text-black w-fit'>View more</button>
           </div>
        </div>
    </div>
  )
}

export default Serving