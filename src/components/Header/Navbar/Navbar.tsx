import Link from "next/link";

const ListItem = ({ children, href }: { children: string; href: string }) => {
  return (
    <li className="cursor-pointer hover:bg-slate-300/20 transition-all duration-500 rounded-xl py-2 px-4 antialiased">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav className="w-full">
      <ul
        className={`flex md:flex-row flex-col flex-wrap gap-1 items-center justify-center text-sm font-semibold ${className}`}
      >
        <ListItem href="/">HOME</ListItem>
        <ListItem href="/sobre-nos">SOBRE NÓS</ListItem>
        <ListItem href="/publicacoes">PUBLICAÇÕES</ListItem>
        <ListItem href="/areas-de-atuacao">ÁREAS DE ATUAÇÃO</ListItem>
        <ListItem href="/equipe">EQUIPE</ListItem>
        <ListItem href="/privacidade">PRIVACIDADE</ListItem>
        <ListItem href="/contato">CONTATO</ListItem>
      </ul>
    </nav>
  );
};
