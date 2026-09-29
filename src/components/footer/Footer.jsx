import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white py-8'>

      <div className='container mx-auto px-5 text-center'>

        <h2 className='text-2xl font-bold text-orange-400'>
          Ali Haider Siddiqui
        </h2>

        <p className='text-gray-400 text-sm mt-2'>
          React JS Developer
        </p>

        <div className='flex justify-center gap-5 mt-5'>

          <a
            href='https://github.com/Alihaidersiddiqu'
            target='_blank'
            rel='noreferrer'
            className='text-2xl hover:text-orange-400 transition'
          >
            <FaGithub />
          </a>

          <a
            href='#'
            className='text-2xl hover:text-orange-400 transition'
          >
            <FaLinkedin />
          </a>

        </div>

        <div className='border-t border-gray-700 mt-6 pt-5'>

          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Ali Haider Siddiqui. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer

