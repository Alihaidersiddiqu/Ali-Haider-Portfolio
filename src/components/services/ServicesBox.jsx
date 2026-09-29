import React from 'react'
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import 
{ MdDevices } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";

const Services = [
  {
    name: "Frontend Development",
    description:
      "I build clean and responsive websites using HTML, CSS, JavaScript, and modern frontend development practices.",
    image: "https://picsum.photos/200/300",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },

  {
    name: "React JS Development",
    description:
      "I create interactive web interfaces using React JS, reusable components, React Hooks, and React Router.",
    image: "https://picsum.photos/200/301",
    icon: <FaReact className="text-4xl" />,
    bgColor: "bg-cyan-500/70",
  },

  {
    name: "Responsive Web Design",
    description:
      "I create websites that adapt properly to mobile, tablet, and desktop screens for a better user experience.",
    image: "https://picsum.photos/200/302",
    icon: <MdDevices className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },

  {
    name: "Tailwind CSS",
    description:
      "I use Tailwind CSS to create modern, clean, and responsive user interfaces with reusable utility classes.",
    image: "https://picsum.photos/200/303",
    icon: <SiTailwindcss className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];


const ServicesBox = () => {

  return (

    <section id='services' className='my-10 container mx-auto px-5'>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

        {Services.map(({ name, description, image, icon, bgColor }) => {

          return (

            <div
              key={name}
              style={{ backgroundImage: `url(${image})` }}
              className={`${bgColor} rounded-xl text-white bg-cover bg-center bg-no-repeat bg-blend-overlay`}
            >

              <div className='p-6 md:p-12 lg:p-16 backdrop-blur-sm space-y-3 rounded-xl'>

                {icon}

                <h1 className='text-2xl font-bold'>
                  {name}
                </h1>

                <p className='text-sm md:text-base leading-6'>
                  {description}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </section>

  )

}

export default ServicesBox

