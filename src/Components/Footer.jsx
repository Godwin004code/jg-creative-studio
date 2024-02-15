
import React from 'react'
import Logo from "../images/Free_Sample_By_Wix (1).jpg"
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-[black] w-[100%] py-20'>
<section className='w-[80%] mx-auto flex md:flex-col'>
<div>
<img className=' mt-[-50px]' src={Logo} alt="logo" />
    <p className='text-white w-[40%] mb-10 md:w-[100%] mt-[-60px]'>Empower your online presence with cutting-edge web development solutions. Our expertise propels your business growth, taking it to unprecedented levels of success.</p>
</div>
<div>
    <h2 className='text-white text-lg font-medium'>Sections</h2>
    <ul>
        <li className='text-white'>
            <Link spy={true} 
      smooth={true} 
      offset={-60} 
      duration={500} className='cursor-pointer' to='home'>Home</Link>
            </li>
        <li className='text-white'>
            <Link spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} className='cursor-pointer' to='about'>About</Link>
        </li>
        <li className='text-white'>
            <Link spy={true} 
      smooth={true} 
      offset={0} 
      duration={500} className='cursor-pointer' to='projects'>Projects</Link>
        </li>
    </ul>
</div>
</section>
<section style={{borderTop: "1px solid white"}} className='md:flex-col flex pt-5 justify-between w-[80%] mx-auto md:mt-5'>
    <div className='md:mb-5'>
        <h2 className='text-white'>Copyright by</h2>
        <p className='text-white'>JG Creative Studio 2024</p>
    </div>
    <div className='md:mb-5'>
        <h2 className='text-white'>Design Credit</h2>
        <p className='text-white'>designer</p>
    </div>
    <div className='md:mb-5'>
        <h2 className='text-white'>Contact Us</h2>
        <p className='text-white'>
            <a href="http://wa.me/447450685689">+44 7450 685689</a>
            </p>
        <p className='text-white'>
            <a href="http://wa.me/2349070797027"> +234 903 042 5674</a>
           </p>
    </div>
    <div className='md:mb-5'>
        <h2 className='text-white'>Address</h2>
        <p className='text-white'>Phillimore Terrace, Allen St, London W8 6BJ, UK</p>
    </div>
    <div className='flex '>
        <div className='bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center mr-2'>
        <svg  xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
  <path d="M6.76 22.6H7.24C8.13994 22.6 8.5899 22.6 8.90534 22.3708C9.00722 22.2968 9.09681 22.2072 9.17082 22.1053C9.4 21.7899 9.4 21.3399 9.4 20.44V13.6H10.9C11.7427 13.6 12.164 13.6 12.4667 13.3978C12.5977 13.3102 12.7102 13.1977 12.7978 13.0667C13 12.764 13 12.3427 13 11.5C13 10.6573 13 10.236 12.7978 9.93332C12.7102 9.80229 12.5977 9.68979 12.4667 9.60224C12.164 9.4 11.7427 9.4 10.9 9.4H9.4V7C9.4 6.44087 9.4 6.16131 9.49134 5.94078C9.61314 5.64675 9.84675 5.41314 10.1408 5.29134C10.3613 5.2 10.6409 5.2 11.2 5.2C11.7591 5.2 12.0387 5.2 12.2592 5.10866C12.5533 4.98686 12.7869 4.75325 12.9087 4.45922C13 4.23869 13 3.95913 13 3.4V2.86667C13 2.24487 13 1.93397 12.8876 1.69286C12.7683 1.43717 12.5628 1.23166 12.3071 1.11243C12.066 1 11.7551 1 11.1333 1C8.95703 1 7.86888 1 7.02501 1.39351C6.13009 1.81081 5.41081 2.53009 4.99351 3.425C4.6 4.26888 4.6 5.35703 4.6 7.53333V9.4H3.1C2.25732 9.4 1.83598 9.4 1.53332 9.60224C1.40229 9.68979 1.28979 9.80229 1.20224 9.93332C1 10.236 1 10.6573 1 11.5C1 12.3427 1 12.764 1.20224 13.0667C1.28979 13.1977 1.40229 13.3102 1.53332 13.3978C1.83598 13.6 2.25732 13.6 3.1 13.6H4.6V20.44C4.6 21.3399 4.6 21.7899 4.82918 22.1053C4.9032 22.2072 4.99278 22.2968 5.09466 22.3708C5.4101 22.6 5.86006 22.6 6.76 22.6Z" stroke="#0C0C0C" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
        </div>
        <div className='bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M20.0419 5.44278C20.0419 5.79333 19.7577 6.07751 19.4071 6.07751C19.0566 6.07751 18.7724 5.79333 18.7724 5.44278C18.7724 5.09224 19.0566 4.80806 19.4071 4.80806C19.7577 4.80806 20.0419 5.09224 20.0419 5.44278Z" fill="#292556" stroke="#0C0C0C" stroke-width="1.26944"/>
  <path d="M1 10.14C1 6.33194 1 4.42791 1.96977 3.09313C2.28296 2.66206 2.66206 2.28296 3.09313 1.96977C4.42791 1 6.33194 1 10.14 1H14.71C18.5181 1 20.4221 1 21.7569 1.96977C22.1879 2.28296 22.567 2.66206 22.8802 3.09313C23.85 4.42791 23.85 6.33194 23.85 10.14V14.71C23.85 18.5181 23.85 20.4221 22.8802 21.7569C22.567 22.1879 22.1879 22.567 21.7569 22.8802C20.4221 23.85 18.5181 23.85 14.71 23.85H10.14C6.33194 23.85 4.42791 23.85 3.09313 22.8802C2.66206 22.567 2.28296 22.1879 1.96977 21.7569C1 20.4221 1 18.5181 1 14.71V10.14Z" stroke="#0C0C0C" stroke-width="1.90417" stroke-linejoin="round"/>
  <path d="M17.5028 12.425C17.5028 15.2294 15.2294 17.5028 12.425 17.5028C9.62062 17.5028 7.34722 15.2294 7.34722 12.425C7.34722 9.62062 9.62062 7.34722 12.425 7.34722C15.2294 7.34722 17.5028 9.62062 17.5028 12.425Z" stroke="#0C0C0C" stroke-width="1.90417" stroke-linejoin="round"/>
</svg>
        </div>
    </div>

</section>
    </footer>
  )
}

export default Footer