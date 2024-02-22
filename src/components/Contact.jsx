import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_86hm3ln', 'template_cccsskn', form.current, { publicKey: 'K5XqMVkVP8t_VlXep', })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Message sent!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <div id="contact" className='flex justify-center flex-col items-center h-[100vh] w-[vw]'>
      <div className='lg:h-[29rem] h-[32rem] lg:w-[60rem] w-[30rem] flex justify-center rounded-2xl flex-col items-center bg-[#eeb4ff] shadow-xl'>
      <h1 className='lg:text-4xl text-3xl mb-4  text-white font-Poppins font-semibold '>Contact Me</h1>
      <span className='lg:mx-4 mx-10 lg:font-medium font-normal text-white'>Please fill out the form below to discuss any work opportunities.</span>
      <form className='flex flex-col w-[90vw] lg:max-w-[60rem] max-w-[25rem] font-medium justify-center items-center' ref={form} onSubmit={sendEmail}>
        <input className='m-4 rounded-md bg-white border-none w-[100%] p-2 max-w-[29rem]' type="text" placeholder='Your Name' name='from_name' />
        <input className='m-4 rounded-md bg-white border-none w-[100%] p-2 max-w-[29rem]' type="email" placeholder='Your Email' name='from_email' />
        <textarea className='m-4 rounded-md bg-white border-none w-[100%] p-2 max-w-[29rem]' name="message" rows="5" placeholder='Your Message' ></textarea>
        <button className='bg-[#9e5ed0] shadow-xl text-white font-Poppins font-semibold h-8 w-48 rounded-lg ' value='send' type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact