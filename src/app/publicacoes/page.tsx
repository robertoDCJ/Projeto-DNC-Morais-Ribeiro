import { auth } from "@/../auth";
import Pagination from "@/components/Pagination/Pagination";
import db from "@/lib/db";
import Link from "next/link";
import { Artigo } from "./_component/artigo";

export default async function Publicacoes() {
  const session = await auth();
  const artigo = await db.post.findMany();

  return (
    <>
      <main className="bg-gray-200">
        <div className="flex flex-col justify-center">
          <div
            className={"flex justify-start"}
            style={{
              backgroundImage: "url('/ImgPublicacoes/publicacoes.svg')",
              height: "359px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="flex md:justify-start justify-center items-center md:w-456 w-full">
              <div className="flex flex-col md:w-456  w-full md:px-8 px-4">
                <h1 className="font-Lato md:text-3xl text-xl ml-12 font-bold ">
                  PUBLICAÇÕES
                </h1>
                <div className="border border-white my-3 ml-12 antialiased" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-end mt-4"></div>

        <div className="flex justify-between items-start p-4">
          <h1 className="font-Lato text-3xl text-black font-thin ml-8">
            Artigos
          </h1>
          {session && (
            <Link
              href={"/novo-artigo"}
              className="font-Lato text-xl text-black font-thin bg-gray-200 hover:bg-gray-300 py-2 px-3 rounded-lg border border-black outline-2 mr-8"
            >
              Publicar Novo Artigo
            </Link>
          )}
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          {artigo.map((artigo) => (
            <Artigo
              title={artigo.title}
              member={artigo.authorId}
              text={artigo.text}
            />
          ))}
        </div>

        <div className="d-flex justify-center items-center pb-6">
          <Pagination />
        </div>
      </main>
    </>
  );
}
