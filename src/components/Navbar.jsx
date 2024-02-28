import React, { useState } from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { Link } from 'react-scroll'; 
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";




const Navbar = () => {

  const [nav, setNav] = useState(false)

  return (
    <nav className="navbar lg:h-[5rem] ml-3 h-[4rem] w-[100vw] mx-auto px-4 py-8 flex items-center justify-between max-w-[75rem]  sticky top-0 z-20 bg-white">
      <h1 className='font-Sugiyama lg:text-5xl text-3xl cursor-pointer'><Link to='intro' spy={true} smooth={true} offset={-100} duration={500} >Aakash</Link></h1>
      <div className='md:flex md:flex-row hidden font-semibold lg:text-md text-sm font-Poppins '> 
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer text-gray-500  hover:text-violet-600 transition-all duration-300'>Home</Link> 
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-40} duration={500} className='mx-16 cursor-pointer text-gray-500 hover:text-violet-600 transition-all duration-300'>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer  text-gray-500 hover:text-violet-600 transition-all duration-300'>Projects</Link>
      </div>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-40} duration={500}><button className='md:flex md:flex-row hidden bg-black text-white transition duration-200 rounded-full lg:px-3 lg:py-2 lg:pr-4 items-center border  border-gray-300 hover:border-transparent hover:shadow-md dark:hover:shadow-xl font-semibold'> <FiMessageSquare className='m-2'/>
      Contact me</button></Link>
      <div onClick={ ()=> setNav(!nav)} className='cursor-pointer z-50 text-gray-500 hover:text-violet-600 transition-all duration-300 mr-10 md:hidden'> 
        {nav ? <FaTimes size={30} /> : <IoMenu size={30} />}
      </div>

        {nav && (
          <div className='flex flex-col justify-center items-center absolute top-[5rem] right-[3rem] w-[15rem] h-[20rem] rounded-2xl bg-black text-white font-Poppins font-semibold'> 
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='px-4 cursor-pointer py-6 text-xl' onClick={() => setNav(!nav)}>Home</Link> 
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-40} duration={500} className='px-4 cursor-pointer py-6 text-xl' onClick={() => setNav(!nav)}>About</Link>
            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='px-4 cursor-pointer py-6 text-xl' onClick={() => setNav(!nav)}>Projects</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='px-4 cursor-pointer py-6 text-xl' onClick={() => setNav(!nav)}>Contact</Link>
          </div>
        )
        }

        
      
    </nav>
  )
}

export default Navbar;