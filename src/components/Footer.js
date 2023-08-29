//footer for the webpage, color can be changed 


import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2 bg-gray-100">
  <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 text-xl">Student Mess Register</span>
      </a>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">Visit IIT Kharagpur Website —
        <a href="https://www.iitkgp.ac.in/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">IIT KGP</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer