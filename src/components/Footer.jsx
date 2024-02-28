import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-scroll';
import fifth from '../assets/5.png'




const Footer = () => {
  return (
    <footer className='h-[60vh] w-[99vw] rounded-t-3xl bg-black '>
      <div className='flex flex-row justify-between'>
      <div>
      <p className='font-semibold font-Poppins text-white mt-8 lg:p-8 p-6 lg:mx-8 mx-2'>Copyright &#169; 2024 Aakash. All right received.</p>
        <p className='font-medium font-Poppins text-white px-8 lg:mx-8 mx-0 lg:mt-4 mt-2 '>Social Media Links:</p>
        <div className= 'lg:mx-16 mx-8 flex flex-col'>
          <a className='text-white mt-4 flex flex-row cursor-pointer hover:text-violet-600 items-center' href='https://www.linkedin.com/in/aakash-n0dev/'><BsLinkedin className='mr-2' / >LinkedIn</a>
          <a className='text-white mt-2 flex flex-row cursor-pointer hover:text-violet-600 items-center' href='https://github.com/Aakash-a3an'><FaGithub className='mr-2' />GitHub</a>
          <a className='text-white mt-2 flex flex-row cursor-pointer hover:text-violet-600 items-center' href='https://www.instagram.com/ineffable._soul'><PiInstagramLogoFill className='mr-2' />Instagram</a>
          <a className='text-white mt-2 flex flex-row cursor-pointer hover:text-violet-600 items-center' href='mailto:aakash.n0dev@gmail.com<'><MdEmail className='mr-2' />aakash.n0dev@gmail.com</a>
          <a className='text-white mt-2 flex flex-row cursor-pointer hover:text-violet-600 items-center' href='mailto:aakash12072002@gmail.com'><MdMarkEmailUnread className='mr-2' />aakash12072002@gmail.com</a>
          <a className='text-white mt-2 flex flex-row cursor-pointer hover:text-violet-600 items-center' href='tel:+8098001433'><FaPhone className='mr-2' />+91 8098001433</a>
        </div>
      </div>
      <div className='lg:flex h-[20rem] w-[20rem] m-[3rem] hidden '> <img className='rounded-full object-cover' src={fifth} alt="" /> </div>
      <div><p className='text-white lg:mt-[40%] mt-[100%] lg:text-3xl text-md font-Sugiyama mr-[1rem] lg:mr-[6rem]'>"He who laughs most, Learns best"</p></div>
      </div>

    </footer>
  )
}

export default Footer