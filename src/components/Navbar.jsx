import React, { useState } from 'react'
import useTheme from '../context/context'

// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const Navbar = () => {
    const { themeMode, lighttheme, darktheme } = useTheme();

    const [click, setclick] = useState(false);

    const handleClick = () => {
        setclick(!click)
    }


    const onChangeBtn = (e) => {
        if (themeMode === "light") {
            darktheme();
            e.target.className = e.target.className.replace('ri-sun-foggy-fill', 'ri-moon-fill')
        } else {
            lighttheme();
            e.target.className = e.target.className.replace('ri-moon-fill', 'ri-sun-foggy-fill')
        }
    }

    useGSAP(() => {

        // gsap.to(".box", { x: 360 }); 
        gsap.from(".logo , .tooglemode, .one, .two, .three, .four , .buttond", {
            y: -360,
            opacity: 0,
            stagger: 0.2,
            duration: 1.8,
            ease: 'power3.out'

        });


    })

    return (
        <header className="text-gray-600 body-font">
            <div className="nav container mx-auto flex justify-around p-5 items-center flex-row">
                <div className='s-name'>
                    <a className="logo flex title-font font-medium items-center text-gray-900 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.63611 12.7071L7.46454 14.5355L8.87875 13.1213L7.05033 11.2929L8.46454 9.87869L10.293 11.7071L11.7072 10.2929L9.87875 8.46448L11.293 7.05026L13.1214 8.87869L14.5356 7.46448L12.7072 5.63605L15.5356 2.80762C15.9261 2.4171 16.5593 2.4171 16.9498 2.80762L21.1925 7.05026C21.583 7.44079 21.583 8.07395 21.1925 8.46448L8.46454 21.1924C8.07401 21.5829 7.44085 21.5829 7.05033 21.1924L2.80768 16.9498C2.41716 16.5592 2.41716 15.9261 2.80768 15.5355L5.63611 12.7071ZM14.1214 18.3635L18.364 14.1208L20.9997 16.7565V20.9999H16.7578L14.1214 18.3635ZM5.63597 9.87806L2.80754 7.04963C2.41702 6.65911 2.41702 6.02594 2.80754 5.63542L5.63597 2.80699C6.02649 2.41647 6.65966 2.41647 7.05018 2.80699L9.87861 5.63542L5.63597 9.87806Z"></path></svg>
                        <span className="ml-3 text-xl dark:text-white">SQUARE-X</span>
                    </a>
                </div>
                <div className='v-name'>
                    <nav className="flex items-center text-base justify-center">
                        {/* darkmodetoogle */}
                        <div className='tooglemode'>
                            <i onClick={onChangeBtn} className="ri-sun-foggy-fill text-xl cursor-pointer mr-5 hover:text-gray-900 dark:text-white"></i>
                        </div>
                        <div className='buttons'>
                            {click ? <div className='clickB block md:hidden'>
                                <ul className='flex flex-col absolute top-[4.8rem] border border-slate-50 bg-slate-100 p-3 right-6 rounded-md mx-auto z-10'>
                                    <li>
                                        <a className=" cursor-pointer hover:text-gray-900 dark:text-white ">Home</a>
                                    </li>
                                    <li>
                                        <a className=" cursor-pointer hover:text-gray-900 dark:text-white">Support</a>
                                    </li>
                                    <li>
                                        <a className=" cursor-pointer hover:text-gray-900 dark:text-white">Contact US</a>
                                    </li>
                                    <li>
                                        <a className=" cursor-pointer hover:text-gray-900 dark:text-white">Help!</a>
                                    </li>
                                </ul>
                            </div> : ""}

                            <div className="blNav hidden md:block">
                                <div className=''>
                                    <ul className='flex'>
                                        <li className='one'>
                                            <a className="mr-5 cursor-pointer hover:text-gray-900 dark:text-white">Home</a>
                                        </li>
                                        <li className='two'>
                                            <a className="mr-5 cursor-pointer hover:text-gray-900 dark:text-white">Support</a>
                                        </li>
                                        <li className='three'>
                                            <a className="mr-5 cursor-pointer hover:text-gray-900 dark:text-white">Contact US</a>
                                        </li>
                                        <li className='four'>
                                            <a className="mr-5 cursor-pointer hover:text-gray-900 dark:text-white">Help!</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <button className=' md:hidden block transition relative z-10' onClick={handleClick}>
                                {click ? <i className="ri-close-line dark:text-white "></i> : <i className="ri-menu-3-line"></i>}
                            </button>
                        </div>
                    </nav>
                </div>

            </div >
        </header >


    )
}

export default Navbar
