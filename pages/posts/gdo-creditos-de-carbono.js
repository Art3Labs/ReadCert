/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Footer from "../../components/Footer/Footer"
import BigNavbar from "../../components/Nav/BigNavbar"
import React from "react";
import { useMatomo } from '@datapunt/matomo-tracker-react';
import ContactForm from "../../components/Funcionalidad/ContactForm";
export default function welcome() {
 
  //for tracking
   const { trackPageView} = useMatomo();
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
            Garantías de origen y créditos de carbono
          </h1>
          <p className='m-2 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-36'>

          </p>
        </div>
      </div>
      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>      
          <div className='grid py-1 md:gap-16  md:grid-cols-1 '>
            <p className='text-gray-800'>
              Mientras que las Garantías de Origen están ganando recientemente atención en ciertos mercados, los créditos de carbono han tenido más atención en los últimos años y son ampliamente conocidos. Queremos arrojar algo de luz sobre estos instrumentos para promover las energías renovables y los proyectos de protección del medio ambiente.
              <br></br>
              <br></br>
              ¿Cuáles son más apropiados para mi empresa?
              <br></br>
              <br></br>
              La decisión de utilizar certificados GO o créditos de carbono para compensar la huella de carbono de una empresa dependerá de varios factores, como los objetivos, valores y circunstancias específicas de la empresa.
              <br></br>
              Si el objetivo principal de una empresa es apoyar el desarrollo de fuentes de energía renovables y fomentar la transición a una economía con bajas emisiones de carbono, la compra de certificados GO puede ser más adecuada. Esto certificaría que la electricidad que compra la empresa se genera a partir de fuentes renovables.
              <br></br>
              <br></br>
              Por otro lado, si una empresa se centra principalmente en reducir sus propias emisiones de gases de efecto invernadero, entonces la compra de créditos de carbono puede ser más apropiada. Los créditos de carbono pueden utilizarse para compensar las emisiones que no pueden reducirse mediante esfuerzos internos, como el transporte.
              <br></br>
              <br></br>
              Es importante señalar que, aunque existen algunas diferencias entre los certificados de GO y los créditos de carbono, también pueden complementarse mutuamente. Por ejemplo, una empresa que compra créditos de carbono para compensar sus emisiones también puede querer comprar certificados GO para verificar que la electricidad que compra se genera a partir de fuentes renovables. Una gran ventaja de los GO es que, al menos en España, las mediciones están relacionadas con la producción 1:1 a través del mismo registro de producción eléctrica y de las liquidaciones de pagos por excedentes inyectados a la red.
              <br></br>
              <br></br>
              En última instancia, la forma más eficaz de reducir la huella de carbono de una empresa es centrarse primero en reducir las emisiones mediante esfuerzos internos, como la eficiencia energética y el cambio a fuentes de energía renovables, antes de considerar el uso de certificados GO o créditos de carbono para compensar las emisiones restantes. Es importante tener en cuenta que la compensación de carbono no debe utilizarse como sustituto de los esfuerzos de reducción de emisiones, sino más bien como una medida complementaria para alcanzar las emisiones netas cero.
              <br></br>
              <br></br>
              Aquí una tabla comparativa de las Garantías de Origen (GO) y los Créditos de Carbono.
            </p>
          </div>
        </div>


        <div className='my-6 px-4 mx-auto text-center max-w-screen-xl lg:px-6' style={{ maxWidth: "800px" }}>
        <img src='/images/gdoscarbono.png' alt='gdos-creditos-carbono' />

        </div>
      </section>
      <section>
        <ContactForm></ContactForm>

      </section>

      <Footer></Footer>
    </>
  );
}
