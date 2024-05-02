import { auth } from "@/../auth";
import logoutIcon from "@/../public/logoutIcon.svg";
import Image from "next/image";
import logout from "./_actions/logout";

export const Logout = async () => {
  const session = await auth();

  if (session) {
    return (
      <div className="z-50 w-full text-white bg-transparent fixed px-2 py-1 top-0 flex justify-end gap-3">
        <p>Bem vindo(a) {session?.user?.name}</p>
        <form action={logout}>
          <button>
            <Image className="w-5" src={logoutIcon} alt="Logout" />
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
};
