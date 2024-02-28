import React from 'react'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import { Link } from 'react-scroll'

const Projects = () => {
  return (
    <><div id='projects'>
      <p className='text-[#9e5ed0] text-4xl font-bold font-Poppins flex justify-center items-center lg:mt-0 mt-[42rem]'>Projects</p>
      <div className='flex justify-center items-center'>
      <div className='flex flex-wrap max-w-[60rem] justify-center lg:mt-0  items-center'>
        <div className='h-[28rem] w-[20rem] flex flex-col rounded-2xl text-white hover:text-black bg-black hover:bg-white shadow-xl transition-all duration-300 m-8 '>
          <img src={three} alt="" className='h-[20rem] w-[20rem] object-cover rounded-2xl ' />
          <p className=' font-Poppins font-semibold m-4'>DuneFlix - Netflix Clone</p>
          <p className='font-Poppins font-medium text-blue-500 flex justify-between mt-6 mx-4 '><a href='https://github.com/Aakash-a3an/duneflix' className='cursor-pointer'>View Code</a><a href='https://dune2flix.web.app/'className='cursor-pointer'>Sample</a></p>
        </div>
        
        <div className='h-[28rem] w-[20rem] flex flex-col rounded-2xl text-white hover:text-black bg-black hover:bg-white shadow-xl transition-all duration-300 m-8 '>
          <img src={two} alt="" className='h-[20rem] w-[20rem] object-cover rounded-2xl ' />
          <p className=' font-Poppins font-semibold m-4'>Penta Deal - Comprehensive E-Commerce Website using DRNN</p>
          <p className='font-Poppins font-medium text-blue-500 flex justify-between mb-8 mx-4 '><a href='https://github.com/Aakash-a3an/penta-deal' className='cursor-pointer'>View Code</a></p>
        </div>
        <div className='h-[28rem] w-[20rem] flex flex-col rounded-2xl text-white hover:text-black bg-black hover:bg-white shadow-xl transition-all duration-300 m-8'>
          <img src={one} alt="" className='h-[20rem] w-[20rem] object-cover rounded-2xl ' />
          <p className=' font-Poppins font-semibold m-4'>AI - Powered Nutrition Analyzer for Fitness Enthusiast</p>
          <p className='font-Poppins font-medium text-blue-500 flex justify-between mb-8 mx-4 '><a href='https://github.com/Aakash-a3an/AI-Powered-Nutrition-Analyzer-for-Fitness-Enthusiasts' className='cursor-pointer'>View Code</a></p>
        </div>
        <div className='h-[28rem] w-[20rem] flex flex-col  rounded-2xl text-white hover:text-black bg-black hover:bg-white shadow-xl transition-all duration-300 m-8 '>
          <img src={four} alt="" className='h-[20rem] w-[20rem] object-cover rounded-2xl ' />
          <p className=' font-Poppins font-semibold m-4'>Motivational Album</p>
          <p className='font-Poppins font-medium text-blue-500 flex justify-between mt-6 mx-4 '><a className='cursor-pointer' href='https://github.com/Aakash-a3an/Photo-Album'>View Code</a><a href='https://shiny-kangaroo-9af92d.netlify.app/' className='cursor-pointer'>Sample</a></p>
        </div>
        
      </div>
      </div>    
      </div>
      </>
    
  )
}

export default Projects