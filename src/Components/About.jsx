import React from 'react'
import people from "../images/frame-146.png"
import {Element} from "react-scroll"

const About = () => {
  return (
    <Element name='about'>
    <div className='bg-[black] py-24 cursor-pointer'>
        <div className='flex md:flex-col w-[80%] md:w-[90%] mx-auto justify-between'>
        <div className='w-[45%] md:w-[100%]'>
            <img src={people} alt="people" />
        </div>
        <div className='w-[45%] md:mt-10 md:text-center md:w-[100%]'>
            <h2 className='text-[#64CCC5] text-5xl'>About Us</h2>
            <p className='text-white text-xl mt-10 mb-20'>
            Transform your digital presence with our top-tier web development agency. We specialize in creating bespoke solutions that seamlessly integrate innovation and functionality. From captivating designs to robust backend development, our expert team ensures your online footprint commands attention. Let us navigate the digital landscape for you, crafting a user-friendly and impactful website that translates your vision into reality. Stay ahead in the dynamic web realm with our cutting-edge solutions, redefining your online identity and driving tangible results for your business.
            </p>
            <section>
            <a href="http://wa.me/447450685689">
            <div className=' w-[30%] text-center py-3 rounded-md bg-white md:w-[70%] md:mb-10'>
            Contact Us
            </div>
            </a>
        </section>
        </div>
        </div>
    </div>
    </Element>
  )
}

export default About