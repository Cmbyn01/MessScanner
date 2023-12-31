//header for the webpage, has routes to "home" and "resources"


import React from "react";
import { Link } from "react-router-dom";
import logoImage from './images/WhatsApp Image 2023-08-15 at 18.39.41.jpeg'


const Header = () => {
  return (
    <header className="text-gray-600 body-font border-b bg-gray-100 border-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={logoImage} alt="Logo" className="w-10 h-10 text-white p-2" />
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span className="ml-3 text-xl">Student Mess Register</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-red-900 hover:cursor-pointer">
        Home
      </Link>
      <Link to="/resources" className="mr-5 hover:text-red-900 hover:cursor-pointer">
        Resources
      </Link>
    </nav>
  </div>
</header>
  );
};

export default Header;
