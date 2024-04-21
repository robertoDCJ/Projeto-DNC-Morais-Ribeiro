"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BasicMenu } from "../materialUI/BasicMenu";
import { Navbar } from "./Navbar/Navbar";

export const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const windowBigger = windowSize > 768;
  const windowSmaller = windowSize < 768;

  return (
    <div className="flex flex-row md:px-8 px-4 border items-center md:justify-between justify-center">
      <Image
        src="./logo.svg"
        alt="Logo Escritório de Advocacia Morais & Ribeiro"
        width={192}
        height={0}
      />
      {windowBigger && <Navbar />}
      {windowSmaller && <BasicMenu className="w-9 object-cover text-white" />}
    </div>
  );
};
