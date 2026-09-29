import React from 'react'

const Contact = () => {

  return (

    <section
      id='contact'
      className='bg-stone-100 dark:bg-gray-900 dark:text-white py-12 sm:py-16'
    >

      <div className='container mx-auto px-5 sm:px-6 md:w-[70%]'>

        {/* Heading */}
        <div className='relative text-center mb-10 sm:mb-12'>

          <div className='text-5xl sm:text-6xl md:text-8xl font-bold text-black/5 dark:text-gray-700'>
            CONTACT
          </div>

          <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap'>
            Contact Me
          </h1>

        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14'>


          {/* Left Side */}
          <div className='space-y-5 text-center md:text-left'>

            <h2 className='text-2xl sm:text-3xl font-bold'>
              Let's Work Together
            </h2>

            <p className='text-slate-500 dark:text-gray-300 text-sm sm:text-base leading-7'>
              Have a project in mind or want to work together?
              Feel free to contact me. I would be happy to discuss
              your project and help turn your ideas into reality.
            </p>


            {/* Email */}
            <div>

              <h3 className='font-bold mb-1'>
                Email
              </h3>

              <a
                href='mailto:alihaiid543@gmail.com'
                className='text-orange-500 hover:text-orange-300 break-all'
              >
                alihaiid543@gmail.com
              </a>

            </div>


            {/* Phone */}
            <div>

              <h3 className='font-bold mb-1'>
                Phone
              </h3>

              <a
                href='tel:03253026191'
                className='text-orange-500 hover:text-orange-300'
              >
                03253026191
              </a>

            </div>


            {/* Location */}
            <div>

              <h3 className='font-bold mb-1'>
                Location
              </h3>

              <p className='text-slate-500 dark:text-gray-300'>
                Karachi, Pakistan
              </p>

            </div>

          </div>


          {/* Right Side - Form */}
          <div>

            <form className='space-y-4'>

              <input
                type='text'
                placeholder='Your Name'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-orange-400'
              />


              <input
                type='email'
                placeholder='Your Email'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-orange-400'
              />


              <input
                type='text'
                placeholder='Subject'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-orange-400'
              />


              <textarea
                rows='5'
                placeholder='Your Message'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-orange-400 resize-none'
              ></textarea>


              <button
                type='submit'
                className='w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-300 transition cursor-pointer'
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Contact
