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
                  <p className='uppercase font-extrabold text-yellow-500 md:mb-2'>Gold</p>
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                    <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Dr. Prof. WIlliam B. </div>
                  </li>
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                    <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Thomas H. </div>
                  </li>
                
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                    <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Dr. Justas S </div>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul className='list-reset mb-'>
           
                  <p className='uppercase font-extrabold text-gray-400 md:mb-2'>Silver</p>
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                    <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Dr. Ivan P </div>
                  </li>
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Dr. José María </div>
                 </li>
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Raúl Oc.  </div>
                  </li>
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Ignacio D </div>
                  </li>
                  <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Pablo C. </div>
                  </li>
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
                <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Richard Karas</div>
              </li>
            </ul>
          </div>



        </div>
        <div className='text-center font-light'>
          Contact us at team@readcert.org
        </div>

      </div >
    </footer >
  );
}

export default Footer

/*    


          <div className='flex-1'>
            <p className='uppercase font-extrabold text-gray-500 md:mb-6'>Legal</p>
            <ul className='list-reset mb-6'>
              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/privacidad'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Privacidad</div>
                </Link>
              </li>
              <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/avisolegal'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Legal</div>
                </Link>
              </li>
            </ul>
          </div>
<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/financiacion-verde'>
                  <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Financiación verde</div>

                </Link>
              </li>
 <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/plataforma'>
                <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>
                    Mercado - Plataforma 
                    </div>
                </Link>
              </li>
          <div className='flex-1'>
            <p className='uppercase font-extrabold text-gray-500 md:mb-6'>Oportunidad de inversión</p>
            <Link href='/plataforma'>
              <div className='flex justify-between items-center'>
                <p className='mb-5 font-light text-gray-500 '>
                  Para aquellos comprometidos con la transición energética.
                </p>
              </div>
            </Link>

            <Link href='/plataforma'>
              <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                Invertir en GdOsolar
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </div>
            </Link>
          </div>

<button type="button" className="inline-block px-4 py-2.5 bg-twitter-blue text-white font-medium text-base leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                <div className='flex justify-center '>
                  <div className='w-5 mx-1 my-1'>
                    <img src='/twitterlogo.svg' alt='twitter logo' />
                  </div>
                  <div className=''>
                    Follow
                  </div>
                </div>
              </button>

      <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                <Link href='/autoconsumo'>
                <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>
                    Autoconsumo
                    </div>
                </Link>
              </li>
*/