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
            Potencial de España para ser un hub de energía para Europa
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>

          <div className='grid py-1 md:gap-16  md:grid-cols-1 '>
            <p className='text-gray-800'>
              España se posiciona para convertirse en uno de los principales centros energéticos de Europa.
              <br></br>
              <br></br>
              Los precios de la electricidad en España han sido los más bajos en comparación con otros países europeos desde principios de este año 2023, viniendo de la situación contraria un año antes.
              <br></br>
              <br></br>
              ¿Qué ha cambiado? ¿Se mantendrá esta situación a largo plazo?
              <br></br>
              <br></br>
              El rápido cambio se debe a la gran capacidad de generación renovable que se está instalando, +44% de fotovoltaica interanual, y a largo plazo gracias a los siguientes factores:
              <br></br>
              <br></br>
              Ubicación, ideal para la transmisión de energía entre Europa, el norte de África y Oriente Medio. España es el país europeo más cercano al Norte de África, y su proximidad al Estrecho de Gibraltar la convierte en una puerta natural para el comercio energético entre los continentes.La Península Ibérica le proporciona acceso tanto a la costa atlántica como a la mediterránea, lo que permite un fácil transporte de recursos energéticos por mar.
              <br></br>
              <br></br>
              Potencial de energías renovables, el país ya es líder mundial en energía eólica y está ampliando rápidamente su capacidad de energía solar y eólica marina. Las favorables condiciones climáticas de España, que incluyen altos niveles de radiación solar y fuertes vientos costeros, ofrecen condiciones ideales para el desarrollo de tecnologías de energías renovables. Todo ello, unido a los ambiciosos objetivos climáticos de España. Por primera vez, con más electricidad generada a partir de fuentes renovables que de fuentes convencionales.
              <br></br>
              <br></br>
              Infraestructuras, incluida una extensa red de gasoductos y múltiples terminales de gas natural licuado (GNL), que pueden facilitar la importación y distribución de gas natural de proveedores mundiales. Además, España ha invertido mucho en interconexiones con sus vecinos europeos, entre ellos Francia y Portugal, para garantizar un comercio energético seguro y eficiente en todo el continente.
              <br></br>
              <br></br>
              Su ubicación, su potencial de energías renovables y sus infraestructuras hacen de España un firme candidato a convertirse en un importante centro energético para Europa en los próximos años.
              <br></br>
              <br></br>
              En GdOsolar.es ☀️, ayudaremos a aumentar la velocidad de esta transición, incrementando los beneficios para los productores de energías renovables y su viabilidad a largo plazo, conectando a productores y usuarios preocupados por el medio ambiente y a empresas dispuestas a apoyar estas tecnologías.            </p>

            <div className='my-6 px-4 mx-auto text-center max-w-screen-xl lg:px-6' style={{ maxWidth: "650px" }}>
              <img src='/images/saldoelectricidad.png' alt='saldo de exportacion e importacion' />
              <p className='text-gray-800'>Saldo de exportación positiva en los meses de enero a abril. Fuente Red Eléctrica</p>
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

