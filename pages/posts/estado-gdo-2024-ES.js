/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Footer from "../../components/Footer/Footer"
import BigNavbar from "../../components/Nav/BigNavbar"
import React from "react";
import { useMatomo } from '@datapunt/matomo-tracker-react';
import ContactForm from "../../components/Funcionalidad/ContactForm";
export default function post() {

  //for tracking
  const { trackPageView, trackEvent } = useMatomo();
  // Track page view example, not yet deployed
  React.useEffect(() => {
    trackPageView()
  });

  return (
    <>
      <BigNavbar></BigNavbar>
      <div className='bg-gradient-to-b from-emerald-700 to-gray-600  flex items-center pt-4 justify-center'>
        <div className='container max-w-5xl mx-auto m-4 py-4 px-4 text-center lg:py-10 lg:px-10'>
          <h1 className='mb-4 text-4xl pt-12 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white'>
            Estado de las garantías de origen España 2024
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>
          <div className='grid py-1 md: md:grid-cols-1 '>
            <p className='text-gray-800'>
              Asistimos a la feria Genera la pasada semana, hablamos con varios productores, comercializadoras nacionales y promotores principalmente del sector eléctrico y brevemente también nos acercamos a los gases renovables.              
              <br></br>
              <br></br>
            </p>
            <p className='text-gray-800'>
              Hemos conversado con unas 9 comercializadoras, desde comunidades solares hasta uno de los principales grupos del país. Siendo estos los principales compradores de certificados verdes y todavía no los consumidores finales, ej. Industria con consumo intensivos. Los productores comenzaron el año pasado a entender el valor y poco a poco van cancelando contratos o cláusulas con sus representantes de mercado y gestionando de forma independiente sus GdOs. 
              Las conferencias relativas a estrategias de descarbonización en las empresas tuvieron una asistencia completa y el consumo de energía renovable es clave en estas estrategias. Ambas tendencias abren paso a un mercado más dinámico de certificados verdes.
              <br></br>
              <br></br>
              Algunas de nuestras principales observaciones:               </p>
            <ul className="list-disc text-gray-800 mx-5 ">
            <li>El aprovisionamiento es un proceso incómodo el tener que estar comunicándose uno a uno con posibles proveedores sin un punto de contacto común.
                </li>
              <li>Nos trasmiten la necesidad de un índice de precios nacional, para lo que nos mostramos dispuestos a elaborar. 
                Para ello necesitamos de diversos actores como proveedores de datos de forma anonimizada.
                Para estos participantes proveedores de datos ofreceremos este índice de forma gratuita.  Contáctanos si te gustaría participar. 

              </li>
              <li>Excesivos intermediarios entre quienes producen la energía y quien es el usuario final que se beneficia del certificado de consumo. </li>
              <li>En el lado de la oferta, hemos observado una gran dificultad y pérdida de dinero por fallo en el proceso y en la valoración de estos.</li>
              <li>Las instalaciones de más de 100 kW que venden a mercado ya pueden beneficiarse de vender sus GdOs.</li>
              <li>El sector gases renovables seguirá al eléctrico con un sistema de garantías todavía joven, aunque con gran valor a futuro. </li>
            </ul>
            <p className='text-gray-800'>
              <br></br>
              Nuestra propuesta de financiación verde ha causado interés, con preventa de las garantías de origen generadas a futuro. Y vamos a explorar la primera oferta en este sentido.             </p>

            <p className='text-gray-800 mt-5'>
              Para el año 2024 tenemos vendedores por valor de 110.000 GdOs España con opción a exportar y 60.000 GDOs nacionales, procedentes de tecnologías fotovoltaicas y eólicas              <br></br>
            </p>

            <p className='text-gray-800 mt-5'>
              Si te ha traído el potencial valor ambiental de los GdOs te recomendamos asesorarte por expertos en este mercado, ya que los precios tienen una gran volatilidad varían sustancialmente semana a semana. Es importante el acompañamiento y acceso a datos de precios fiables, estimamos el potencial de una correcta comercialización en el +200%.
              <br></br>
              <br></br>
              <b>¡Saca partido del valor medioambiental de tu producción!</b>
              <br></br>
            </p>
            <div className='mx-auto mt-4  text-center max-w-screen-xl' style={{ maxWidth: "450px" }}>
              <img src='/images/genera1.jpg' alt='Fundador en feria Genera2024' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ContactForm></ContactForm>

      </section>
      <Footer></Footer>
    </>
  );
}

