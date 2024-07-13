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
            Una mejor integración de las energías renovables se traducirá en un mercado dinámico para sus certificados GdO - RECs
          </h1>
        </div>
      </div>

      <section className='bg-white container max-w-5xl mx-auto m-8'>
        <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>
          <div className='grid py-1 md: md:grid-cols-1 '>
            <p className='text-gray-800'>
              El porcentaje de electricidad generada y consumida sobre el total del mix energético es cada vez mayor. Europa apuesta por esta tendencia a la electrificación para lograr su independencia de productores de terceros países.  Presentamos un posible escenario y una evaluación de solución tecnológica.
              <br></br>
              <br></br>
              <b>Realidad actual de los mercados eléctricos</b>
              <br></br>
              Europa está desvinculando el precio de la electricidad de los precios de los combustibles fósiles a la vez que busca un mayor porcentaje producido por fuentes renovables. España ha pasado en 5 años del 40% de capacidad renovable instalada en 2018 al 60% en 2023. El siguiente gráfico muestra la generación próxima a alcanzar el 50% y próxima a superar a la no renovable.
              <br></br>
              <br></br>
            </p>
            <div className='mx-auto text-center max-w-screen-xl' style={{ maxWidth: "450px" }}>
              <img src='/images/renewable-vs-non.png' alt='Mapa de Europa y precios de la electrcidad, valor 0 mercado iberico' />
            </div>
            <p className='text-gray-800'>
              El mercado de la electricidad y la certificación de origen han estado hasta cierto punto separados o no tan conectados y automatizados como podrían estar. Se produce energía renovable y se crea un certificado renovable al mes siguiente, 1 MWh medido= 1 GO.
              Los consumidores y empresas preocupados por el medio ambiente, algunos de los cuales también están obligados por ley a utilizar energía renovable, adquieren estos certificados de origen los meses siguientes, muy probablemente a través de sus suministradores de electricidad. El deseo de energía renovable aumenta, y por tanto su valor. Nuevos actores entran en la producción, como los prosumidores, productores y consumidores, gracias a sus paneles en un tejado. Todos los participantes deben buscar una adaptación para que estos mercados sean accesibles a todos.
              <br></br>
              <br></br>
              <b>   Posible escenario futuro</b>
              <br></br>

              Por ejemplo: un panel solar en un tejado inyecta energía en la red, medida por los contadores inteligentes, con certificados GO con fecha y hora en el marco temporal en el que se negocia la electricidad (por ejemplo, 15 minutos). Su proveedor de electricidad recibe directamente, o adquiere este certificado, y lo cancela para su hogar a medida que la electricidad es consumida y medida por los contadores inteligentes. Los grandes desequilibrios de cartera pueden seguir cubriéndose en los intercambios tradicionales, certificados con rangos temporales más largos.              <br></br>
              <br></br>
              Para alcanzar este escenario idealista, o cualquiera de los posibles intermedios, y desarrollar un mercado más justo, la Asociación de Organismos Emisores, AIB, ha expresado sus principales preocupaciones y necesidades de mejora en todos sus Estados miembros:
            </p>
            <ul className="list-disc text-gray-800 mx-5 ">
              <li>Se fomenta el sello de tiempo en las GO.</li>
              <li>Definición del tamaño de la GO: Por defecto se fija en 1 MWh, con previsión de fracciones cuando proceda.</li>
              <li>Procedimientos de registro simplificados obligatorios para los GO de pequeños dispositivos de producción. </li>
            </ul>
            <p className='text-gray-800'>
              Con especial atención a integrar a los pequeños productores y darles acceso a estos beneficios sin explotar, deben evaluarse tecnologías eficientes.
            </p>

            <p className='text-gray-800 mt-5'>
              <b>Una tecnología rentable que conviene valorar</b>
              <br></br>
              Blockchain destaca por ser un sistema rentable, escalable y transparente con numerosas aplicaciones. Facilita el sellado de tiempo y la granularidad, permitiendo el fraccionamiento preciso de los certificados. Su versatilidad se extiende a la emisión de certificados, el registro de transacciones, el seguimiento de saldos, la gestión de la entrega y el consumo finales, y la actuación como infraestructura fiable de liquidación y compensación de pagos. Más allá de estas funciones básicas, blockchain ofrece una "plataforma abierta" para las empresas que buscan innovar y crear sus propios productos y servicios de valor añadido basados en la riqueza de los datos disponibles en el registro. Esta adaptabilidad beneficia a todas las partes interesadas, desde las grandes explotaciones energéticas hasta los prosumidores individuales.
              <br></br>
              <br></br>
              Además, la forma distribuida (un paso después de la descentralización) de las redes blockchain se adapta a la tendencia hacia una red energética de forma descentralizada, al tiempo que proporciona una mayor fiabilidad para realizar transacciones plenamente funcionales las 24 horas del día, los 7 días de la semana.
            </p>

            <p className='text-gray-800 mt-5'>
              <b>Resumen</b>
              <br></br>
              La tecnología presentada es sólo una opción que, según nuestro conocimiento y experiencia, podría hacer frente al reto, siendo al mismo tiempo fácil de desplegar y escalable a cualquier cantidad de datos en un futuro próximo; otras herramientas tecnológicas presentes o futuras podrían cumplir mejor estos requisitos.              <br></br>
              <br></br>
              Se están perdiendo millones en valor potencial para los productores, entre un 5% y un 10% del valor de la energía. Una pérdida debida a la falta de mercados nacionales y sistemas de transacción adecuados a efectos de liquidez, que aporten la correcta descubribilidad del precio. Todos los participantes, desde los organismos gubernamentales encargados de la supervisión y los registros hasta los proveedores de energía y los productores de todos los tamaños, deben estar preparados para un mercado más dinámico, con mayores volúmenes y valores más elevados para los certificados de energías renovables. ¿Está su empresa preparada para esta transición?
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

