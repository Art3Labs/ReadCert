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
       Suiza se compromete con el medioambiente, oportunidad para productores de energía renovable. 
         </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>

          <div className='grid py-1 md:gap-16  md:grid-cols-1 '>
            <p className='text-gray-800'>
              Suiza 🇨🇭 ha votado esta semana por la transición energética del país, con un 59% de los votos a favor de la neutralidad de carbono para 2050.  El domingo pasado se votó en referendum la ley federal de Objetivos de Protección Climática, Innovación y Fortalecimiento de la Seguridad Energética, la cual implementa el compromiso del país con el medioambiente.
              <br></br>
              <br></br>
              Los aspectos más destacados son:
              <br></br>
              Objetivos a lo largo de los próximos años de reducciones son del 64% para los años 2031-2040,  75% para 2040, 89% en promedio para los años 2041-2050. Estas reducciones son respecto a los valores de gases de efecto invernadero de 1990.              
              Existen además valores específicos para sectores de la edificación, transporte e industria.
              <br></br>
              <br></br>
              Algunos de los artículos de esta ley:
              <br></br>
              <br></br>
              Artículo 3. El gobierno federal garantiza que el impacto de las emisiones de gases de efecto invernadero causadas por las personas en Suiza sea cero para 2050 (objetivo de neutralidad de carbono).              
              <br></br>
              Artículo 5. Todas las empresas deben tener emisiones netas cero para 2050 como máximo. Como mínimo, se deben tener en cuenta las emisiones directas e indirectas.              
              <br></br>
              Artículo 9. El gobierno federal velará por que la plaza financiera suiza contribuya eficazmente a un desarrollo con bajas emisiones y resistente al cambio climático. En particular, se adoptarán medidas para reducir el impacto climático de los flujos financieros nacionales e internacionales.              
              <br></br>
              <br></br>
              Esto representa una gran oportuniad para los productores de energía verde en Europa. Suiza es nuestro segundo mercado objetivo tras España, gracias a la experiencia del fundador en el mercado suizo.  Nos alegramos por este resultado, y nos ponemos al servicio de realizar el servicio de encontrar compradores e importarlos al país.
            </p>
            <div className='my-6 px-4 mx-auto text-center max-w-screen-xl lg:px-6' style={{ maxWidth: "650px" }}>
              <img src='/images/referendumclima.png' alt='Resultado del referendum por cantón' />
              <p className='text-gray-800'> Resultado del referendum por cantón. Fuente Swissinfo.ch</p>
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

