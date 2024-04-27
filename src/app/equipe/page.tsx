import { Members } from "@/components/Members/Members";

const data = {
  name: "DRA. NIKOLLY KAROLINE MORAIS E SILVA ",
  profession: "Advogada",
  location: "São Paulo/SP",
  email: "nikolly2@hotmail.com",
  linkedin: "https://www.linkedin.com/in/juan-useche-79b395235/",
  image: "/ImgMembers/Nikolly.svg",
}


export default function Equipe() {
  return (
    <div>
      <div className="grid place-items-center  bg-cover  bg-top " style={{backgroundImage: "url('/ImgSobreNos/Equipe.svg')", height: "659px"}}>
        <div className="grid grid-cols-2 place-items-center w-full max-w-screen-xl">
            <h1 className="font-Alegreya font-bold text-5xl">
              Equipe
            </h1>
        </div>
      </div>
      <div className="grid place-items-center" style={{backgroundColor: "white"}}>
      <Members member={data}/>
      </div>
    </div>
  );
}
