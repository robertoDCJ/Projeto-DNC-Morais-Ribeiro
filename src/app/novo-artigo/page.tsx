import { auth } from "@/../auth";
import { redirect } from "next/navigation";

export default async function NovoArtigo() {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  return (
    <>
      <main className="bg-gray-200 pr-8 p-4">
        <form>
          <div className="m-4 pt-4 flex">
            <div className="ml-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload de imagem
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 
                    rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
          <div className="ml-5">
            <div className="ml-5 mb-4 pt-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nome"
              >
                Nome
              </label>
              <input
                className="shadow appearance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nome"
                type="text"
                placeholder="Nome"
              />
            </div>

            <div className="ml-5 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cargo"
              >
                Cargo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cargo"
                type="text"
                placeholder="Cargo"
              />
            </div>
            <div className="ml-5 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="data"
              >
                Data
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 
                        text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="data"
                type="date"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
            <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4"></div>
            <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4"></div>
          </div>

          <div
            id="tooltip-fullscreen"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium 
                        text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm 
                        opacity-0 tooltip dark:bg-gray-700"
          >
            Mostrar tela cheia
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label className="sr-only">Publicar artigo</label>
            <textarea
              id="editor"
              className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 
                        focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Escrever um artigo..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mb-7 ml-5 inline-flex items-center px-5 py-2.5 text-sm font-medium 
                text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-blue-200 
                dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            PUBLICAR ARTIGO
          </button>
        </form>
      </main>
    </>
  );
}
