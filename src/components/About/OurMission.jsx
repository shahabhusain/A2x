import React from 'react'
import main from '../../assets/image2.png'
const OurMission = () => {
  return (
    <div className=' flex w-[90%] mx-auto mt-20'>
           <img src={main} alt="" />
        <div className=' flex flex-col gap-4 bg-[#DCFFAB] p-12 rounded-l-2xl'>
            <h1 className=' text-[36px] font-[600] text-[#2E3D32]'>Our Mission</h1>
            <p className=' text-[20px] font-[400] text-[#2E3D32]'>We are committed to providing compassionate, high-quality care that empowers clients to live independently while ensuring their safety and well-being. Our dedicated team supports families by offering peace of mind, knowing their loved ones receive exceptional care. </p>
            <button className=' py-3 px-6 rounded-full bg-white text-black w-fit'>View all Services</button>
        </div>
     
    </div>
  )
}

export default OurMission