export const Navbar = () => {
  return (
    <nav className="w-full">
      <ul className="flex md:flex-row flex-col flex-wrap gap-1 items-center justify-center text-sm font-semibold">
        <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500 rounded-xl py-2 px-4 antialiased">
          HOME
        </li>
        <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500  rounded-xl py-2 px-4 antialiased">
          SOBRE NÓS
        </li>
        <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500  rounded-xl py-2 px-4 antialiased">
          PUBLICAÇÕES
        </li>
        <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500  rounded-xl py-2 px-4 antialiased">
          ÁREAS DE ATUAÇÃO
        </li>
        <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500  rounded-xl py-2 px-4 antialiased">
          EQUIPE
        </li>
        <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500  rounded-xl py-2 px-4 antialiased">
          PRIVACIDADE
        </li>
        <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500  rounded-xl py-2 px-4 antialiased">
          CONTATO
        </li>
      </ul>
    </nav>
  );
};
