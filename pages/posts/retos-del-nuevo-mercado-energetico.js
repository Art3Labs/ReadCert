/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "../../components/Footer/Footer"
import BigNavbar from "../../components/Nav/BigNavbar"
import React from "react";
import { useMatomo } from '@datapunt/matomo-tracker-react';
import ContactForm from "../../components/Funcionalidad/ContactForm";

export default function welcome() {

  //for tracking
const { trackPageView } = useMatomo();
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
            Retos del nuevo mercado energético           </h1>
        </div>
      </div>
      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>
          <div className='grid py-1 px-5  md:gap-5  md:grid-cols-1 '>
            <p className='text-gray-800'>
              El futuro mercado eléctrico se enfrenta a diversos retos tanto en producción como consumo. En producción, la producción de energía del futuro será principalmente distribuida, es decir con una importante parte de la producción procedente de la energía solar y eólica. Lo que implica la necesidad de sistemas interoperables entre un número creciente de productores, distribuidores y operadores. En consumo, monitorización del consumo y monitorización de emisiones en tiempo real para su reducción y compensación.               <br></br>
              <br></br>
              Otros temas también de importancia a tratar son:
            </p>

            <ul className='list-disc px-5'>
              <li >
                Pequeños productores independientes que inyectan a la red.
              </li>
              <li >
                Carga para vehículos eléctricos y descarga-devolución de energía, es decir, actuando como batería.
              </li>
              <li >
                Flexibilidad de la demanda, no todo es aumentar la capacidad. En horas punta o cuando se produce poca energía la demanda también podría bajar, por ejemplo a cambio de una compensación.
              </li>
              <li>
                Comunicaciones y compatibilidad con varios dispositivos IoT para la  monitorización de la red, por ejemplo contadores inteligentes.
              </li>
            </ul>

            <p className='text-gray-800'>
              Estos y más retos que afectan al sector eléctrico del presente y futuro encuentran una base sobre la que apoyarse para solventarlos en las herramientas de código abierto de la Fundación Linux. Echa un vistazo a los proyectos aquí: https://www.lfenergy.org/               <br></br>
              <br></br>
              Desde GdOsolar queremos ayudar en la parte de la rentabilización para los presentes y  nuevos productores y empresas que busquen una alternativa real para la descarbonización de sus fuentes energéticas.

            </p>
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

