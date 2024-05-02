"use client";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Members } from "@/components/Members/Members";

const data = [
  {
    id: 1,
    name: "DRA. NIKOLLY KAROLINE MORAIS E SILVA ",
    profession: "Advogada",
    location: "São Paulo/SP",
    email: "nikolly2@hotmail.com",
    linkedin: "https://www.linkedin.com/in/nikolly-morais-silva-4a7271169/",
    image: "/ImgMembers/Nikolly.svg",
  },

  {
    id: 2,
    name: "DR. JOÃO PEDRO RIBEIRO",
    profession: "Advogado",
    location: "São Paulo/SP",
    email: "j.pedro.resende@hotmail.com",
    linkedin: "https://www.linkedin.com/in/joaopedrorrmoliveira/",
    image: "/ImgMembers/Joao.svg",
  },

  {
    id: 3,
    name: "DR. GUSTAVO SANTOS RIBEIRO",
    profession: "Advogado",
    location: "São Paulo/SP",
    email: "",
    linkedin: "https://www.linkedin.com/in/gustavo-santos-ribeiro-31b652196/",
    image: "/ImgMembers/Gustavo.svg",
  },
];

export default function Equipe() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [fotoURL, setFotoURL] = useState<string | null>("/ImgMembers/Background.svg");
  const [handdleAddMember, setHanddleAddMember] = useState<boolean>(false);

  const handleImagenSeleccionada = (event: ChangeEvent<HTMLInputElement>) => {
    const archivos = event.currentTarget.files;
    if (archivos && archivos.length > 0) {
      const imagenSeleccionada = archivos[0];
      const urlImagen = URL.createObjectURL(imagenSeleccionada);
      setFotoURL(urlImagen);
    }
  };
  return (
    <div className="relative">
      {handdleAddMember && (
        <>
          <div className="w-full h-full bg-slate-700 opacity-50  absolute  z-20" />
          <div className="grid justify-items-center w-full h-full absolute z-30 pt-96  ">
            <div className="grid justify-items-center max-w-screen-xl">
              <div className="flex flex-col  items-center md:flex md:flex-row md:items-start  bg-white rounded-3xl  absolute  z-30">
                <div className="grid place-items-center">
                  <img
                    className="p-4"
                    src={`${fotoURL}`}
                    alt="Foto seleccionada"
                    style={{ width: "200px" }}
                  />{" "}
                  <p  className="text-black font-Alegreya font-bold">
                    Adicione uma foto</p>
                </div>
                <form
                  onSubmit={onSubmit}
                  className="text-black font-Alegreya font-bold grid gap-1 p-4 max-w-screen-sm"
                >
                  <label htmlFor="name">Nome</label>
                  <input
                    {...register("name", {
                      required: false,
                    })}
                    className="text-gray-500"
                    id="name"
                    type="text"
                    placeholder="Nome"
                  />
                  <label htmlFor="profession">Profissão</label>
                  <input
                    {...register("profession", {
                      required: false,
                    })}
                    className="text-gray-500"
                    id="profession"
                    type="text"
                    placeholder="Profissao"
                  />
                  <label htmlFor="location">Região</label>
                  <input
                    {...register("location", {
                      required: false,
                    })}
                    className="text-gray-500"
                    id="location"
                    type="text"
                    placeholder="Região"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email", {
                      required: false,
                    })}
                    className="text-gray-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <label htmlFor="linkedin">Linkedin</label>
                  <input
                    {...register("linkedin", {
                      required: false,
                    })}
                    className="text-gray-500"
                    id="linkedin"
                    type="text"
                    placeholder="LinkedIn"
                  />
                  <label htmlFor="image">Foto</label>
                  <input
                    {...register("image", {
                      required: false,
                    })}
                    className="text-gray-500"
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImagenSeleccionada}
                  />
                  <div className="grid grid-cols-2 place-items-center  pt-4">
                    <button
                      className="bg-black rounded-md  text-white font-Alegreya w-24  py-1  transition-all duration-500 hover:-translate-y-2"
                      type="submit"
                    >
                      Adicionar
                    </button>
                    <button
                      className="bg-black rounded-md  text-white font-Alegreya w-24  py-1 transition-all duration-500 hover:-translate-y-2"
                      onClick={() => setHanddleAddMember(!setHanddleAddMember)}
                      type="button"
                    >
                      Sair
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className="grid place-items-center  bg-cover  bg-top "
        style={{
          backgroundImage: "url('/ImgSobreNos/Equipe.svg')",
          height: "659px",
        }}
      >
        <div className="grid grid-cols-2 place-items-center w-full max-w-screen-xl">
          <h1 className="font-Alegreya font-bold text-5xl">Equipe</h1>
        </div>
      </div>
      <div
        className="grid place-items-center"
        style={{ backgroundColor: "white" }}
      >
        <div className="grid grid-cols-1 transition-all place-items-center w-full max-w-screen-xl">
          <div className="grid place-items-center md:grid md:place-items-end w-full p-2">
            <button
              className="bg-black rounded-md  text-white font-Alegreya w-auto  py-2 px-3 transition-all duration-500 hover:-translate-y-2"
              onClick={() => setHanddleAddMember(!handdleAddMember)}
              type="button"
            >
              Adicionar Membro
            </button>
          </div>
        </div>
        {data.map((member) => (
          <Members
            key={member.id}
            member={member}
            line={member.id == 1 ? false : true}
          />
        ))}
      </div>
    </div>
  );
}
