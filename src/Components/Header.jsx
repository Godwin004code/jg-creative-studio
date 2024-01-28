import React from 'react'
import '../scss/header.scss'
import Logo from "../images/Free_Sample_By_Wix (1).jpg"
import { useRef, useEffect } from 'react'
import {Link} from "react-scroll"

const Nav = () => {
 const menuRef = useRef();
 const iconRef = useRef();
  const handleClick = () => {
    console.log("clicked");
    menuRef.current.classList.toggle("active")
    iconRef.current.classList.toggle("active")
    console.log(menuRef.current);
  }
 
  return (
    <header className=''>
        <section className='header-wrapper'>
       
            <img className=' mt-[-50px]' src={Logo} alt="logo" />
    
        <nav className='nav x'>
            <ul className='mt-3'>
            
                <li>
                    <Link to='about' spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} className='cursor-pointer'>About Us</Link>
                </li>
                <li>
                    <Link smooth={true} 
      offset={50} 
      duration={500} className='cursor-pointer' to='process'>Our Process</Link>
                </li>
                <li>
                    <Link smooth={true} 
      offset={0} 
      duration={500} className='cursor-pointer' to='projects'>Projects</Link>
                </li>
               
            </ul>
        </nav>
        <a href="http://wa.me/447450685689">
        <section className='mt-5'>
            <button>Contact Us</button>
        </section>
        </a>
        <section className='mobile__menu'>
              
  <label for="menu-toggle" className="menu-icon md:mt-7" ref={iconRef} onClick={handleClick}>
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </label>

                </section>
        </section>
        <section className='mobile__nav' ref={menuRef}>
        <nav className='menu'>
            <ul>
                <li>
                    <Link to='about' spy={true} 
      smooth={true} 
      offset={0} 
      duration={500}>About Us</Link>
                    </li>
                    <li>
                    <Link smooth={true} 
      offset={50} 
      duration={500} className='cursor-pointer' to='process'>Our Process</Link>
                </li>
                <li>
                    <Link smooth={true} 
      offset={0} 
      duration={500} className='cursor-pointer' to='projects'>Projects</Link>
                </li>
                <li className='hidden'>Testimonial</li>
            </ul>
        </nav>
        <section className='w-[100%] mx-auto'>
        <a className='w-[100%] mx-auto' href="http://wa.me/447450685689">
            <button className='w-[100%] mx-auto'>
                Contact Us
            </button>
            </a>
        </section>
        </section>
    </header>
  )
}

export default Nav