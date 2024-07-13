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
            Necesidad de gestión activa en la venta de energía para asegurar la rentabilidad
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>
          <div className='grid py-1 md: md:grid-cols-1 '>
            <p className='text-gray-800'>
              En lo que llevamos de año 2024 se han registrado las mismas horas con la electricidad a precio 0€ que en todo 2023. Y no ha sido un hecho puntual, es una tendencia a largo plazo.          <br></br>
              <br></br>
            </p>



            <p className='text-gray-800'>
              Esta problemática es causada mayormente por lo que se conoce como canibalización fotovoltaica-fotovoltaica. Es sensato y recomendable el buscar un precio fijo por MWh producido. Los precios del mercado diario son volátiles y tan incómodos para el comprador, que no tiene seguridad sobre un coste que puede ser significativo para su actividad, como incómodos para el productor que puede no tener asegurado la viabilidad o rentabilidad de la inversión realizada.               <br />
            </p>


            <p className='text-gray-800'>
              <br></br>
              Muchos tienen la esperanza de recuperar lo perdido en el caluroso verano con elevados consumos por refrigeración, y si esto no sucede? Esto se observa en el coste de futuros coberturas trimestrales.
              <br></br>
              <br></br>
              Sin embargo ante un cambio de paradigma debemos reaccionar, además existe una prima en el precio para realizar contratos a largo plazo, ambas partes ganan, además hay la posibilidad de que un intermediario cualificado cree un mix de tecnologías para conseguir un precio más atractivo por MWh, que mediante la simple venta con instalación propia.
              <br></br>
              <br></br>
            </p>

            <p className='text-gray-800'>
              Aquí unos gráficos de OMIE, primero donde se compara el precio mínimo del mercado diario y precio PPA a 50€/MWh línea azul, 2024.
              Segundo gráfico, precio de mercado medio y PPA 50€/MWh. (El precio conseguido en PPA puede ser superior a este)

            </p>
            <div className='mx-auto mt-4  text-center max-w-screen-xl' style={{ maxWidth: "600px" }}>
              <img src='/images/minimovsppa.png' alt='Alternativas para el suministro eléctrico' />
            </div>
            <div className='mx-auto mt-4  text-center max-w-screen-xl' style={{ maxWidth: "600px" }}>
              <img src='/images/mediovsppa.png' alt='Alternativas para el suministro eléctrico' />
            </div>

            <div className='container max-w-5xl px-3'>

              <ul className="list-disc mt-4 px-4 mx-2">
                <li>
                  <p className=' text-gray-700 pb-2'>
                    La venta de energía gracias al gran desarrollo renovable en recientes años pasa a convertirse en una actividad dinámica y la cual requiere de una gestión activa y cualificada.    </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Los grandes consumidores tienen muchas ventajas también en participar mediante compras directas en el mercado eléctrico y gestión activa de su suministro!     </p>
                </li>


              </ul>


              <br />
            </div>
            <p className='text-gray-800'>
            Nota: Me parece más significativo el precio mínimo vs PPA, si bien hace más de un año la fotovoltaica producía en los momentos de mayores precios, esta realidad ha cambiado y ahora con las primeras horas de sol los precios tienden al mínimo de la sesión con poca fluctuación de 10h a 17h.             </p>
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

