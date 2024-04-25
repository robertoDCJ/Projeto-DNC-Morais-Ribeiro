import Image from "next/image";
import pessoas from "../../../public/pessoas.jpg";
import escritorio from "../../../public/escritorio.svg";

 const SectionHome = () => {
  return (
    <>
      <section 
      className="relative ">
        <div 
        className="top-0 right-8 text-white py-4 px-8 w-96" 
        style={{ backgroundColor: '#535353', position: 'absolute', top: 0, right: 'calc(50% - 42rem)' }}>
          <h2 
          className="text-center font-Alegreya text-xl font-serif">
              TRANSPARÊNCIA TOTAL
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:pl-12 ml-20 mt-20 relative">
          <Image
            src={pessoas}
            alt="pessoas"
            width={300}
            height={200}
            className="w-auto"
          />

          <p 
            className="text-left mt-8 ml-4 mr-8 leading-6">
              Acreditamos que a transparência é essencial para qualquer relação sólida.
              Na Morais & Ribeiro, comprometemo-nos a fornecer informações claras e compreensíveis 
              sobre os processos legais e seus possíveis desdobramentos.
              Buscamos eliminar barreiras na comunicação jurídica, garantindo que nossos clientes
              estejam sempre informados e capacitados a tomar decisões.
          </p>
        </div>

        <div 
          className="left-0 top-3 mt-5 text-white py-4 px-8 w-96" 
          style={{ backgroundColor: '#535353' }}>

          <h2 
            className="text-center font-Alegreya text-xl font-serif">
              SOLUÇÕES EFICAZES
          </h2>

        </div>

        <div 
          className="flex flex-col items-center gap-2 lg:flex-row pt-5">
            <p className="p-4 text-left mr-9 leading-6">
              Entendemos que cada situação jurídica é única, e abordamos cada caso com uma perspectiva personalizada. 
              Nosso objetivo não é apenas resolver conflitos, mas fazê-lo de maneira efetiva, rápida e justa. 
              Empregamos estratégias inovadoras, aliadas à nossa experiência, para encontrar soluções que atendam aos
              interesses de nossos clientes.
          </p>

          <Image
            src={escritorio}
            alt="escritorio"
            width={100}
            height={200}
            className="w-auto p-9"
          />
        </div>
      </section>

    <section 
      className="bg-gray-200 p-8 ">
        <h1 
          className="d-flex justify-center font-Alegreya  font-bold text-black"
          style={{ fontSize: '2.5rem'}}>
            Publicações Recentes
        </h1>

      <section 
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-8 mx-5">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img 
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt="" />
          </a>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Título
              </h5>
            </a>

            <p 
              className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Artigo
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center px-3 py-2 text-sm font-medium
              text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4
              focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800">
              Link
              <svg 
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 14 10">

                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        </div>
      </section>
      </section>

    </>
  );
};

export default SectionHome;
