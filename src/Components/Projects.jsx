import React from 'react'
import Project1 from "../images/Screenshot 2024-01-27 at 16.39.20.png"
import Project2 from "../images/Screenshot 2024-01-27 at 16.40.24.png"
import Project3 from "../images/Screenshot 2024-01-27 at 16.41.01.png"
import Project4 from "../images/Screenshot 2024-01-27 at 16.41.31.png"
import Project5 from "../images/Screenshot 2024-01-01 at 21.27.57.png"
import Project6 from "../images/Screenshot 2024-01-03 at 17.43.34.png"
import Project7 from "../images/Screenshot 2024-01-03 at 17.48.07.png"
import Project8 from "../images/Screenshot 2024-01-04 at 19.45.32.png"
import Project9 from "../images/Screenshot 2024-01-04 at 20.39.22.png"
import { Element } from "react-scroll"



const Projects = () => {
  return (
    <Element name='projects'>
    <div className='py-32 md:pb-0'>
        <h2 className='text-center text-5xl  mb-16'>Recent Projects</h2>
        <section className='flex justify-between w-[80%] md:flex-col md:w-[90%] mx-auto mb-10'>
            <div>
                <div>
                    <img src={Project6} alt="" />
                </div>
                <div>
                    <h2 className='mt-4 text-xl'>
                        <a href="#" className='underline'>Paramounthamptons</a>
                    </h2>
                </div>
            </div>
            <div className='mx-6 md:mx-0 md:my-10'>
                <div>
                    <img src={Project2} alt="" />
                </div>
                <div>
                    <h2 className='mt-4 text-xl'>
                    <a href="#" className='underline'>Carters Collection</a>
                    </h2>
                </div>
            </div>
            <div>
                <div>
                    <img src={Project9} alt="" />
                </div>
                <div>
                    <h2 className='mt-4 text-xl'><a href="#" className='underline'>FindMyCleaner</a></h2>
                </div>
            </div>
        </section>
        <section className='flex justify-between w-[80%] md:flex-col md:w-[90%] mx-auto mb-10'>
            <div>
                <div>
                    <img  src={Project1} alt="" />
                </div>
                <div>
                    <h2 className='mt-4 text-xl'>
                        <a href="#" className='underline'>Gadget Sales</a>
                    </h2>
                </div>
            </div>
            <div className='mx-6 md:mx-0 md:my-10'>
                <div>
                    <img  src={Project7} alt="" />
                </div>
                <div>
                    <h2 className='mt-0 text-xl'>
                    <a href="#" className='underline'>HomieWorld</a>
                    </h2>
                </div>
            </div>
            <div>
                <div>
                    <img  src={Project8} alt="" />
                </div>
                <div>
                    <h2 className='mt-0 text-xl'><a href="#" className='underline'>Tempho Inc</a></h2>
                </div>
            </div>
        </section>
        <section className='flex justify-between w-[80%] md:flex-col md:w-[90%] mx-auto mb-10'>
            <div>
                <div>
                    <img src={Project3} alt="" />
                </div>
                <div>
                    <h2 className='mt-4 text-xl'>
                        <a href="#" className='underline'>Phomemo</a>
                    </h2>
                </div>
            </div>
            <div className='mx-6 md:mx-0 md:my-10'>
                <div>
                    <img src={Project5} alt="" />
                </div>
                <div>
                    <h2 className='mt-0 text-xl'>
                    <a href="#" className='underline'>Tempho Inc landing page</a>
                    </h2>
                </div>
            </div>
            <div>
                <div>
                    <img src={Project4} alt="" />
                </div>
                <div>
                    <h2 className='mt-4 text-xl'><a href="#" className='underline'>Wild in training clothing</a></h2>
                </div>
            </div>
        </section>
    </div>
    </Element>
  )
}

export default Projects