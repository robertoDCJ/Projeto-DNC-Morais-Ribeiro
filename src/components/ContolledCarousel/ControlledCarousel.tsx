"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

type ImgCarouselProps = React.ComponentProps<"div">;

function ImgCarousel({ ...props }: ImgCarouselProps) {
  return (
    <div
      className="filter brightness-75 border bg-cover bg-center flex h-659 w-full"
      {...props}
    ></div>
  );
}

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="relative font-Alegreya">
      <div className="flex flex-col break-words md:ml-44 ml-10 translate-y-1/2 absolute z-1 md:w-456 w-300">
        <h1 className="md:text-42 text-3xl font-bold mb-2 antialiased">
          Morais & Ribeiro
        </h1>
        <h2 className="md:text-2xl text-base font-bold antialiased">
          Somos mais do que apenas advogados - somos uma parceria fundada na
          amizade e no profissionalismo.
        </h2>
        <div className="border border-white my-3"></div>
        <p className="font-normal md:text-lg text-sm mb-3 antialiased">
          Confie em nós para representar seus interesses com paixão,
          profissionalismo e comprometimento. Somos um escritório de atuação
          full service, 360º, adaptando,entendendo e acolhendo cada cliente com
          sua respectiva demanda.
        </p>
        <p className="antialiased">
          Estamos honrados em fazer parte de sua jornada jurídica e ansiosos
          para trabalhar juntos na busca por soluções eficazes e justas.
        </p>
      </div>
      <Carousel interval={10000} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ImgCarousel
            style={{
              backgroundImage:
                "url('/img1.svg'), linear-gradient(to bottom, transparent 0%, #000 100%)",
            }}
          ></ImgCarousel>
        </Carousel.Item>

        <Carousel.Item>
          <ImgCarousel />
        </Carousel.Item>

        <Carousel.Item>
          <ImgCarousel />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
