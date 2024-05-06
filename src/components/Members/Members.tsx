"use client";

import { useState } from "react";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

type Member = {
  id: string
  name: string
  profession: string
  location: string
  email: string
  linkedin: string
  image: string
};

export const Members = ({
  member,
  line,
}: {
  member: Member;
  line: boolean;
}) => {
  const [message, setMessage] = useState<string | null>("");
  const [handdleEditar, setHanddleEditar] = useState<boolean>(false);
  const [fotoURL, setFotoURL] = useState<string | null>(
    member.image ? member.image : "/ImgMembers/Background.svg"
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: member.id,
      name: member.name,
      profession: member.profession,
      location: member.location,
      email: member.email,
      linkedin: member.linkedin,
      image: member.image,
    },
  });

  // Update member
  const onSubmit = handleSubmit(async (data) => {
    const newData = { ...data, image: fotoURL };
    try {
      const response = await fetch("/api/member", {
        method: "PUT",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Membro atualizado com sucesso!");
        setMessage("Membro atualizado com sucesso!");
        setTimeout(()=>{
          setMessage(null);
        }, 3000)

      } else {
        console.error("Erro ao atualizar o membro");
        setMessage("Erro ao atualizar o membro!");
        setTimeout(()=>{
          setMessage(null);
        }, 3000)
      }
    } catch (error) {
      console.error("Erro ao enviar a requisição:", error);
    }
  });

  //Delete member
  const onDelete = async () => {
    try {
      const response = await fetch(`/api/member?id=${member.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "Aplication/json",
        },
      });

      if (response.ok) {
        console.log("Membro apagado com sucesso!");
        setMessage("Membro apagado com sucesso!");
        setTimeout(()=>{
          setMessage(null);
        }, 3000)
      } else {
        console.log("Erro ao apagar membro");
        setMessage("Erro ao apagar membro!");
        setTimeout(()=>{
          setMessage(null);
        }, 3000)
      }
    } catch (error) {
      console.error("Erro ao enviar a requisição:", error);
    }
  };

  //Render and conversion seleted image
  const handleSelectedImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files && files.length > 0) {
      const imageSelected = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString();

        if (base64String) {
          setFotoURL(base64String);
        }
      };
      reader.readAsDataURL(imageSelected);
    }
  };

  return (
    <div className="relative w-full  grid place-items-center max-w-screen-xl p-4">
      {handdleEditar && (
        <>
          <div className="w-full h-full bg-slate-700 opacity-50 rounded-3xl  absolute  z-20" />
          <div className="flex flex-col  items-center md:flex md:flex-row md:items-start  bg-white rounded-3xl  absolute  z-30">
            <img
              className="p-4"
              src={`${fotoURL}`}
              alt="Foto seleccionada"
              style={{ width: "200px" }}
            />{" "}
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
                className="text-gray-500"
                id="image"
                type="file"
                accept="image/*"
                onChange={handleSelectedImage}
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
                  onClick={() => setHanddleEditar(!handdleEditar)}
                  type="button"
                >
                  Sair
                </button>
              </div>
              { message &&
                <div className="grid place-items-center p-2 font-bold">
                <p>{message}</p>
                </div>}
            </form>
          </div>
        </>
      )}

      {line && (
        <div className="grid grid-rows-2 w-full place-items-end">
          <div className="border-black mb-5  border w-full" />
        </div>
      )}

      <div className="grid md:grid md:grid-cols-2   text-black">
        <div className="grid grid-cols-1 place-items-center">
          <img
            src={member.image}
            alt={`Imagen de ${member.name} `}
            style={{ width: "436px" }}
          />
        </div>

        <div className="mt-4 p-3">
          <div className="flex justify-evenly   md:flex md:flex-row md:justify-end pb-5 gap-10">
            <button
              className="bg-black rounded-3xl  text-white font-Alegreya  py-2 px-4 transition-all duration-500 hover:-translate-y-2"
              onClick={() => {
                setHanddleEditar(!handdleEditar);
              }}
            >
              Editar
            </button>
            <button
              className="bg-black rounded-md  text-white font-Alegreya  py-2 px-4 transition-all duration-500 hover:-translate-y-2"
              onClick={onDelete}
            >
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
          {message &&
          <div className="grid place-items-center mt-12 font-bold">
            <p>{message}</p>
          </div>}

        </div>
      </div>
    </div>
  );
};
