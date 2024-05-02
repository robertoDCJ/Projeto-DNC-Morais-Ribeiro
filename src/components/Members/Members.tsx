"use client";

import { useState } from "react";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form"

type Member = {
  id: number;
  name: string;
  profession: string;
  location: string;
  email: string;
  linkedin: string;
  image: string;
};

export const Members = ({
  member,
  line,
}: {
  member: Member;
  line: boolean;
}) => {
  const {register, handleSubmit} = useForm({
    defaultValues:{
      id: member.id,
      name: member.name,
      profession: member.profession,
      location: member.location,
      email: member.email,
      linkedin: member.linkedin,
      image: member.image,
    }
  });

  const onSubmit = handleSubmit( data => {
    console.log(data)
  });


  const [fotoURL, setFotoURL] = useState<string | null>(
    member.image? member.image : "/ImgMembers/Background.svg"
  );
  const [handdleEditar, setHanddleEditar] = useState<boolean>(false);

  const handleImagenSeleccionada = (event: ChangeEvent<HTMLInputElement>) => {
    const archivos = event.currentTarget.files;
    if (archivos && archivos.length > 0) {
      const imagenSeleccionada = archivos[0];
      const urlImagen = URL.createObjectURL(imagenSeleccionada);
      setFotoURL(urlImagen);
    }
  };

  return (
    <div className="w-full relative grid place-items-center max-w-screen-xl p-4">
      {handdleEditar && <>
      <div className="w-full h-full bg-slate-700 opacity-50 rounded-3xl  absolute  z-20"/>
      <div className="flex flex-col  items-center md:flex md:flex-row md:items-start  bg-white rounded-3xl  absolute  z-30">
        <img
          className="p-4"
          src={`${fotoURL}`}
          alt="Foto seleccionada"
          style={{ width: "200px" }}
        />
          {" "}
        <form onSubmit={onSubmit}
         className="text-black font-Alegreya font-bold grid gap-1 p-4 max-w-screen-sm">
          <label htmlFor="name">Nome</label>
          <input
            {...register("name", {
              required: false
            })
          }

            className="text-gray-500"
            id="name"
            type="text"
            placeholder="Nome"
          />
          <label htmlFor="profession">Profissão</label>
          <input
             {...register("profession", {
                required: false
             })}

            className="text-gray-500"
            id="profession"
            type="text"
            placeholder="Profissao"
          />
          <label htmlFor="location">Região</label>
          <input
            {...register("location", {
              required: false
            })}

            className="text-gray-500"
            id="location"
            type="text"
            placeholder="Região"
          />
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: false
            })}

            className="text-gray-500"
            id="email"
            type="email"
            placeholder="Email"
          />
          <label htmlFor="linkedin">Linkedin</label>
          <input
             {...register("linkedin", {
              required: false
            })
          }
            className="text-gray-500"
            id="linkedin"
            type="text"
            placeholder="LinkedIn"
          />
          <label htmlFor="image">Foto</label>
          <input
            {...register("image", {
              required: false
            })
          }
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
              Guardar
            </button>
            <button
              className="bg-black rounded-md  text-white font-Alegreya w-24  py-1 transition-all duration-500 hover:-translate-y-2"
              onClick={()=> setHanddleEditar(!handdleEditar)}
              type="button"
            >
              Sair
            </button>
          </div>
        </form>
      </div>
      </>}

      {line && (
        <div className="grid grid-rows-2 w-full place-items-end">
          <div className="border-black mb-5  border w-full" />
        </div>
      )}

      <div className="grid md:flex md:flex-row text-black">
        <div className="grid grid-cols-1 place-items-center">
          <img
            src={member.image}
            alt={`Imagen de ${member.name} `}
            style={{ width: "436px" }}
          />
        </div>

        <div className="mt-4 p-3">
          <div className="flex justify-evenly   md:flex md:flex-row md:justify-end pb-3 gap-10">
            <button
              className="bg-black rounded-md  text-white font-Alegreya  py-2 px-4 transition-all duration-500 hover:-translate-y-2"
              onClick={() => setHanddleEditar(!handdleEditar)}
            >
              Editar
            </button>
            <button className="bg-black rounded-md  text-white font-Alegreya  py-2 px-4 transition-all duration-500 hover:-translate-y-2">
              Remover
            </button>
          </div>

          <h1 className="font-Alegreya font-bold text-2xl border-b-2 mb-5 border-black">
            {member.name}
          </h1>

          <div className="grid gap-3 md:grid  md:grid-cols-2 break-all">
            {member.profession && (
              <h1 className="font-Lato font-medium text-3xl">
                {member.profession}
              </h1>
            )}

            <div className="grid gap-3 font-Lato font-medium text-zinc-500">
              {member.location && (
                <div className="flex gap-3">
                  <img
                    src="/SocialMediaIcons/Location.svg"
                    alt="Location Icon"
                  />
                  {member.location}
                </div>
              )}

              {member.email && (
                <a className="flex gap-3 underline">
                  <img src="/SocialMediaIcons/Email.svg" alt="Email Icon" />
                  {member.email}
                </a>
              )}

              {member.linkedin && (
                <a href={member.linkedin} className="flex gap-3">
                  <img
                    src="/SocialMediaIcons/Linkedin.svg"
                    alt="Linkedin Icon"
                  />
                  {member.linkedin}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
