//main screen which routes to "scan-screen"


import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/WhatsApp Image 2023-08-15 at 18.39.41.jpeg'
import Hero from './Hero';
const Blog = () => {
  return (
    
    <section className="text-gray-600 body-font">
      <Hero />
      <div className="container mx-auto flex flex-col px-5 py-12 items-center justify-center">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Clink Here to Scan Student ID</h1>
          <div className="flex justify-center mt-4">
            <Link to={'/scan-screen'}>
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Scan</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;









