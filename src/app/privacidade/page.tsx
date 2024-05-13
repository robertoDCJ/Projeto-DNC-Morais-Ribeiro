export default function Privacidade() {
  return (
      <main className="bg-gray-200">
        <div className="flex flex-col justify-center">
          <div
            className={"flex justify-start items-center"}
            style={{
              backgroundImage: "url('/ImgPrivacidade/privacidade.svg')",
              height: "359px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          >
            <div className="flex justify-center w-full">
              <div className="flex flex-col justify-center md:justify-start  max-w-screen-xl  w-full p-8">
                <div className="md:w-456 w-full">
                <h1 className="font-Lato md:text-3xl text-xl ml-12 font-bold ">
                  PRIVACIDADE
                </h1>
                <div className="border border-white my-3 ml-12 antialiased" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end mt-4"></div>
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="font-Lato text-3xl text-black font-thin ml-8">
            POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS
          </h1>
        </div>
        <div className="max-w-3xl mx-auto py-8 px-4">
          <p className="text-xl text-gray-800 leading-relaxed">
              1. Na Morais & Ribeiro Advocacia e Consultoria Jurídica, 
              levamos a privacidade e a segurança dos dados de nossos clientes muito a sério. 
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              2. Coletamos informações pessoais que você nos fornece voluntariamente. 
              Isso pode incluir seu nome, endereço de e-mail, número de telefone, detalhes do caso 
              e qualquer outra informação que você escolher nos fornecer.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              3. Usamos suas informações para fornecer nossos serviços jurídicos, 
              responder às suas perguntas, enviar atualizações sobre o seu caso 
              e para fins administrativos internos.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              4. Não compartilhamos suas informações pessoais com terceiros, 
              exceto conforme necessário para fornecer nossos serviços ou conforme exigido por lei.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              5. Implementamos medidas de segurança para proteger suas informações
              pessoais contra acesso, uso ou divulgação não autorizados.
          </p>
          <p className="mt-4 text-xl text-gray-800 leading-relaxed">
              6. Você tem o direito de acessar, corrigir ou excluir suas informações pessoais 
              a qualquer momento. Para exercer esses direitos, entre em contato conosco.
          </p>
          <div className="mt-8">
            <p className="text-xl text-gray-800 leading-relaxed">
              7. Podemos atualizar esta Política de Privacidade de tempos em tempos. 
              Recomendamos que você revise esta política regularmente para se manter 
              informado sobre como estamos protegendo suas informações.
            </p>
          </div>
        </div>
      </main>

  );
}
