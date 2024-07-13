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
            La apuesta europea por el hidrógeno renovable demanda  GdOs
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>

          <div className='grid py-1 md:gap-16  md:grid-cols-1 '>
            <p className='text-gray-800'>
              La mayor apuesta europea a futuro, en términos energéticos, se centra en la producción de hidrógeno procedente de fuentes renovables.
              Hay diversas formas de obtener hidrógeno, hoy todavía es marginal la procedente de fuentes renovables mediante electrólisis y principalmente es un subproducto de la  combustión de diversos hidrocarburos. La apuesta en la que se basa Europa es en el hidrógeno proveniente de fuentes renovables, para conseguir la independencia energética del continente y además ayudar en la descarbonización, objetivo estratégico europeo para el 2050.
              <br></br>
              <br></br>
              El hidrógeno tiene además la ventaja de no producir gases de efecto contaminante al usarse y poder reutilizar la infraestructura gasística, para ello previamente haría falta un replanteamiento de la red y adaptaciones. 
              Respecto a los usos de hidrógeno, en la actualidad mayormente se utiliza como parte del proceso de otras industrias, en producción de amoniaco, fertilizantes, y de metanol. Se estima pronto sea de uso en movilidad, con algunos vehículos ya en el mercado que consumen hidrógeno. Para uso en industria y calefacción de edificios. Además se espera sea un combustible para la aviación, lo que ayudaría a reducir su gran impacto en las emisiones, 10% del total de la UE.
              <br></br>
              <br></br>
              La importancia de las fuentes de energía renovable en este proceso, para obtener hidrógeno renovable se tiene que producir el proceso de electrólisis del agua que o bien consume electricidad directamente de un  parque fotovoltaico o molino de viento o bien consume electricidad de la red general. En los casos que consume energía de la red general, este debería ser justificado con garantías de origen.
            
              También la producción final de hidrógeno tendrá sus correspondientes GdOs, estos ya del tipo de gas. 

              <br></br>
              <br></br>
              Además nos ofrecemos desde GdOsolar a explorar la oportunidad de producción de hidrógeno verde en la zona sur-este de España: Almería, Granada y Murcia. Las cuales cuentan con altas horas de sol todo el año por lo tanto  gran capacidad de generación de electricidad en el lugar de producción del hidrógeno, desalinizadoras de agua de mar, conexiones con la infraestructura de gas y numerosos puertos.
            </p>
            <div className='my-2 px-4 mx-auto text-center max-w-screen-xl lg:px-6' style={{ maxWidth: "750px" }}>
              <img src='/images/seasolarhydrogen.jpg' alt='Resultado del referendum por cantón' />
              <p className='text-gray-800'> Proceso de obtención de hidrógeno a partir de agua, con energía solar</p>
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

