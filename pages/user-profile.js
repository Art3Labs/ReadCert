/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer/Footer'
import BigNavbar from '../components/Nav/BigNavbar'


export default function Index() {

  return (
    <>

      <BigNavbar />

      <section className='bg-gradient-to-b from-indigo-900 to-gray-800 '>
      <p className='text-2xl font-bold leading-7 text-gray-200 sm:text-3xl sm:truncate text-center py-10'> Access your certifications, learning history and skills</p>
      </section>
      <section>
        <div className='p-4 mx-auto max-w-screen-xl lg:pt-10 pb-10'>



          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Create your account, it's free!
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

<Footer></Footer>
    </>
  );
}

/*
  <div className='flex justify-center pt- '>
          <div className="grid grid-cols-3 gap-2 my-6">
            <div>
              <Link href="/sobre-nosotros">
                <button type="button" className="inline-block px-3 py-3 bg-indigo-600 text-white font-medium text-base leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" style={{ maxWidth: "200px" }}>
                  Conócenos
                </button>

              </Link>
            </div>
            <div>
              <Link href="/contacto">
                <button type="button" className="inline-block px-3 py-3 bg-indigo-600 text-white font-medium text-base leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" style={{ maxWidth: "200px" }}>
                  Contáctanos
                </button>
              </Link>
            </div>

            <div>
              <Link href="https://mercado.gdosolar.es/">
                <button type="button" className="inline-block mx-2 px-3 py-3 bg-cyan-500 text-white font-medium text-base leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" style={{ maxWidth: "200px" }}>
                  Mercado
                </button>
              </Link>
            </div>
          </div>
        </div>


Envía tus órdenes de compra y venta a registro@gdosolar.es, las publicamos de forma anónima en nuestro mercado. Te ponemos en contacto con la contraparte.

            <Link href='/financiacion-verde'>
              <article className='p-4 bg-white rounded-lg border-gray-200 shadow-md' style={{ maxWidth: "450px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Financiación verde
                </h2>
                <p className='mb-5 font-light text-gray-500 '>
                  
                ¿Estás construyendo un nueva instalación de energías renovables? Descubre una nueva fuente de financiación.
                  Vende tus garantías de origen y consigue un valor añadido a tu producción.
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                    Preventa de certificados
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
                <div className="background-container ">
                  <div className="mobile-image">
                    <img src="/greenfinance.png" alt="Background Image" />
                  </div>
                  <div className="video-container">
                    <VideoBackground3 />
                  </div>
                </div>
              </article>
            </Link>


<div className='mt-8 mb-2- mx-auto' style={{ maxWidth: "900px" }} >
              <Link href='/plataforma'>
                <article className='px-4 py-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md' style={{ maxWidth: "970px" }}>
                  <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Oportunidad de inversión en GdOsolar
                  </h2>
                  <h3 className='mb-2 text-xl font-bold tracking-tight text-gray-700'>
                    Buscamos socios de la industria energética: productores, comercializadoras, distribuidoras etc.
                  </h3>
                  <p className=' font-light text-gray-500 '>
                    Unimos la fuerza del sol con una innovadora plataforma de negociación de certificados de energía renovable, iluminando el camino hacia un futuro sostenible y rentable para todos los inversores comprometidos con la transición energética.
                  </p>
                </article>
              </Link>
            </div>
Video solution for hydration

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });*/