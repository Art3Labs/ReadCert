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
            Comparación de opciones para suministro de energía en empresas
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>
          <div className='grid py-1 md: md:grid-cols-1 '>
            <p className='text-gray-800'>
              Con el objetivo de simplificar la comprensión a los compradores de energía y los responsables de sostenibilidad, hemos elaborado esta comparación detallada de las diversas alternativas disponibles actualmente para la adquisición de electricidad:              <br></br>
              <br></br>
            </p>

            <div className='container max-w-5xl px-3'>

              <ul className="list-disc mt-4 px-4 mx-2">
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Comercializadora tradicional, la opción más sencilla y significativamente la más cara. Consumes - te cobran, conforme hacen los consumos ellos compran a mercado (precio variable cada hora y día) o tienes un precio acordado con ella fijo por kWh consumido. Cómodo aunque caro.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Contrato PPA con instalaciones ya operativas: la opción más flexible bien negociada. Te comprometes con un parque solar a adquirir su electricidad producida por un periodo determinado (ej. un año), el resto de los consumos son suministrados por tu comercializadora. Pagas un precio con descuento al productor y la comercializadora te factura un menor consumo. Accedes a la economía de escala de una gran instalación.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Autoconsumo PPA: se realiza una instalación directamente donde se necesita la electricidad, no hace falta inversión inicial, ya que está financiada por la empresa que realiza la instalación. Luego pagas por los kWh producidos, te ahorras los peajes de transporte eléctricos respecto a un PPA normal. El compromiso es por 15 años, a un precio de kWh fijo, tras dicho periodo la instalación pasa a tu propiedad
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Autoconsumo con instalación en propiedad: requiere una inversión inicial y no ofrece la flexibilidad de suministros mediante PPA con instalaciones externas. Ventaja seguridad de suministro, menor dependencia de la red eléctrica.
                  </p>
                </li>


              </ul>


              <br />
            </div>

            <p className='text-gray-800'>
              Para grandes consumos, gracias al amplio número de instalaciones ya existentes en España, aconsejamos primero valorar la opción PPA y acceder a sus economías de escala además del suministro directo (tras firma de contrato y comunicación a red eléctrica). Igualmente las tres fórmulas alternativas a las comercializadoras tradicionales son tres formas válidas para ahorrar y alcanzar objetivos de sostenibilidad. ayudamos a acceder a estos ahorros gracias a nuestro conocimiento y contactos en toda la cadena de generación eléctrica.              <br />
              <br />
            </p>


            <p className='text-gray-800'>
              <br></br>
              La realidad de este 2024 es muy distinta a la de hace dos años, hemos avanzado a pasos gigantescos en la península, conviene adaptar la estrategia de aprovisionamiento.
              Estamos desarrollando nuestra oferta con plantas de 100 kW ( 200 MWh/año), 1 MW (2.000 MWh/año), 3,5 MW (6.000 MWh/año) y 7 MW (13.000 MWh) año.
              <br></br>
              <br></br>
              Esto es un ejercicio ilustrativo y varía en cada caso específico. Las líneas discontinuas representan las posibles desviaciones del precio, ya que la producción de una instalación solar depende de su localización y por lo tanto el coste que representa en MWh.

              <br></br>
              <br></br>
            </p>

            <p className='text-gray-800'>


            </p>
            <div className='mx-auto mt-4  text-center max-w-screen-xl' style={{ maxWidth: "600px" }}>
              <img src='/images/alternativas-suministro.png' alt='Alternativas para el suministro eléctrico' />
            </div>
          </div>
        </div>
      </section >

      <section>
        <ContactForm></ContactForm>

      </section>
      <Footer></Footer>
    </>
  );
}

