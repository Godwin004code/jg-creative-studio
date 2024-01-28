import React from 'react'
import stars from "../images/ornament-261.png"
import devs from "../images/ellipse-10.png"
import { Element } from 'react-scroll'

const Hero = () => {
  return (
    <Element name="home">
    <section className='bg-[black] w-[100%] md:flex-col flex pt-[0px] pb-[80px]'>
        <img src={stars} alt="" className='h-[200px] md:hidden' />
        <div className='second-section md:w-[90%] md:mx-auto md:mt-[-30px]'>
            <h2 className='text-white text-6xl'>Ready to elevate <span>Business Growth</span> to the new heights?</h2>
            <p className='text-white mt-6 mb-12'>
            Empower your online presence with cutting-edge web development solutions. Our expertise propels your business growth, taking it to unprecedented levels of success.
            </p>
            <a className='md:hidden' href="http://wa.me/447450685689">
            <div className=' w-[30%] text-center py-3 rounded-md bg-white md:w-[70%] md:mb-10'>
            Contact Us
            </div>
            </a>
        </div>
        <div className='third-section md:w-[90%] md:mx-auto'>
            <div className='ringer'>
            <img src={devs} alt="developers" />
            </div>
            
        </div>
        <a className='hidden md:block md:mt-16 ' href="http://wa.me/447450685689">
            <div className=' w-[30%] md:mx-auto text-center py-3 rounded-md bg-white md:w-[70%] md:mb-10'>
            Contact Us
            </div>
            </a>
    </section>
    </Element>
  )
}

export default Hero