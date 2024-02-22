import React from 'react'
import Hero from '../assets/Hero.png'

const About = () => {


  return (
    <>
      <div id='about' className='flex justify-center lg:m-0 m-12 items-center lg:h-[100vh]'>
        <div className='h-[20rem] md:flex-row w-full md:w-[60rem] rounded-lg'>
        <div>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='h-auto text-white hover:text-black font-medium lg:h-[20rem] max-w-[60rem] bg-black hover:bg-white rounded-2xl flex flex-col lg:flex-row justify-center shadow-2xl transition-all duration-300 items-center group'>
              <img className='object-cover lg:h-[20rem] lg:w-[20rem] lg:rounded-l-2xl rounded-t-lg' src={Hero} alt="" />
              <p className='m-8 text-center lg:text-justify'>Hey, I'm Aakash – a tech wizard in training! Obsessed with coding, I turn coffee into code and sometimes even sleep. Python, JavaScript, ReactJS - I speak their language! When not debugging, catch me pondering life's crucial question: 'Does CSS make the web look good, or is it secretly magic?' Let's craft some cool tech and share a laugh or two along the way!</p>
            </div>
          </div>
        </div>
          <div className="flex flex-wrap justify-center w-full">
            <button className='bg-black hover:bg-white hover:text-black  py-2 px-3 w-24 flex-col items-center m-4 rounded-full text-white shadow-2xl'> React Js </button>
            <button className='bg-black hover:bg-white hover:text-black  py-2 px-3 w-24 flex-col items-center m-4 rounded-full text-white shadow-2xl'> Python </button>
            <button className='bg-black hover:bg-white hover:text-black  py-2 px-3 w-24 flex-col items-center m-4 rounded-full text-white shadow-2xl'> Javascript </button>
            <button className='bg-black hover:bg-white hover:text-black  py-2 px-3 w-24 flex-col items-center m-4 rounded-full text-white shadow-2xl'> SQL </button>
            <button className='bg-black hover:bg-white hover:text-black  py-2 px-3 w-24 flex-col items-center m-4 rounded-full text-white shadow-2xl'> NoSQL </button>
            <button className='bg-black hover:bg-white hover:text-black  py-2 px-3 w-24 flex-col items-center m-4 rounded-full text-white shadow-2xl'> Node Js </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About