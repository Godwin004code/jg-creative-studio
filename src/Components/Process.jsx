import React from 'react'
import { Element } from 'react-scroll'

const Process = () => {
  return (
    <Element name='process'>
    <div className='pt-28'>
         <h2 className='text-[#64CCC5] text-3xl text-center'>Process</h2>
        <h2 className='text-center text-5xl'>Process that moves things forward</h2>
        <div className='flex mt-20 w-[90%] mx-auto md:flex-col'>
       <section className='relative w-[25%] md:w-[100%] md:mb-16'>
        
       <div className='flex md:w-[100%]'>
       <svg className='md:w-[100%] w-[340px]' xmlns="http://www.w3.org/2000/svg"  height="216" viewBox="0 0 340 216" fill="none">
  <path d="M237.012 215.974H33.3636C28.9784 215.969 24.6369 215.04 20.587 213.237C16.537 211.434 12.858 208.795 9.7599 205.468C6.66181 202.141 4.20533 198.193 2.53073 193.849C0.856124 189.505 -0.00381546 184.85 1.27254e-05 180.149V36.4779C0.0538596 27.0283 3.59177 17.985 9.842 11.3207C16.0922 4.65627 24.5476 0.911634 33.3636 0.903564H77.5667C78.0381 0.903564 78.4902 1.10429 78.8235 1.46159C79.1568 1.81888 79.3441 2.30348 79.3441 2.80878C79.3441 3.31407 79.1568 3.79867 78.8235 4.15596C78.4902 4.51326 78.0381 4.71399 77.5667 4.71399H33.3636C25.4602 4.72226 17.8827 8.0912 12.2942 14.0814C6.70565 20.0717 3.56263 28.1938 3.55491 36.6653V180.337C3.56263 188.808 6.70565 196.93 12.2942 202.921C17.8827 208.911 25.4602 212.28 33.3636 212.288H237.012C240.941 212.284 244.829 211.449 248.456 209.83C252.082 208.211 255.374 205.84 258.144 202.854C260.913 199.868 263.105 196.326 264.595 192.429C266.084 188.533 266.84 184.36 266.821 180.149V126.866C266.817 126.613 266.86 126.362 266.948 126.127C267.036 125.893 267.166 125.679 267.331 125.499C267.497 125.318 267.694 125.175 267.912 125.077C268.129 124.98 268.363 124.93 268.599 124.93H337.511C337.947 124.989 338.348 125.217 338.638 125.571C338.928 125.924 339.089 126.379 339.089 126.85C339.089 127.321 338.928 127.776 338.638 128.13C338.348 128.483 337.947 128.711 337.511 128.771H270.347V180.149C270.347 189.634 266.838 198.732 260.589 205.448C254.34 212.163 245.861 215.949 237.012 215.974Z" fill="#F4F4F4"/>
</svg><svg className='mt-[110px] ml-[-15px]' xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
  <path d="M2.74875 31.4784L0.128906 28.6947L13.9143 15.8399L0.128906 2.98496L2.74875 0.201294L19.5283 15.8399L2.74875 31.4784Z" fill="#F4F4F4"/>
</svg>
       </div>
       <div className='flex absolute top-[-30px] left-16'>
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
  <path d="M42.176 81.7143C63.8657 81.7143 81.4486 64.0842 81.4486 42.3364C81.4486 20.5886 63.8657 2.9585 42.176 2.9585C20.4863 2.9585 2.90332 20.5886 2.90332 42.3364C2.90332 64.0842 20.4863 81.7143 42.176 81.7143Z" fill="#0C0C0C" fill-opacity="0.9"/>
  <path d="M42.1763 83.6223C34.0251 83.6285 26.0552 81.2105 19.2747 76.6743C12.4942 72.1381 7.20774 65.6874 4.08412 58.1383C0.960503 50.5891 0.140028 42.2807 1.72647 34.2639C3.31291 26.2471 7.23501 18.8822 12.9966 13.1007C18.7582 7.3193 26.1005 3.38113 34.0946 1.78437C42.0888 0.187604 50.3757 1.00398 57.907 4.13025C65.4384 7.25652 71.8758 12.5522 76.405 19.3474C80.9343 26.1427 83.3518 34.1322 83.3518 42.3052C83.3435 53.2552 79.0038 63.7549 71.2846 71.5006C63.5654 79.2464 53.0971 83.6057 42.1763 83.6223ZM42.1763 4.83524C34.7729 4.83524 27.5358 7.0365 21.3801 11.1606C15.2244 15.2848 10.4266 21.1465 7.59346 28.0047C4.76031 34.8629 4.01902 42.4094 5.46335 49.69C6.90769 56.9706 10.4728 63.6583 15.7078 68.9073C20.9427 74.1563 27.6125 77.7309 34.8737 79.1791C42.1348 80.6273 49.6612 79.8841 56.501 77.0433C63.3409 74.2026 69.187 69.3919 73.3001 63.2198C77.4132 57.0476 79.6086 49.791 79.6086 42.3678C79.6086 37.4389 78.6404 32.5584 76.7592 28.0047C74.8781 23.451 72.1208 19.3135 68.6449 15.8283C65.169 12.343 61.0425 9.57842 56.501 7.69223C51.9595 5.80605 47.092 4.83524 42.1763 4.83524Z" fill="white"/>
  <path d="M49.849 54.3719H35.1156M49.849 54.3719V56.8275C49.849 59.1158 49.849 60.2599 49.4751 61.1624C48.9767 62.3658 48.0206 63.3219 46.8172 63.8203C45.9147 64.1941 44.7706 64.1941 42.4823 64.1941V64.1941C40.194 64.1941 39.0499 64.1941 38.1473 63.8203C36.944 63.3219 35.9879 62.3658 35.4895 61.1624C35.1156 60.2599 35.1156 59.1158 35.1156 56.8275V54.3719M49.849 54.3719V51.8984C49.849 51.1118 50.0963 50.3451 50.5559 49.7068L54.7314 43.9073C61.9201 33.9231 54.7853 19.9941 42.4823 19.9941V19.9941C30.1793 19.9941 23.0444 33.9231 30.2331 43.9073L34.4087 49.7068C34.8683 50.3451 35.1156 51.1118 35.1156 51.8984V54.3719M38.799 40.8664L42.4823 47.0053L46.1656 40.8664" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span className='my-auto text-2xl ml-2'>Call</span>
        </div>
        <div className='absolute top-20 w-[55%] md:w-[60%] md:left-8 left-5'>
        Get on a call with us by clicking any of the contact button or send us a message through the contact form.
        </div>
       </section>
       <section className='relative w-[25%] md:w-[100%] md:mb-16'>
        
       <div className='flex md:w-[100%]'>
       <svg className='md:w-[100%]' xmlns="http://www.w3.org/2000/svg" width="340" height="216" viewBox="0 0 340 216" fill="none">
  <path d="M237.012 215.974H33.3636C28.9784 215.969 24.6369 215.04 20.587 213.237C16.537 211.434 12.858 208.795 9.7599 205.468C6.66181 202.141 4.20533 198.193 2.53073 193.849C0.856124 189.505 -0.00381546 184.85 1.27254e-05 180.149V36.4779C0.0538596 27.0283 3.59177 17.985 9.842 11.3207C16.0922 4.65627 24.5476 0.911634 33.3636 0.903564H77.5667C78.0381 0.903564 78.4902 1.10429 78.8235 1.46159C79.1568 1.81888 79.3441 2.30348 79.3441 2.80878C79.3441 3.31407 79.1568 3.79867 78.8235 4.15596C78.4902 4.51326 78.0381 4.71399 77.5667 4.71399H33.3636C25.4602 4.72226 17.8827 8.0912 12.2942 14.0814C6.70565 20.0717 3.56263 28.1938 3.55491 36.6653V180.337C3.56263 188.808 6.70565 196.93 12.2942 202.921C17.8827 208.911 25.4602 212.28 33.3636 212.288H237.012C240.941 212.284 244.829 211.449 248.456 209.83C252.082 208.211 255.374 205.84 258.144 202.854C260.913 199.868 263.105 196.326 264.595 192.429C266.084 188.533 266.84 184.36 266.821 180.149V126.866C266.817 126.613 266.86 126.362 266.948 126.127C267.036 125.893 267.166 125.679 267.331 125.499C267.497 125.318 267.694 125.175 267.912 125.077C268.129 124.98 268.363 124.93 268.599 124.93H337.511C337.947 124.989 338.348 125.217 338.638 125.571C338.928 125.924 339.089 126.379 339.089 126.85C339.089 127.321 338.928 127.776 338.638 128.13C338.348 128.483 337.947 128.711 337.511 128.771H270.347V180.149C270.347 189.634 266.838 198.732 260.589 205.448C254.34 212.163 245.861 215.949 237.012 215.974Z" fill="#F4F4F4"/>
</svg><svg className='mt-[110px] ml-[-15px]' xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
  <path d="M2.74875 31.4784L0.128906 28.6947L13.9143 15.8399L0.128906 2.98496L2.74875 0.201294L19.5283 15.8399L2.74875 31.4784Z" fill="#F4F4F4"/>
</svg>
       </div>
       <div className='flex absolute top-[-30px] left-16'>
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
  <path d="M42.176 81.7143C63.8657 81.7143 81.4486 64.0842 81.4486 42.3364C81.4486 20.5886 63.8657 2.9585 42.176 2.9585C20.4863 2.9585 2.90332 20.5886 2.90332 42.3364C2.90332 64.0842 20.4863 81.7143 42.176 81.7143Z" fill="#0C0C0C" fill-opacity="0.9"/>
  <path d="M42.1763 83.6223C34.0251 83.6285 26.0552 81.2105 19.2747 76.6743C12.4942 72.1381 7.20774 65.6874 4.08412 58.1383C0.960503 50.5891 0.140028 42.2807 1.72647 34.2639C3.31291 26.2471 7.23501 18.8822 12.9966 13.1007C18.7582 7.3193 26.1005 3.38113 34.0946 1.78437C42.0888 0.187604 50.3757 1.00398 57.907 4.13025C65.4384 7.25652 71.8758 12.5522 76.405 19.3474C80.9343 26.1427 83.3518 34.1322 83.3518 42.3052C83.3435 53.2552 79.0038 63.7549 71.2846 71.5006C63.5654 79.2464 53.0971 83.6057 42.1763 83.6223ZM42.1763 4.83524C34.7729 4.83524 27.5358 7.0365 21.3801 11.1606C15.2244 15.2848 10.4266 21.1465 7.59346 28.0047C4.76031 34.8629 4.01902 42.4094 5.46335 49.69C6.90769 56.9706 10.4728 63.6583 15.7078 68.9073C20.9427 74.1563 27.6125 77.7309 34.8737 79.1791C42.1348 80.6273 49.6612 79.8841 56.501 77.0433C63.3409 74.2026 69.187 69.3919 73.3001 63.2198C77.4132 57.0476 79.6086 49.791 79.6086 42.3678C79.6086 37.4389 78.6404 32.5584 76.7592 28.0047C74.8781 23.451 72.1208 19.3135 68.6449 15.8283C65.169 12.343 61.0425 9.57842 56.501 7.69223C51.9595 5.80605 47.092 4.83524 42.1763 4.83524Z" fill="white"/>
  <path d="M49.849 54.3719H35.1156M49.849 54.3719V56.8275C49.849 59.1158 49.849 60.2599 49.4751 61.1624C48.9767 62.3658 48.0206 63.3219 46.8172 63.8203C45.9147 64.1941 44.7706 64.1941 42.4823 64.1941V64.1941C40.194 64.1941 39.0499 64.1941 38.1473 63.8203C36.944 63.3219 35.9879 62.3658 35.4895 61.1624C35.1156 60.2599 35.1156 59.1158 35.1156 56.8275V54.3719M49.849 54.3719V51.8984C49.849 51.1118 50.0963 50.3451 50.5559 49.7068L54.7314 43.9073C61.9201 33.9231 54.7853 19.9941 42.4823 19.9941V19.9941C30.1793 19.9941 23.0444 33.9231 30.2331 43.9073L34.4087 49.7068C34.8683 50.3451 35.1156 51.1118 35.1156 51.8984V54.3719M38.799 40.8664L42.4823 47.0053L46.1656 40.8664" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span className='my-auto text-2xl ml-2'>Discuss</span>
        </div>
        <div className='absolute top-20  w-[55%] md:w-[60%] md:left-8 left-5'>
        1 hour or more where we brainstorming and talk about your project. You will talk to us directly on the call.
        </div>
       </section>
       <section className='relative w-[25%] md:w-[100%] md:mb-16'>
        
       <div className='flex '>
       <svg className='md:w-[100%]' xmlns="http://www.w3.org/2000/svg" width="340" height="216" viewBox="0 0 340 216" fill="none">
  <path d="M237.012 215.974H33.3636C28.9784 215.969 24.6369 215.04 20.587 213.237C16.537 211.434 12.858 208.795 9.7599 205.468C6.66181 202.141 4.20533 198.193 2.53073 193.849C0.856124 189.505 -0.00381546 184.85 1.27254e-05 180.149V36.4779C0.0538596 27.0283 3.59177 17.985 9.842 11.3207C16.0922 4.65627 24.5476 0.911634 33.3636 0.903564H77.5667C78.0381 0.903564 78.4902 1.10429 78.8235 1.46159C79.1568 1.81888 79.3441 2.30348 79.3441 2.80878C79.3441 3.31407 79.1568 3.79867 78.8235 4.15596C78.4902 4.51326 78.0381 4.71399 77.5667 4.71399H33.3636C25.4602 4.72226 17.8827 8.0912 12.2942 14.0814C6.70565 20.0717 3.56263 28.1938 3.55491 36.6653V180.337C3.56263 188.808 6.70565 196.93 12.2942 202.921C17.8827 208.911 25.4602 212.28 33.3636 212.288H237.012C240.941 212.284 244.829 211.449 248.456 209.83C252.082 208.211 255.374 205.84 258.144 202.854C260.913 199.868 263.105 196.326 264.595 192.429C266.084 188.533 266.84 184.36 266.821 180.149V126.866C266.817 126.613 266.86 126.362 266.948 126.127C267.036 125.893 267.166 125.679 267.331 125.499C267.497 125.318 267.694 125.175 267.912 125.077C268.129 124.98 268.363 124.93 268.599 124.93H337.511C337.947 124.989 338.348 125.217 338.638 125.571C338.928 125.924 339.089 126.379 339.089 126.85C339.089 127.321 338.928 127.776 338.638 128.13C338.348 128.483 337.947 128.711 337.511 128.771H270.347V180.149C270.347 189.634 266.838 198.732 260.589 205.448C254.34 212.163 245.861 215.949 237.012 215.974Z" fill="#F4F4F4"/>
</svg><svg className='mt-[110px] ml-[-15px]' xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
  <path d="M2.74875 31.4784L0.128906 28.6947L13.9143 15.8399L0.128906 2.98496L2.74875 0.201294L19.5283 15.8399L2.74875 31.4784Z" fill="#F4F4F4"/>
</svg>
       </div>
       <div className='flex absolute top-[-30px] left-16'>
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
  <path d="M42.176 81.7143C63.8657 81.7143 81.4486 64.0842 81.4486 42.3364C81.4486 20.5886 63.8657 2.9585 42.176 2.9585C20.4863 2.9585 2.90332 20.5886 2.90332 42.3364C2.90332 64.0842 20.4863 81.7143 42.176 81.7143Z" fill="#0C0C0C" fill-opacity="0.9"/>
  <path d="M42.1763 83.6223C34.0251 83.6285 26.0552 81.2105 19.2747 76.6743C12.4942 72.1381 7.20774 65.6874 4.08412 58.1383C0.960503 50.5891 0.140028 42.2807 1.72647 34.2639C3.31291 26.2471 7.23501 18.8822 12.9966 13.1007C18.7582 7.3193 26.1005 3.38113 34.0946 1.78437C42.0888 0.187604 50.3757 1.00398 57.907 4.13025C65.4384 7.25652 71.8758 12.5522 76.405 19.3474C80.9343 26.1427 83.3518 34.1322 83.3518 42.3052C83.3435 53.2552 79.0038 63.7549 71.2846 71.5006C63.5654 79.2464 53.0971 83.6057 42.1763 83.6223ZM42.1763 4.83524C34.7729 4.83524 27.5358 7.0365 21.3801 11.1606C15.2244 15.2848 10.4266 21.1465 7.59346 28.0047C4.76031 34.8629 4.01902 42.4094 5.46335 49.69C6.90769 56.9706 10.4728 63.6583 15.7078 68.9073C20.9427 74.1563 27.6125 77.7309 34.8737 79.1791C42.1348 80.6273 49.6612 79.8841 56.501 77.0433C63.3409 74.2026 69.187 69.3919 73.3001 63.2198C77.4132 57.0476 79.6086 49.791 79.6086 42.3678C79.6086 37.4389 78.6404 32.5584 76.7592 28.0047C74.8781 23.451 72.1208 19.3135 68.6449 15.8283C65.169 12.343 61.0425 9.57842 56.501 7.69223C51.9595 5.80605 47.092 4.83524 42.1763 4.83524Z" fill="white"/>
  <path d="M49.849 54.3719H35.1156M49.849 54.3719V56.8275C49.849 59.1158 49.849 60.2599 49.4751 61.1624C48.9767 62.3658 48.0206 63.3219 46.8172 63.8203C45.9147 64.1941 44.7706 64.1941 42.4823 64.1941V64.1941C40.194 64.1941 39.0499 64.1941 38.1473 63.8203C36.944 63.3219 35.9879 62.3658 35.4895 61.1624C35.1156 60.2599 35.1156 59.1158 35.1156 56.8275V54.3719M49.849 54.3719V51.8984C49.849 51.1118 50.0963 50.3451 50.5559 49.7068L54.7314 43.9073C61.9201 33.9231 54.7853 19.9941 42.4823 19.9941V19.9941C30.1793 19.9941 23.0444 33.9231 30.2331 43.9073L34.4087 49.7068C34.8683 50.3451 35.1156 51.1118 35.1156 51.8984V54.3719M38.799 40.8664L42.4823 47.0053L46.1656 40.8664" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span className='my-auto text-2xl ml-2'>Develop</span>
        </div>
        <div className='absolute top-20 w-[55%] md:w-[60%] md:left-8 left-6'>
        Once we have everything ready on your end and we have all details captured, we begin the development of your project.
        </div>
       </section>
       <section className='relative w-[25%] md:w-[100%] md:mb-16'>
        
       <div className='flex '>
       <svg className='md:w-[100%]' xmlns="http://www.w3.org/2000/svg" width="340" height="216" viewBox="0 0 340 216" fill="none">
  <path d="M237.012 215.974H33.3636C28.9784 215.969 24.6369 215.04 20.587 213.237C16.537 211.434 12.858 208.795 9.7599 205.468C6.66181 202.141 4.20533 198.193 2.53073 193.849C0.856124 189.505 -0.00381546 184.85 1.27254e-05 180.149V36.4779C0.0538596 27.0283 3.59177 17.985 9.842 11.3207C16.0922 4.65627 24.5476 0.911634 33.3636 0.903564H77.5667C78.0381 0.903564 78.4902 1.10429 78.8235 1.46159C79.1568 1.81888 79.3441 2.30348 79.3441 2.80878C79.3441 3.31407 79.1568 3.79867 78.8235 4.15596C78.4902 4.51326 78.0381 4.71399 77.5667 4.71399H33.3636C25.4602 4.72226 17.8827 8.0912 12.2942 14.0814C6.70565 20.0717 3.56263 28.1938 3.55491 36.6653V180.337C3.56263 188.808 6.70565 196.93 12.2942 202.921C17.8827 208.911 25.4602 212.28 33.3636 212.288H237.012C240.941 212.284 244.829 211.449 248.456 209.83C252.082 208.211 255.374 205.84 258.144 202.854C260.913 199.868 263.105 196.326 264.595 192.429C266.084 188.533 266.84 184.36 266.821 180.149V126.866C266.817 126.613 266.86 126.362 266.948 126.127C267.036 125.893 267.166 125.679 267.331 125.499C267.497 125.318 267.694 125.175 267.912 125.077C268.129 124.98 268.363 124.93 268.599 124.93H337.511C337.947 124.989 338.348 125.217 338.638 125.571C338.928 125.924 339.089 126.379 339.089 126.85C339.089 127.321 338.928 127.776 338.638 128.13C338.348 128.483 337.947 128.711 337.511 128.771H270.347V180.149C270.347 189.634 266.838 198.732 260.589 205.448C254.34 212.163 245.861 215.949 237.012 215.974Z" fill="#F4F4F4"/>
</svg><svg className='mt-[110px] ml-[-15px]' xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
  <path d="M2.74875 31.4784L0.128906 28.6947L13.9143 15.8399L0.128906 2.98496L2.74875 0.201294L19.5283 15.8399L2.74875 31.4784Z" fill="#F4F4F4"/>
</svg>
       </div>
       <div className='flex absolute top-[-30px] left-16'>
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
  <path d="M42.176 81.7143C63.8657 81.7143 81.4486 64.0842 81.4486 42.3364C81.4486 20.5886 63.8657 2.9585 42.176 2.9585C20.4863 2.9585 2.90332 20.5886 2.90332 42.3364C2.90332 64.0842 20.4863 81.7143 42.176 81.7143Z" fill="#0C0C0C" fill-opacity="0.9"/>
  <path d="M42.1763 83.6223C34.0251 83.6285 26.0552 81.2105 19.2747 76.6743C12.4942 72.1381 7.20774 65.6874 4.08412 58.1383C0.960503 50.5891 0.140028 42.2807 1.72647 34.2639C3.31291 26.2471 7.23501 18.8822 12.9966 13.1007C18.7582 7.3193 26.1005 3.38113 34.0946 1.78437C42.0888 0.187604 50.3757 1.00398 57.907 4.13025C65.4384 7.25652 71.8758 12.5522 76.405 19.3474C80.9343 26.1427 83.3518 34.1322 83.3518 42.3052C83.3435 53.2552 79.0038 63.7549 71.2846 71.5006C63.5654 79.2464 53.0971 83.6057 42.1763 83.6223ZM42.1763 4.83524C34.7729 4.83524 27.5358 7.0365 21.3801 11.1606C15.2244 15.2848 10.4266 21.1465 7.59346 28.0047C4.76031 34.8629 4.01902 42.4094 5.46335 49.69C6.90769 56.9706 10.4728 63.6583 15.7078 68.9073C20.9427 74.1563 27.6125 77.7309 34.8737 79.1791C42.1348 80.6273 49.6612 79.8841 56.501 77.0433C63.3409 74.2026 69.187 69.3919 73.3001 63.2198C77.4132 57.0476 79.6086 49.791 79.6086 42.3678C79.6086 37.4389 78.6404 32.5584 76.7592 28.0047C74.8781 23.451 72.1208 19.3135 68.6449 15.8283C65.169 12.343 61.0425 9.57842 56.501 7.69223C51.9595 5.80605 47.092 4.83524 42.1763 4.83524Z" fill="white"/>
  <path d="M49.849 54.3719H35.1156M49.849 54.3719V56.8275C49.849 59.1158 49.849 60.2599 49.4751 61.1624C48.9767 62.3658 48.0206 63.3219 46.8172 63.8203C45.9147 64.1941 44.7706 64.1941 42.4823 64.1941V64.1941C40.194 64.1941 39.0499 64.1941 38.1473 63.8203C36.944 63.3219 35.9879 62.3658 35.4895 61.1624C35.1156 60.2599 35.1156 59.1158 35.1156 56.8275V54.3719M49.849 54.3719V51.8984C49.849 51.1118 50.0963 50.3451 50.5559 49.7068L54.7314 43.9073C61.9201 33.9231 54.7853 19.9941 42.4823 19.9941V19.9941C30.1793 19.9941 23.0444 33.9231 30.2331 43.9073L34.4087 49.7068C34.8683 50.3451 35.1156 51.1118 35.1156 51.8984V54.3719M38.799 40.8664L42.4823 47.0053L46.1656 40.8664" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span className='my-auto text-2xl ml-2'>Deliver</span>
        </div>
        <div className='absolute top-20 w-[55%] md:w-[60%] md:left-8 left-5'>
        We will give you updates regularly on your project and when we are done and you are satisfied with it, we deliver.
        </div>
       </section>
       </div>
    </div>
    </Element>
  )
}

export default Process