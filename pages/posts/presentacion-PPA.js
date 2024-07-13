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
            PPA como alternativa para el suministro eléctrico
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>
          <div className='grid py-1 md: md:grid-cols-1 '>
            <p className='text-gray-800'>
            Presentamos una nueva oferta en nuestro mercado de energías renovables: contratos de compra de energía directamente a productor (PPA). Ofrecemos contratos a medio plazo, ej. contrato de un año con instalaciones ya construidas y operativas 100%. Es una oportunidad para grandes consumidores eléctricos de reducir su factura y conseguir precios estables.
              <br></br>
              <br></br>
            </p>
            <p className='text-gray-800'>
              Un PPA es un contrato bilateral de compra de energía a recibir a medio o largo plazo entre un generador de energía y un gran consumidor.  Siendo una herramienta ampliamente utilizada entre las grandes multinacionales extranjeras, las cuales están al alcance de cualquier gran consumidor nacional.
              <br></br>
              <br></br>
            </p>
            <div className='container max-w-5xl px-3'>
              <h2 className='mb-3 text-xl tracking-tight text-gray-900'>Ventajas para consumidores de energía vía PPA </h2>
              <ol className="list-decimal mt-4 px-4 mx-2">
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Precios estables y competitivos, con descuentos significativos sobre los precios actuales y futuros.                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Reduce tus emisiones y huella de carbono. Suministro de energía limpia y rastreable, proveniente de una fuente específica que puedes identificar.

                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Planifica financieramente con mayor certeza.  Protégete de las fluctuaciones del mercado diario.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>

                    Personalización según tus necesidades: cada producto se adapta a tu perfil de consumo.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Aseguras tu suministro e impulsas la inversión en nuevos activos renovables.

                  </p>
                </li>

              </ol>


              <br />
            </div>
            <div className='container max-w-5xl px-3'>
              <h2 className='mb-3 text-xl tracking-tight text-gray-900'>Ventajas para productores de venta de energía vía PPA </h2>
              <ol className="list-decimal mt-4 px-4 mx-2">
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Proporciona una certeza de ingresos a largo plazo, gracias a un precio fijo por MWh o escalable en la duración del contrato.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Valoración superior gracias al potencial para reducir las emisiones y huella de carbono del comprador.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Protege contra la volatilidad del mercado diario.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Planifica financieramente con mayor certeza, gracias a  la seguridad de ingresos a largo plazo.
                  </p>
                </li>
                <li>
                  <p className=' text-gray-700 pb-2'>
                    Facilitan la obtención de financiación para nuevos proyectos o la expansión de la capacidad existente.
                  </p>
                </li>

              </ol>


              <br />
            </div>
            <p className='text-gray-800'>
              Caso ideal, encontramos un parque solar o eólico que tenga una producción semejante a tu consumo 1:1. Si consideras que tu consumo no es significativo para dar el salto a PPA, existe la posibilidad de agregar demanda de varios compradores y llegar a la producción de un parque solar para firmar el PPA. Las condiciones se pueden negociar para que se adapten al consumo de almacenes, refrigeración, calefacción, transporte etc.
              <br />
              <br />
            </p>
            <p className='text-gray-800'>
              Aprovechando nuestro conocimiento e información especializada del mercado asesoramos sobre estrategias de adquisición de energía mediante PPA.  Proceso:

            </p>
            <ol className="list-decimal mt-4 px-4 mx-2">
              <li>
                <p className=' text-gray-700 pb-2'>
                  Se valoran el consumo eléctrico y la existencia de potencial ahorro.
                </p>
              </li>
              <li>
                <p className=' text-gray-700 pb-2'>
                  Encuentramos el productor adecuado.
                </p>
              </li>

              <li>
                <p className=' text-gray-700 pb-2'>
                  Se negocia el precio y condiciones de entrega de la electricidad. Directamente entre el consumidor y el productor.
                </p>
              </li>
              <li>
                <p className=' text-gray-700 pb-2'>
                  En el lado de la oferta, hemos observado una gran dificultad y pérdida de dinero por fallo en el proceso y en la valoración de estos.
            </p>

          </li>
          <li>
            <p className=' text-gray-700 pb-2'>
              Se realiza el consumo de energía y pago al productor.
            </p>
          </li>

        </ol>
        <p className='text-gray-800'>
          <br></br>
          Puedes considerar un PPA como si fuese alquilar un panel solar en tu tejado por el plazo de tiempo del contrato, ej. 1 año.               

          La generación distribuida de electricidad o pequeños actores produciendo energía en todos los puntos del país permiten que negocios tanto cercanos como cualquier otra localización se beneficien de ser receptores de esta producción.              <br></br>
          <br></br>

          Conectamos productores de energía renovable con las empresas que desean utilizar energía limpia. Aseguramos que nuestros clientes puedan demostrar el origen renovable de su consumo eléctrico.  ¡Los criterios económicos y sostenibles están alineados!
        </p>
        <div className='mx-auto mt-4  text-center max-w-screen-xl' style={{ maxWidth: "450px" }}>
          <img src='/images/ppa.png' alt='Esuqema funcionamiento PPA' />
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

