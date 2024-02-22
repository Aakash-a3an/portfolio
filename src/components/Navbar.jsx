import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { Link } from 'react-scroll'; 


const Navbar = () => {
  return (
    <nav className="navbar h-[5rem] w-[100vw] mx-auto px-4 py-8 flex items-center justify-between max-w-[75rem] sticky top-0 z-20 bg-white">
      <h1 className='font-Sugiyama lg:text-5xl text-4xl cursor-pointer'><Link to='intro' spy={true} smooth={true} offset={-100} duration={500} >Aakash</Link></h1>
      <div className='font-semibold lg:text-md text-sm font-Poppins '> 
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer text-gray-500  hover:text-violet-600 transition-all duration-300'>Home</Link> 
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-40} duration={500} className='lg:m-20 m-4 cursor-pointer text-gray-500 hover:text-violet-600 transition-all duration-300'>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer  text-gray-500 hover:text-violet-600 transition-all duration-300'>Projects</Link>
      </div>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500}><button className='flex hover:bg-violet-400 bg-black text-white transition duration-200 rounded-[5rem] lg:px-3 px-2 lg:py-2 py-1 lg:pr-4 pr-4 items-center border  border-gray-300 hover:border-transparent hover:shadow-md dark:hover:shadow-xl font-semibold'> <FiMessageSquare className='m-2'/>
      Contact me</button></Link>
    </nav>
  )
}

export default Navbar;