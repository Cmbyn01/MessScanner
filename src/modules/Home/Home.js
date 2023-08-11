import React from 'react'
import Header from '../../components/Header'
// import Blog from '../../components/Blog'
import BarcodeScanner from '../../components/Blog'

const Home = () => {
  return (
    <>
    <h5 className='text-4xl font-bold text-center mt-20'> Student Details </h5>
    <BarcodeScanner />
    </>
  )
}

export default Home