import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden'>
      {/* ----------Left Side-------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
            schedule your appointments hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-10 hover:scale-105 transition-all duration-300'
        >
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ----------Right Side-------- */}
      <div className='md:w-1/2 relative flex items-end justify-end overflow-hidden'>
        <img
          className='w-full h-auto md:max-w-md lg:max-w-lg xl:max-w-xl object-contain object-bottom md:object-right'
          src={assets.header_img}
          alt="Doctors Banner"
        />
      </div>
    </div>
  );
};

export default Header;
