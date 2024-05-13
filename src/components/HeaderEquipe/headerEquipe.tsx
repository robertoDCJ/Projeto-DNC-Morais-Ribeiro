"use client";

import { useResize } from "../UseResize/useResize"

export const HeaderEquipe = () =>{

    const isAnimationActive = useResize();
    return(
        <div
        className={`grid place-items-center  bg-cover  bg-top 
        ${
            isAnimationActive ? "animate-slide" : "bg-center"
          }` }
        style={{
          backgroundImage: "url('/ImgSobreNos/Equipe.svg')",
          height: "659px",
        }}
      >
        <div className="grid grid-cols-2 place-items-center w-full max-w-screen-xl">
          <h1 className="font-Alegreya font-bold text-5xl">Equipe</h1>
        </div>
      </div>
    )
}