"use client";

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ImgCarousel } from '../ImgCarousel/ImgCarousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ImgCarousel 
        backgroundImageUrl='/Img1.svg'

        title="Morais & Ribeiro"

        text="Somos mais do que apenas advogados - somos uma parceria fundada na amizade e no profissionalismo."

        line={true}
      
        info={
        <>
          Confie em nós para representar seus interesses com paixão, profissionalismo e
          comprometimento. Somos um escritório de atuação full service, 360º, adaptando,
          entendendo e acolhendo cada cliente com sua respectiva demanda. <br/> <br/>
          Estamos honrados em fazer parte de sua jornada jurídica e ansiosos para trabalhar
          juntos na busca por soluções eficazes e justas.
        </>
         } />

      </Carousel.Item>

      <Carousel.Item>
        <ImgCarousel/>

      </Carousel.Item>

      <Carousel.Item>
        <ImgCarousel/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

