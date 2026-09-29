import React from 'react'
import ServicesBox from './ServicesBox.jsx';

const Services = () => {
  return (
    <>
    
     <section className='bg-stone-100 dark:bg-gray-900 dark:text-white py-10'>
        <div className='container mx-auto flex flex-col items-center'>
            <h1 className='inline-block text-3xl text-center font-bold mb-3 border-b-2 border-orange-400 pb-1'>Services</h1>
            <p className='text-slate-500 text-center text-sm md:w-[50%] mx-auto'>I build modern, responsive, and user-friendly websites using React JS and modern frontend technologies. My goal is to create clean interfaces that work smoothly across all devices.</p>
        </div>
        {/* {Services Card} */}

            <ServicesBox />
        
     </section>
    
    
    </>
  )
}

export default Services