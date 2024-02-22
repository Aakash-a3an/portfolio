import React from 'react'
import hi from '../assets/hi.png'
import { TbCloudDownload } from "react-icons/tb";
import { BsMouse } from "react-icons/bs";
import {Link} from 'react-scroll';
import resume from '../assets/Resume_AAKASH.pdf'


const Hero = () => {
  return (
    <>
    <section id='intro' className='top-4 flex lg:flex-row flex-col'>
      
      <div className="lg:h-[80vh] h-[35vh] lg:mt-0 mt-16 lg:w-[100vw] w-[100vw] p-8 text-5xl flex flex-col justify-center text-black lg:items-start items-center">
        <span className='text-3xl mb-2.5 flex font-semibold'>Hello <img src={hi} alt="Hi Emoji" className='object-cover h-8 w-8 ml-2 ' /> </span>
        <span className='lg:text-7xl text-4xl font-semibold font-Poppins justify-center '>I'm<span className='text-violet-400'> Aakash</span><br/>Web Designer</span>
        <p className='lg:text-lg text-lg lg:mt-4 mt-2 '>I'm a skilled web designer with experience in creating<br className='hidden'/> visually appealing and user friendly websites.</p>
        <a href={resume} download='Aakash_Resume' ><button className='flex h-10 lg:text-lg text-sm items-center justify-center lg:mt-4 mt-2 pr-2 pb-1 bg-black hover:bg-violet-400 transition-all duration-200 hover:shadow-md dark:hover:shadow-xl font-semibold lg:w-40 w-32 rounded-full text-white'> <TbCloudDownload className='mx-2'/>Download CV</button></a>
      </div>
      <div className='hero lg:mr-8 lg:mt-0 mt-20'>
      </div>
    </section>
    <div className='flex justify-center items-center text-3xl animate-bounce hover:text-violet-600 '><Link activeClass='active' to='about' spy={true} smooth={true} offset={-40} duration={500}><BsMouse className='hidden md:block lg:block xl:block cursor-pointer' /></Link></div>
    </>
  )
}

export default Hero;