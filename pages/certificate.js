/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer/Footer'
import BigNavbar from '../components/Nav/BigNavbar'


export default function Index() {

  return (
    <>

      <BigNavbar />

      <section className='bg-gradient-to-b from-indigo-900 to-gray-400 '>
        <div className='p-4 mx-auto max-w-screen-xl lg:pt-10 pb-10'>
          <div >
            <img src='/images/Certificate.png' className='mx-auto hover:shadow-lg' alt='Certificate' />
          </div>
          <div className='grid gap-8 lg:grid-cols-2 sm:grid-cols-2 mx-auto content-center justify-center' style={{ maxWidth: "1200px" }} >
            <Link href='/'>
              <article className='p-4 bg-white rounded-lg  border-gray-200 shadow-md mt-10 mx-auto' style={{ maxWidth: "550px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Books to keep your learning path
                </h2>
                <div className='flex justify-between items-center'>
                  <div className='flex-1'>
                    <ul className='list-reset mb-6'>
                      <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                        <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Measure what matters 	by John Doerr, buy from Amazon</div>
                      </li>
                      <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                        <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Marketing management 	by Philip Kotler, buy it from Thalia </div>
                      </li>
                    </ul>
                  </div>

                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                    See more reading recommendations
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
                </div>
              </article>
            </Link>
            <Link href='/'>
              <article className='p-4 bg-white rounded-lg  border-gray-200 shadow-md mt-10 mx-auto' style={{ maxWidth: "550px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Courses to keep your learning path
                </h2>
                <div className='flex justify-between items-center'>
                  <div className='flex-1'>
                    <ul className='list-reset mb-6'>
                      <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                        <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Course 1 on LinkedIn learning, get one month suscription free with our invitation. </div>
                      </li>
                      <li className='mt-2 inline-block mr-2 md:block md:mr-0'>
                        <div className='font-light no-underline hover:underline text-gray-800 hover:text-green-500'>Course 2 on Coursera, get two weeks suscription free with our invitation.  </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                    See more course recommendations
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
                </div>
              </article>
            </Link>
          </div>
          <article className='p-4 bg-white rounded-lg  border-gray-200 shadow-md mt-10 mx-auto' style={{ maxWidth: "450px" }}>
            <div className="mt-5 mb-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 mb-4  text-center text-sm text-gray-500">
              Keep track of your learnings and skills.  
              </p>
          
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
                <p className="mt-2 mb-4  text-center text-sm text-gray-500">
    Not a member?{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Create your account, it is free!
                </a>
              
              </p>
              </form>

            </div>
          </article>
        </div>

        <Footer></Footer>
      </section>

    </>
  );
}
