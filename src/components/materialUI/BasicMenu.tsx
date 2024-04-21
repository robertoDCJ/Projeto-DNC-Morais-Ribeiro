import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import * as React from "react";
import { MenuIcon } from "../Icon/Icon";

const LinkMenuItem = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <Link className="text-2xl font-semibold antialiased" href={href}>
      {children}
    </Link>
  );
};

export const BasicMenu = ({ className }: { className?: string }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon className={className} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <LinkMenuItem href="/">Home</LinkMenuItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkMenuItem href="/sobre-nos">Sobre Nós</LinkMenuItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkMenuItem href="/publicacoes">Publicações</LinkMenuItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkMenuItem href="/areas-de-atuacao">Áreas de Atuação</LinkMenuItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkMenuItem href="/equipe">Equipe</LinkMenuItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkMenuItem href="/contato">Contato</LinkMenuItem>
        </MenuItem>
      </Menu>
    </div>
  );
};
