/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'


function Footer() {
  return (
    <footer className='bg-gray-200'>
      <div className='container mx-auto  px-8'>
        <div className='w-full flex flex-col md:flex-row py-6'>
          <div className='flex-2 mb-6 px-10 text-center'>

            <Image alt='logo' width={120} height={40} src='/logo.png'></Image>

          </div>

          <div className='flex-1'>
            <p className='uppercase font-extrabold text-gray-500 md:mb-6'>Site map</p>
            <ul className='list-reset mb-6'>
              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Test and certificate</div>
                </Link>
              </li>
            
              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/user-profile'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Learning path
                  </div>
                </Link>
              </li>
              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/user-profile'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Skills profile
                  </div>
                </Link>
              </li>
              

            </ul>
          </div>


          <div className='flex-1'>
            <p className='uppercase font-extrabold text-gray-500 md:mb-2'>Sponsors</p>
            <div className='grid gap-8 lg:grid-cols-2 sm:grid-cols-2 mx-auto content-center justify-center' style={{ maxWidth: "1200px" }} >
              <div className="col">
                <ul className='list-reset mb-6'>
              
                    <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Dr. Prof. WIlliam B. </div>
         
                </ul>
              </div>


      
            </div>
          </div>



          <div className='flex-1 '>
            <p className='uppercase font-extrabold text-gray-500 md:mb-6'>Team</p>
            <ul className='list-reset mb-6'>

              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>John Felipe Branch</div>
              </li>
              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Mattia Besana</div>
              </li>
              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Richard K</div>
              </li>
            </ul>
          </div>



        </div>
     

      </div >
    </footer >
  );
}

export default Footer
