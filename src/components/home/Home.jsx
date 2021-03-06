import React from 'react'
import ME from '../../assets/me.png'
import 'animate.css';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0b0d0f] content-center flex text-[#dbdbdb]'>
        <div className='max-w-full mx-auto h-screen flex flex-col justify-center text-center'>
          <h5 className='md:text-lg md:pt-0 pt-4 font-medium text-sm'>Hi, I'm</h5>
          <h1 className='md:text-9xl font-medium text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Arwin Arun Swapna</h1>
          <h1 className='md:text-xl font-medium mt-3 mb-3 text-md text-[#824C96]'>Software Developer</h1>
          <div>
            <img className='mx-auto' style={{width:'280px'}} src={ME} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home
