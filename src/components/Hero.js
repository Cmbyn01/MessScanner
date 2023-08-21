import React from 'react';
import logo from './images/WhatsApp Image 2023-08-15 at 18.39.41.jpeg';

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-24">
      <h5 className="text-4xl font-bold text-center text-black">STUDENT MESS REGISTER</h5>
      <div className="mt-8">
        <img className="w-32 h-32 object-cover object-center rounded-full" alt="hero" src={logo} />
      </div>
    </div>
  );
};

export default Hero;
