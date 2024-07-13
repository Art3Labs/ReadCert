/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer/Footer'
import BigNavbar from '../components/Nav/BigNavbar'
import VideoBackground from '../components/Funcionalidad/VideoBackground';
import ContactForm from '../components/Funcionalidad/ContactForm';
import ReactPlayer from 'react-player';

export default function Index() {

  return (
    <>

      <BigNavbar />

      <section className='bg-gradient-to-b from-indigo-900 to-gray-400 py-5 '>

        <div className='p-4 mx-auto max-w-screen-xl lg:pt-5'>
          <div className='mx-auto text-center lg:mb-4'>
            <h1 className='mb-4 text-4xl lg:text-4xl tracking-tight font-extrabold text-white'> CertifyRead </h1>
            <h2 className='font-light text-white  text-center text-xl my-4 '>
            certificate and share your gathered knowledge
            </h2>
          </div>
          <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-2 mx-auto content-center justify-center' style={{ maxWidth: "1200px" }} >
            <Link href='/check-in'>
              <article className='p-4 bg-white rounded-lg  border-gray-200 shadow-md' style={{ maxWidth: "450px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Upload the document
                </h2>
                <p className='mb-5 font-light text-gray-500 '>
                Add your reads to be certified
                </p>

                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                    Proceed to upload
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
            <Link href='/check-out'>
              <article className='p-4 bg-white rounded-lg border-gray-200 shadow-md' style={{ maxWidth: "450px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                Answer the Tests
                </h2>
                <p className='mb-5 font-light text-gray-500 '>
                 Check pending tests
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                    Proceed to test
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

            <Link href='/recomendaciones'>
              <article className='p-4 bg-white rounded-lg border-gray-200 shadow-md' style={{ maxWidth: "450px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Certificates library
                </h2>
                <p className='mb-3 font-light text-gray-500 '>
                 Documenting adn tracking of your skills.
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                  See certified reads
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
              <article className='p-4 bg-white rounded-lg border-gray-200 shadow-md' style={{ maxWidth: "450px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
              Pricing
                </h2>
                <p className='mb-3 font-light text-gray-500 '>
                 Your first 3 certifications are free. The following ones costs 2€ each.
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                  Proceed to booking
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
              <article className='p-4 bg-white rounded-lg border-gray-200 shadow-md' style={{ maxWidth: "450px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Donating
                </h2>
                <p className='mb-3 font-light text-gray-500 '>
                  comapre the current development costs to the donations
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                    Buy your breakfast
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
              <article className='p-4 bg-white rounded-lg border-gray-200 shadow-md' style={{ maxWidth: "450px" }}>
                <div className='flex justify-between items-center mb-5 text-gray-500'>
                  <span className='text-sm'></span>
                </div>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Transport
                </h2>
                <p className='mb-3 font-light text-gray-500 '>
                  Call a taxi or rent a car for your stay
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center space-x-4'>
                  </div>
                  <div className='inline-flex items-center font-medium text-primary-600 hover:underline'>
                 Get your transport
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

<ContactForm></ContactForm>

        </div>


      </section>

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