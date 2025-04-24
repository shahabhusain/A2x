import React from 'react';

const Box = () => {
  return (
    <section className="bg-[#f7fdf6] py-16 px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Content */}
        <div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className=" mb-6">
            We are a team of dedicated caregivers, nurses, and healthcare professionals passionate about helping individuals live independently and comfortably in their own homes. Our staff is carefully selected, highly trained, and deeply committed to providing personalized care that meets the unique needs of every client.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Get Started
          </button>
        </div>
        </div>

        {/* Right Content Boxes */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="hover:bg-[#1d2b1f] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
              <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-36'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Founded on Care</h3>
            <p className="text-sm">
              Established to provide trusted, professional home health care.
            </p>
          </div>
          <div className="hover:bg-[#1d2b1f] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
          <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-36'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Personalized Support</h3>
            <p className="text-sm ">
              Established to provide trusted, professional home health care.
            </p>
          </div>
          <div className="hover:bg-[#1d2b1f] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
          <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-36'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Experienced Team</h3>
            <p className="text-sm ">
              Skilled caregivers and nurses dedicated to excellence.
            </p>
          </div>
          <div className="hover:bg-[#1d2b1f] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in">
          <div className=' w-16 h-16 rounded-full bg-[#e6e2e252] ml-36'></div>
            <h3 className="text-lg font-semibold mb-2 mt-12">Always Here for You</h3>
            <p className="text-sm ">
              Reliable, 24/7 care ensuring comfort and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;
