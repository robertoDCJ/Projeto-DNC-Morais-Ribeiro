export const ErrorCard = ({
  errorMessage,
  reset,
}: {
  errorMessage: string;
  reset: () => void;
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-slate-800 flex flex-col justify-center items-center w-96 py-8">
        <h2 className="text-red-400 font-semibold text-4xl">Ops...</h2>
        <p className="text-slate-500 mb-4">Ocorreu um erro</p>
        <p className="mb-3">{errorMessage}</p>
        <div className="w-full flex justify-end px-5">
          <button onClick={reset} className="text-blue-300">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};
