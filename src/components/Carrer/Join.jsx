import React from 'react';
import hand from '../../assets/hand.png'
import men from '../../assets/man.png'
export default function Join() {
  return (
    <div className=" w-[80%] mx-auto py-12 px-4 mt-72">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Join Our Team in Just a Few Steps
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Step 1: Browse */}
        <div className="bg-[#DCFFAA] rounded-xl p-6 relative">
          <div className="mb-6">
            <span className="text-gray-700 font-semibold">01.</span>
            <h3 className="text-xl font-bold text-gray-800 mt-1">Browse</h3>
            <p className="text-gray-600 mt-2">
              Explore our selection of openings that match your skills.
            </p>
          </div>
          
          <img 
                    src={hand}
                    alt="Mobile app showing job listings" 
                    className="w-full"
                  />
        </div>
        
        {/* Step 2: Submit */}
             <div className=' flex flex-col gap-12'>
             <div className="bg-[#FAFFF4] rounded-xl p-6 border border-gray-200">
          <div className="mb-16">
            <span className="text-gray-700 font-semibold">02.</span>
            <h3 className="text-xl font-bold text-gray-800 mt-1">Submit</h3>
            <p className="text-gray-600 mt-2">
              Fill out the application form with your details.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 bg-[#FAFFF4] border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
              </svg>
              <span>Upload CV</span>
            </button>
          </div>
        </div>
        
        {/* Step 3: Interview */}
        <div className="bg-[#FAFFF4] rounded-xl p-6 border border-gray-200">
          <div className="mb-4">
            <span className="text-gray-700 font-semibold">03.</span>
            <h3 className="text-xl font-bold text-gray-800 mt-1">Interview</h3>
            <p className="text-gray-600 mt-2">
              Our team will contact you for the next steps.
            </p>
          </div>
          

              <img 
                src={men} 
                alt="Video interview illustration" 
                className="w-full rounded-lg"
              />
        </div>
             </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
          Apply now
        </button>
      </div>
    </div>
  );
}