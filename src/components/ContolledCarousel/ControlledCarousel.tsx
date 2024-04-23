"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

type ImgCarouselProps = React.ComponentProps<"div">;
type CarouselProps = React.ComponentProps<"div">;

function ImgCarousel({ ...props }: ImgCarouselProps) {
  return (
    <div
      className="filter brightness-75 border bg-cover bg-center flex h-659 w-full"
      {...props}
    ></div>
  );
}

export const ControlledCarousel = ({ children }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="relative font-Alegreya">
      <div className="flex flex-col break-words md:ml-44 ml-10 translate-y-1/4 absolute z-1 md:w-456 w-250">
        {children}
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
};
