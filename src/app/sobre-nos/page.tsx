"use client";

import React, { useState, useEffect } from 'react';

export default function SobreNos ()  {

  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsAnimationActive(window.innerWidth <= 600); // Activa la animación cuando la pantalla es más pequeña que 375px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función de manejo de tamaño al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    
      <div className="flex flex-col justify-center">
        <div className={`flex justify-center ${isAnimationActive? 'animate-slide' : 'bg-center'}`} style={{backgroundImage: "url('/ImgSobreNos.svg')", height:"659px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
          <div className="flex md:w-456 md:justify-start justify-center items-center" style={{width: "1000px"}}>
            <div className="flex flex-col md:w-456  w-250">
                <h1 className="font-Alegreya md:text-3xl text-xl  font-bold ">
                  Confie em nós para representar seus interesses com paixão,
                  profissionalismo e comprometimento.
                </h1>
                <div className="border border-white my-3 antialiased"/>
                <p className="font-Lato">
                Confie em nós para representar seus interesses com paixão, profissionalismo e 
                comprometimento. Somos um escritório de atuação full service, 360º, adaptando,
                entendendo e acolhendo cada cliente com sua respectiva demanda.

                Profissionais altamente qualificados e especializados em diversas áreas do direito,
                o Dr. Gustavo Santos Ribeiro possui vasta experiência em responsabilidade civil, 
                direito do consumidor e isenção de imposto de renda em casos de doença 
                grave;acolhendo cada cliente com sua respectiva demanda.
                </p>  
            </div>
          </div>
        </div>
      
      <div className="grid  justify-center" style={{backgroundImage: "url('/BackgroundSobreNos.svg')" }}>
        <div className="grid content-center max-w-[806px]">
            <div className="grid grid-cols-auto-fit text-black  gap-x-8 gap-y-8 pt-8 pb-8 ">
                <h1 className=" font-Alegreya font-bold text-4xl"> Nossa missão é guiar cada interação com nossos clientes.</h1>
                <p className="font-Lato font-normal"> Na Morais & Ribeiro Advocacia e Consultoria Jurídica, nossa missão é conduzida por três pilares fundamentais: foco, conhecimento e inovação.
                    Estamos comprometidos em fornecer soluções jurídicas e de negócios que transcendam as expectativas de nossos clientes e desafiem os paradigmas tradicionais da advocacia.</p>
            </div>
        </div>
    </div>

      {/* <h1>Sobre Nós</h1> */}
    </div>
  );
}

