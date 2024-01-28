import React from 'react'
import { Element } from 'react-scroll'
const Services = () => {
  return (
    <Element name='services'>
    <div className='py-16'>
        <h2 className='text-[#64CCC5] text-3xl text-center uppercase font-semibold '>Our Services</h2>
        <h2 className='text-center text-5xl'>High-impact services for your business</h2>
        <section className='flex md:flex-col w-[70%] md:w-[90%] mx-auto mt-10'>
            <div className='bg-[#f4f4f4] p-8 service'>
                <div className='w-[50px] h-[50px] bg-black p-3 ico'>
                <svg className='w-[100%] h-[100%]'  xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <path d="M27.3491 12.0179C27.3491 13.826 25.8358 15.2918 23.9691 15.2918C22.1024 15.2918 20.5891 13.826 20.5891 12.0179C20.5891 10.2098 22.1024 8.74397 23.9691 8.74397C25.8358 8.74397 27.3491 10.2098 27.3491 12.0179Z" stroke="#FBFBFB" stroke-width="1.65"/>
  <path d="M14.7949 12.0179C14.7949 13.826 13.2816 15.2918 11.4149 15.2918C9.54817 15.2918 8.0349 13.826 8.0349 12.0179C8.0349 10.2098 9.54817 8.74397 11.4149 8.74397C13.2816 8.74397 14.7949 10.2098 14.7949 12.0179Z" stroke="#FBFBFB" stroke-width="1.65"/>
  <path d="M15.7606 23.2428C15.7606 25.0509 14.2473 26.5167 12.3806 26.5167C10.5139 26.5167 9.00061 25.0509 9.00061 23.2428C9.00061 21.4347 10.5139 19.9689 12.3806 19.9689C14.2473 19.9689 15.7606 21.4347 15.7606 23.2428Z" stroke="#FBFBFB" stroke-width="1.65"/>
  <path d="M33.9966 13.2085C33.7962 4.89327 21.706 -0.311968 12.9008 1.28864C4.09565 2.88925 -0.164172 11.5656 1.27492 19.9689C2.6741 28.1391 11.8977 34 17.692 34C23.4862 34 28.3148 31.1938 24.2409 27.8498C23.1075 26.9716 22.1844 25.8655 21.5353 24.608C20.5616 22.7217 22.3234 20.0288 24.4923 20.2139C28.894 20.5896 34.1529 19.6927 33.9966 13.2085Z" stroke="#FBFBFB" stroke-width="1.65"/>
</svg>
                </div>
                <h2 className='mt-7 text-xl font-semibold'>Web Design</h2>
                <p>We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.</p>
            </div>
            <div className='bg-[#f4f4f4] p-8 service mx-5 md:mx-0 md:my-5'>
                <div className='w-[50px] h-[50px] bg-black p-3 ico'>
                <svg fill='white' className='w-[100%] h-[100%]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                </div>
                <h2 className='mt-7 text-xl font-semibold'>Web Development</h2>
                <p>Crafting seamless online experiences: Expert in web, Shopify, and Bubble development for a digital presence that captivates and converts</p>
            </div>
            <div className='bg-[#f4f4f4] p-8 service'>
                <div className='w-[50px] h-[50px] bg-black p-3 ico'>
                <svg className='w-[100%] h-[100%]' xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="white">
  <path d="M11.3333 16.0521L7.55556 11.0347L9.29937 9.01843C10.1875 7.99159 10.6315 7.47816 11.2012 7.156C11.3894 7.04961 11.5863 6.95956 11.7899 6.88684C12.4062 6.66667 13.085 6.66667 14.4426 6.66667H17M7.43078 3.13952L3.97076 6.81579C2.29366 8.59771 1.45511 9.48867 1.24758 10.5644C1.18013 10.914 1.16245 11.2714 1.19505 11.6259C1.29536 12.7169 2.04185 13.6863 3.53483 15.6251L11.6123 26.1146C13.7973 28.952 14.8898 30.3708 16.3128 30.634C16.7671 30.718 17.2329 30.718 17.6872 30.634C19.1102 30.3708 20.2027 28.952 22.3877 26.1146L30.4652 15.6251C31.9582 13.6863 32.7046 12.7169 32.805 11.6259C32.8375 11.2714 32.8199 10.914 32.7524 10.5644C32.5449 9.48867 31.7063 8.59771 30.0292 6.81579L26.5692 3.13952C25.6885 2.20371 25.2481 1.73581 24.6993 1.44348C24.5178 1.34685 24.3288 1.26519 24.1341 1.19931C23.5451 1 22.9026 1 21.6175 1H12.3825C11.0974 1 10.4549 1 9.86587 1.19931C9.67117 1.26519 9.48217 1.34685 9.30075 1.44348C8.75192 1.73581 8.31154 2.20371 7.43078 3.13952Z" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h2 className='mt-7 text-xl font-semibold'>Web Maintenance</h2>
                <p>Ensure your website's peak performance with our expert web maintenance service – reliable, efficient, and hassle-free solutions for lasting excellence.</p>
            </div>
        </section>
    </div>
    </Element>
  )
}

export default Services