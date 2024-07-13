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
            Solución a la “canibalización de precios” de la generación fotovoltaica
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>

          <div className='grid py-1 md:gap-16  md:grid-cols-1 '>
            <p className='text-gray-800'>
              Debido al aumento de la capacidad de producción de energía solar en los 3 últimos años se ha producido un cambio histórico en los precios de la electricidad en España. Antes las horas más baratas eran durante la madrugada cuando menos demanda había, hoy las horas más baratas son entre las 12h y las 16h cuando los paneles solares producen a su máxima capacidad.

              <br></br>
              <br></br>
              En general un precio barato de la energía y que este sea durante el día es una gran ventaja competitiva a largo plazo en un recurso energético-eléctrico básico, por ejemplo para la industria.
              Sin embargo la producción debe resultar rentable para aquellos que ya han realizado instalaciones o para los que tienen la perspectiva de crear unas instalaciones propias de paneles solares, las cuales además ayudan a la lucha contra el cambio climático gracias a la reducción de emisiones. Por estas razones la rentabilidad de la producción es clave.
              El principal problema: la remuneración llega a ser incluso de 0 €/MWh entre las 13h y las 14h ciertos días.
              <br></br>
              <br></br>
              La solución, la remuneración extra que se logra mediante el uso y negociación adecuada de los GdOs. Aunque el precio de la electricidad física sea 0 €/ MWh  en el mercado nacional, los GdOs siguen teniendo valor en toda Europa y son certificados exportables en la mayoría de casos. Podrían alcanzar tanto valor como incluso los  30 €/MWh de certificados, siendo el más común por estas fechas el de 7 €/MWh. Existen instalaciones antiguas, con subvenciones en la venta, que tienen como requisitos la imposibilidad de que estos se exporten y se negocien en mercados extranjeros.
              <br></br>
              <br></br>
              Esto demuestra la necesidad de un mercado organizado para las Garantías de Origen a nivel nacional,  una plataforma a nivel nacional donde confluyan la demanda y la oferta para lograr los mejores precios.
              <br></br>
              <br></br>
              La característica de los certificados de Garantías de origen permiten su emisión con referencia al mes de producción y su libre negociación por separado siendo totalmente independiente del precio al que se ha vendido la producción física y solo dependiente de la cantidad producida.
              Otras formas complementarias para asegurar una compensación superior son los contratos de compra directa (PPA) consumidor - productor, el almacenamiento de energía durante este tramo horario para aquellos que tengan la posibilidad.
              <br></br>
              <br></br>
              ¡La construcción de un mercado a nivel nacional es el objetivo que perseguimos lograr mediante nuestra plataforma!
            </p>
            <div className='my-2 px-4 mx-auto text-center max-w-screen-xl lg:px-6' style={{ maxWidth: "750px" }}>
              <img src='/images/precio-electricidad-14h-15h.jpg' alt='Mapa de Europa y precios de la electrcidad, valor 0 mercado iberico' />
              <p className='text-gray-800'> Precios del último domingo de Agosto en España entre las 14h y 15h</p>
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

