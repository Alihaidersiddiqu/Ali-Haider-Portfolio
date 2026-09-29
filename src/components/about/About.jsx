import React from 'react'
import resume from '../../assets/Ali haider-resume.pdf'

const About = () => {
  return (
    <>
     <section id='about' className='bg-white dark:bg-slate-800 dark:text-white'>
         
        <div className='container md:w-[70%] py-10'>
            <div className='grid items-center gap-4 grid-cols-1 sm:grid-cols-2'>
             
             <div className='relative font-bold'>
                <div className='text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700'>
                    ABOUT
                </div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>About me</h1>
             </div>
             <div className='text-slate-500 text-sm md:text-base text-center'>
                <p>I’m a passionate Frontend Developer with a strong interest in building modern, responsive, and user-friendly websites. I work mainly with React JS, JavaScript, HTML, CSS, and Tailwind CSS.</p> <br />
                <p>I enjoy creating clean and interactive user interfaces and improving my development skills by working on real-world projects. I’m currently focused on becoming a better React Developer and learning modern frontend development practices.</p>
                <div>
                    <a className='inline-block bg-orange-500 text-white cursor-pointer hover:bg-orange-300 px-4 py-2 my-5 mr-6 rounded-lg' href={resume} download="Ali haider-resume.pdf">Download Resume</a>
                    <a className='inline-block ring-2 ring-orange-400 inset-0 text-orange-400 cursor-pointer hover:bg-orange-300 hover:text-white px-4 py-2 rounded-lg my-3' href="mailto:alihaiid543@gmail.com">Email</a>
                </div>
             </div>

            </div>
        </div>
        
        </section> 
    </>
  )
}

export default About
