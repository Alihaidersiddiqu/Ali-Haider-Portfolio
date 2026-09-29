import React, { useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
import { MdDarkMode} from "react-icons/md";
import { useState } from 'react';

const navMenus = [
    {
        name: "Home",
        link: "/home"
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Services",
        link: "/services",
    },
    {
        name: "Contact",
        link: "/link",
    },
];

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    useEffect(() => {
       if(theme=='dark'){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
       }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
       }
    },[theme])

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <nav className='bg-stone-100 dark:bg-gray-900 dark:text-white'>
        <div className='container mx-auto flex justify-between items-center px-4 py-3 sm:py-0'>
            <h1 className='text-3xl text-orange-400 font-bold'>Portfolio</h1>
            {/* Desktop menu */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-4'>
                    {navMenus.map((menu) => (
                        <li>
                            <a className='text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer' href={menu.link}>{menu.name}</a>
                        </li>
                    ))}
                
                {
                        theme == "dark" ? (
                         <MdDarkMode className='text-2xl dark:text-white' onClick={() =>setTheme("light")} />
                        ) : (
                          <MdDarkMode className='text-2xl cursor-pointer dark:text-white' onClick={() =>setTheme("dark")} />
                        )
                    }
                    </ul>
            </div>
            {/* Mobile menu */}
            <div className='block sm:hidden'>

                <div className='flex items-center gap-4'>
                    {
                        theme == "dark" ? (
                         <MdDarkMode className='text-2xl dark:text-white' onClick={() =>setTheme("light")} />
                        ) : (
                          <MdDarkMode className='text-2xl cursor-pointer dark:text-white' onClick={() =>setTheme("dark")} />
                        )
                    }
                         
                         <FiMenu className='text-2xl cursor-pointer dark:text-white'
                              onClick={toggleMenu}
                              />
                
                </div>
                {
                    showMenu && 
                    <div className='fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl z-10 py-10'>
                        <ul className='flex flex-col items-center gap-4'>
                            {
                                navMenus.map((menu) => (
                                    <li key={menu.name}>
                                        <a className='text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer' href={menu.link}>{menu.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar
