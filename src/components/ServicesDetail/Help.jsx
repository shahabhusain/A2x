import React from 'react'

const Help = () => {
  return (
    <div className=' w-[90%] mx-auto'>
        <h1 className=' text-[36px] font-[500] text-[#2E3D32] text-center'>How we help</h1>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="hover:bg-[#1d2b1f] border-[1px] border-[#00000027] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
              <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-80'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Founded on Care</h3>
            <p className="text-sm">
              Established to provide trusted, professional home health care.
            </p>
          </div>
          <div className="hover:bg-[#1d2b1f] border-[1px] border-[#00000027] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
          <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-80'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Personalized Support</h3>
            <p className="text-sm ">
              Established to provide trusted, professional home health care.
            </p>
          </div>
          <div className="hover:bg-[#1d2b1f] border-[1px] border-[#00000027] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
          <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-80'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Experienced Team</h3>
            <p className="text-sm ">
              Skilled caregivers and nurses dedicated to excellence.
            </p>
          </div>
          <div className="hover:bg-[#1d2b1f] border-[1px] border-[#00000027] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
          <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-80'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Always Here for You</h3>
            <p className="text-sm ">
              Reliable, 24/7 care ensuring comfort and peace of mind.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Help