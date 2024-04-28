export default function AreasAtuacao() {
  return (
  <>
  <main className="bg-gray-200">
    <div className="flex flex-col justify-center">
        <div
          className={"flex justify-start"}
          style={{
            backgroundImage: "url('/ImgAreasDeAtuacao/AreaAtuacao.svg')",
            height: "359px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex md:w-456 md:justify-start justify-center items-center md:w-456 w-full"
          >
            <div className="flex flex-col md:w-456  w-full md:px-8 px-4">
              <h1 className="font-Lato md:text-3xl text-xl ml-12 font-bold ">
                PUBLICAÇÕES
              </h1>
                <div className="border border-white my-3 ml-12 antialiased" />
            </div>
          </div>
      </div>
  </div>
  </main></>)}