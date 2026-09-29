import React from 'react'
import personImg from '../../assets/person2.png'

const Hero = () => {
  return (
    <>
      <main className='w-full bg-stone-100 dark:bg-gray-900 dark:text-white'>
        <div className='container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py0 mx-auto sm:h-[700px]'>
          <div>
            <div className='space-y-2 grid justify-items-center sm:justify-items-start'>
              <p className='uppercase'>Hello</p>
              <p className='text-4xl md:text-6xl text-black/80 font-bold text-center dark:text-white'>I'm Ali Haider Siddiqui</p><br />
              <p className='text-3xl text-gray-700 dark:text-white'>React Js Developer</p>
              <p className='text-black/75 dark:text-white/70 text-center sm:text-left'>
                I’m a passionate Frontend Developer focused on building modern,
                responsive, and user-friendly web applications using React JS,
                JavaScript, HTML, CSS, and Tailwind CSS.
              </p>

              <a className='inline-block bg-orange-500 text-white cursor-pointer hover:bg-orange-300 px-4 py-2 rounded-lg my-3' href="mailto:abc@gmail.com">Hire me</a>
            </div>
          </div>
          {/* {image container} */}
          <div>
            <img src={personImg} alt="Not Found" className='w-full md:max-w-lg mx-auto' />
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero