/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer/Footer'
import BigNavbar from '../components/Nav/BigNavbar'

export default function Index() {

  return (
    <>

      <BigNavbar />

      <section className='bg-gradient-to-b from-indigo-900 to-gray-400 py-5 W '>

        <div className='p-4 mx-auto max-w-screen-xl lg:pt-2'>
          <div className='mx-auto text-center lg:mb-4'>
            <h1 className='mb-4 text-4xl lg:text-4xl tracking-tight font-extrabold text-white'> Reading Certification </h1>
            <h2 className='font-light text-white  text-center text-xl my-4 '>
              certify and share your new skills
            </h2>
          </div>
          <div className='px-2 grid gap-8 lg:grid-cols-1 sm:grid-cols-1 mx-auto content-center justify-center px-5' style={{ maxWidth: "1200px" }} >

            <article className='p-4 bg-white rounded-lg  border-gray-200 shadow-md mx-auto' style={{ maxWidth: "450px" }}>
              <div className='flex justify-between items-center mb-5 text-gray-500'>
                <span className='text-sm'></span>
              </div>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                Book name or upload a document
              </h2>
              <p className='mb-2 font-light text-gray-500 '>
                Add your read to be certified
              </p>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Write the read title and author"
              />

              <p className='mb-2 font-light text-gray-500 mx-auto §11'>
                or
              </p>

              <div className="flex items-center justify-center w-full" >
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" style={{ maxHeight: "150px" }}>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>




            </article>

            <article className='p-4 bg-white rounded-lg  border-gray-200 shadow-md mx-auto' style={{ maxWidth: "900px" }}>
 
                <h3 className="text-base font-semibold leading-7 text-gray-">Test generated</h3>
          
              <div className="grid grid-cols-1 gap-2 ">
              
                  <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-0">

                    <p className="mt-1 text-sm font-semibold text-gray-700">  Question 1:       What is the Build-Measure-Learn feedback loop and why is it important? </p>

                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Write your answer"

                      />
                    </div>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-0">

                    <p className="mt-1 text-sm font-semibold leading-6 text-gray-700 "> Question 2:        Define the  Minimum Viable Product (MVP) concept</p>

                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Write your answer "

                      />
                    </div>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-0">

                    <p className="mt-1 text-sm font-semibold leading-6 text-gray-700 ">Question 3:         What does "validated learning," mean and how does it differ from traditional product development approaches? </p>

                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Write your answer"

                      />
                    </div>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-0">
                    <p className="mt-1 text-sm font-semibold leading-6 text-gray-700 "> Question 4:       Explain the concept of a "pivot" and provide an example of a situation where a startup might need to pivot.</p>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="mx-auto px-auto block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Write your answer"

                      />
                    </div>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-2 sm:px-0">

                    <p className="mt-1 text-sm font-semibold leading-6 text-gray-700">Question 5:       Describe the "Five Whys" technique and its role in problem-solving within the Lean Startup framework. </p>


                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Write your answer"
             
                      />
                    </div>
                  </div>

              
              </div>
              </article>


            <article className='p-4 bg-white rounded-lg  border-gray-200 shadow-md mx-auto' style={{ maxWidth: "450px" }}>
              <div>
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Write the name on the certificate"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Write your email @"
                  />

                </div>
              </div>
              <Link href='/certificate'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded-full align-content-right">
                  Check and get certification
                </button>
              </Link>

            </article>




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