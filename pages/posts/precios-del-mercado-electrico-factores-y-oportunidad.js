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
            Factores que influyen en los precios bajos del mercado eléctrico en 2024    </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>
          <div className='grid py-1 md: md:grid-cols-1 '>
            <p className='text-gray-800'>
              Existen numerosas preguntas entre participantes en la cadena de valor de la producción eléctrica sobre los recientes valores bajos. Son varios los factores que influyen en el comportamiento de precios del mercado eléctrico, compartimos algunas observaciones:              <br></br>
              <br></br>
              Hay  vendedores que pueden ofertar a precio 0€ sin ver afectada su rentabilidad
            </p>

            <div className='container max-w-5xl px-3'>
              <ul className="list-disc mt-4 px-4 mx-2">
                <li>
                  <p className=' text-gray-700 pb-2'>
                  Instalaciones en régimen específico: las fluctuaciones de mercado no afectan a su rendimiento. Ya que cada año se recalcula su retribución por parte del Estado. Tienen obligación de ofertar a mercado. Solar y eóĺica aprox. 20% de la capacidad. 
                  </p> 
                                 </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Instalaciones con PPAs virtuales o financieros: con obligación de inyección y venta a mercado sin ser afectado por los precios del momento ya que las diferencias con el precio acordado con el comprador se saldarán tanto a favor como en negativo en posteriores balances.                   </p>
                </li>
              </ul>
              <br />
            </div>

            <p className='text-gray-800'>
              Otros vendedores sí ven afectada su rentabilidad pero pueden preferir o están comprometidos y por lo tanto ofertan a precio 0€ son instalaciones que vendan sus garantías de origen independientes a la electricidad las cuales estuvieron incluso a 12€ hace 2 años y pudieron haber sido comprometidas a precios de 7€ por varios años.              <br />
            </p>


            <p className='text-gray-800'>
              <br></br>
              Disminución de la demanda y participación en mercado de los autoconsumos residenciales e industriales que son un 3% de la capacidad.              <br></br>
              <br></br>
              Solución
              <br></br>
              <br></br>
            Venta directa a consumidores.  Los productores vendiendo en subastas de mercado diario siendo dependientes de precio para asegurar su rentabilidad deben transicionar a venta activa mediante contratos bilaterales.
              Conforme el lado vendedor comience a hacer PPA físicos o contratos bilaterales con entrega de energía física empezarán a desaparecer ofertas equilibrando los precios al alza.
              <br></br>
              <br></br>
            </p>

            <p className='text-gray-800'>
              Otro factores que influyen el alza o equilibrio de precios son en el corto plazo y estacionalmente, el aumento de consumo en verano, y a largo plazo:
            </p>

            <div className='container max-w-5xl px-3'>
              <ul className="list-disc mt-4 px-4 mx-2">
                <li>
                  <p className=' text-gray-700 pb-2'>
                    La llegada de industria electro intensiva de otras partes de europa continental a España por atractivo en precios.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    La relocalización  de industria que se había ido a Asía debido a los impuestos a contaminación producida en origen también llamado CBAM.
                  </p>
                </li>
              </ul>
              <br />
            </div>
            <p className='text-gray-800'>
              Los compradores de energía pueden sacar provecho a la necesidad de venta directa surgida en productores y obtener un suministro directo a precios con gran descuento respecto a suministrarse mediante comercializadoras tradicionales.
              Estoy elaborando una guía para compradores de energía en empresas y otras instituciones y así acceder a estos bajos precios de forma directa e inmediata. Envíanos un email a info@gdosolar.es y recibirás la guía cuando esté publicada.
            </p>
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

