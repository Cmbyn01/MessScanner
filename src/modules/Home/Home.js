import React from 'react'
import Header from '../../components/Header'
import Blog from '../../components/Blog'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <h5 className='text-4xl font-bold text-center mt-20'> Student Details </h5>
    <Blog/>
    <Footer />
    </>
  )
}

export default Home