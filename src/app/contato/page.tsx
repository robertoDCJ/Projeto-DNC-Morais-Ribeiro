"use client";
import { list } from "postcss";
import { useState } from "react";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [howFound, setHowFound] = useState("");
  const [otherText, setOtherText] = useState("");
  const [processNumber, setProcessNumber] = useState("");

  const listOne = [
    "Linkedin",
    "Indicação",
    "Google",
    "Facebook",
    "Instagram",
    "Outros",
  ]
  const listTwo = [

    "Direito Civil Geral",
    "Direito de Família",
    "Direito Tributário",
    "Direito Empresarial",
    "Direito do Trabalho",
    "Direito do Consumidor",
    "Direito Criminal",
    "Direito Previdenciário",
    "Direito Internacional",
    "Sou parte adversa em um processo (informar número do processo)",
    "Quero fazer proposta de acordo",
    "Outro assunto não especificado anteriormente",

  ]

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
      phone,
      howFound,
      otherText,
      processNumber,
    };

    const sendEmailRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const saveToDatabaseRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try{
  
          const emailResponse = await fetch("/api/sendEmail", sendEmailRequest)
            if (emailResponse.ok){
                alert("Mensagem enviada com sucesso!");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setPhone("");
                setHowFound("");
                setOtherText("");
                setProcessNumber("");
            } else {
              alert("Erro ao enviar mensagem! Por favor, tente novamente.");
              throw new Error("Erro ao enviar mensagem: Código de estado " + emailResponse.status);
            }
          const dbResponse = await fetch("/api/saveEmailToDb", saveToDatabaseRequest)
            if (!dbResponse.ok){
            throw new Error("Erro ao salvar no db: Código de estado " + dbResponse.status)
            }


        }catch(error) {
              console.error(error);
         };
}


  const handleHowFoundChange = (value: any) => {

      setHowFound(value);

    if ( value !== listOne[5]) {
      setOtherText("");
    }
  };

  const handleSubjectChange = (value: any) => {
    setSubject(value);

    if (value !== "10") {
      setProcessNumber("");
    }

    if (value !== "12") {
      setOtherText("");
    }
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-Alegreya font-extrabold text-center text-gray-900 dark:text-white">
          Entre em contato
        </h2>

        <hr className="my-6 border-black mx-auto dark:border-black lg:my-8" />

        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Para obter informações ou entrar em contato com nossa equipe, por
          favor preencha o formulário abaixo e especifique o assunto/área
          solicitada. Responderemos o mais breve possível!
        </p>

        <hr className="my-6 border-black mx-auto dark:border-black lg:my-8" />

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="(XX) XXXXX-XXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="howFound"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Como nos conheceu
            </label>
            <select
              id="howFound"
              className="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              value={howFound}
              onChange={(e) => handleHowFoundChange(e.target.value)}
            >
              <option value="">Selecione uma opção</option>

              {listOne.map((item: string, index: number) => {
                return (
                  <option key={index} value={item}>{item}</option>
              )})}
                
            
             
            </select>

            {howFound === listOne[5] && (
              <div>
                <label
                  htmlFor="otherText"
                  className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Especifique
                </label>
                <input
                  type="text"
                  id="otherText"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  value={otherText}
                  onChange={(e) => setOtherText(e.target.value)}
                />
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Assunto/Área
            </label>
            <select
              id="subject"
              className="block w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              value={subject}
              onChange={(e) => handleSubjectChange(e.target.value)}
              required
            >
              <option value="">Selecione uma opção</option>
              {listTwo.map((item: string, index: number) => {
                return (
                  <option key={index} value={item}>{item}</option>
              )})}
            </select>

            {(subject === listTwo[9] || subject === listTwo[11]) && (
              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {subject === listTwo[9] ? "Número do Processo" : "Outro Assunto"}
                </label>
                <input
                  type="text"
                  id="additionalInfo"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  value={subject === listTwo[9] ? processNumber : otherText}
                  onChange={(e) =>
                    subject === listTwo[9]
                      ? setProcessNumber(e.target.value)
                      : setOtherText(e.target.value)
                  }
                  required
                />
              </div>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Sua mensagem
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-primary-800"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
