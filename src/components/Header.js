import React from "react";
import { Link } from "react-router-dom";
import logoImage from './images/WhatsApp Image 2023-08-15 at 18.39.41.jpeg'


const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b border-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={logoImage} alt="Logo" className="w-10 h-10 text-white p-2 rounded-full" />
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-xl">Student Mess Register</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-red-900 hover:cursor-pointer">
        Home
      </Link>
      <Link to="/admin" className="mr-5 hover:text-red-900 hover:cursor-pointer">
        Admin
      </Link>
      <Link to="/resources" className="mr-5 hover:text-red-900 hover:cursor-pointer">
        Resources
      </Link>
    </nav>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
  );
};

export default Header;
