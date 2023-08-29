//homepage with hall pic, will lead to sign in page

import React from 'react';
import BackgroundImage from '../components/images/MMM.jpg'
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <section className="mb-40">
      <nav className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start" data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            
            <button className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden" type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
              <span className="[&>svg]:w-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  
                </svg>
              </span>
            </button>

            
            <a className="text-primary dark:text-primary-400" href="#!">
              <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  
                </svg>
              </span>
            </a>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}

     
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: `url(${BackgroundImage})`,
        height: '500px'
      }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h1 className="mt-2 mb-16 text-2xl font-serif tracking-tight md:text-6xl xl:text-7xl opacity-80">
               <br /><span>Student Mess Register</span>
            </h1>
            <Link to="/login">
              <button
                type="button"
                className="rounded border-2 border-red-500 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-red-500 opacity-80 transition duration-150 ease-in-out hover:border-red-600 hover:bg-red-100 hover:bg-opacity-10 hover:text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:border-red-700 active:text-red-700"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                ENTER
              </button>
            </Link>
          </div>

          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
    
  );
};

export default Blog;









