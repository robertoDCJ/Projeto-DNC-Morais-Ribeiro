import { auth } from "@/../auth";

export const ButtonEdit = async ({ ...props }) => {
  const session = await auth();

  return (
    <div>
      {session && (
        <button
          className="bg-black rounded-3xl  text-white font-Alegreya  py-2 px-4 transition-all duration-500 hover:-translate-y-2"
          {...props}
        >
          Editar
        </button>
      )}
    </div>
  );
};
