import React from 'react'
import img1 from '../../assets/imgg1.png'
const Blogo = () => {
  return (
    <div className=' w-[90%] mx-auto'>
        <h1 className=' text-[130px] font-[700] text-[#EEEEEE] text-center'>Our blogs</h1>
          <div className=' flex items-center gap-12 justify-between mt-12'>
          <div className='bg-[#F5F5F5] p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img1} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Personalized Home Care</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>How tailored care plans improve the quality of life for seniors and individuals with special needs.</p>      
        </div>

        <div className='bg-[#F5F5F5] p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img1} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Personalized Home Care</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>How tailored care plans improve the quality of life for seniors and individuals with special needs.</p>      
        </div>

        <div className='bg-[#F5F5F5] p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img1} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Personalized Home Care</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>How tailored care plans improve the quality of life for seniors and individuals with special needs.</p>      
        </div>

        <div className='bg-[#F5F5F5] p-5 rounded-md flex flex-col gap-3'>
            <img className=' w-full' src={img1} alt="" />
            <h1 className=' text-[20px] font-[600] text-[#2E3D32]'>Personalized Home Care</h1>
            <p className=' text-[16px] font-[400] text-[#2E3D32]'>How tailored care plans improve the quality of life for seniors and individuals with special needs.</p>      
        </div>
          </div>
    </div>
  )
}

export default Blogo