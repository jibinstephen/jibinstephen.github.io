'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Behance, InstagramIcon, LinkedInIcon } from '../Hook/Svgicons'




const NAV_ITEMS= [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },

    {
      label: "Skills",
      page: "skills",
    },
    {
      label: "Projects",
      page: "projects",
    },
    {
      label: "Contact",
      page: "contact",
    },
]
export const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


  return (
    <header className='flex items-center justify-between bg-dark py-6 px-8 sticky top-0 relative z-10'>
            {/* <Logo/> */}
            <nav className='hidden md:flex gap-8 pl-14'>

            </nav>

            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border m-2"
                onClick={() => setNavbar(!navbar)}
              >
              </button>
            </div>

            <nav className='hidden md:flex gap-4 item-top justify-center'>
            {/* <a href="https://drive.google.com/uc?export=download&id=1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh">
               <button  onClick={() => openInNewTab("https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing")} className=" bg-blue-600 rounded-sm py-1 rounded-full-50% hover:bg-purple-700 hover:text-white transition duration-200
                                                          font-playfair px-2 bg-red">
                <h4> Resume </h4>
                   </button>
               </a> */}

               <a href='https://www.instagram.com/_chilla_art/' whileHover={{y:-2}}  target={'_blank' }><InstagramIcon className={"text-white w-1rem w-1rem"}/></a>
              <a href='https://www.linkedin.com/in/jibin-stephen-2739071b7' whileHover={{y:-2}}  target={'_blank' }><LinkedInIcon className={"text-white w-1rem w-1rem"}/></a>

             <a href='https://www.behance.net/jibinstephen' whileHover={{y:-2}} target={'_blank' }> <Behance className={"text-white"}/></a>


            </nav>

            <div className='absolute top-20 left-0 bg-dark w-full md:hidden px-4 '>

          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8  md:flex md:space-x-6 md:space-y-0"
             onClick={() => setNavbar(!navbar)}
            >



             <nav className='flex md:hidden gap-4 item-top justify-center'>

            {/* <a href="https://drive.google.com/uc?export=download&id=1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh">
               <button onClick={() => openInNewTab("https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing")} className=" bg-blue-600 rounded-sm py-1 rounded-full-50% hover:bg-purple-700 hover:text-white transition duration-200
                                                          font-playfair px-2 bg-red">
                <h4> Resume </h4>
                   </button>
               </a> */}

               <a href='https://www.instagram.com/_chilla_art/' whileHover={{y:-2}}  target={'_blank' }><InstagramIcon className={"text-white w-1rem w-1rem"}/></a>


              <a href='https://www.linkedin.com/in/jibin-stephen-2739071b7' whileHover={{y:-2}}  target={'_blank' }><LinkedInIcon className={"text-white w-1rem w-1rem"}/></a>

             <a href='https://www.behance.net/jibinstephen' whileHover={{y:-2}} target={'_blank' }> <Behance className={"text-white"}/></a>


            </nav>


            </div>

          </div>

        </div>

    </header>
  )
}