import { auth } from "@/../auth";
import user from "@/../public/user.svg";
import Image from "next/image";
import { redirect } from "next/navigation";
import login from "./_actions/login";

export default async function Login() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex justify-center items-center h-screen bg-slate-600 p-4">
      <form
        action={login}
        className="flex flex-col gap-3 p-4 rounded-lg justify-center items-center bg-slate-800/70 w-96"
      >
        <div className="flex gap-2 justify-center items-baseline">
          <Image className="w-5" src={user} alt="user icon" />
          <h2 className="font-bold text-2xl mb-2">Área de Login</h2>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="py-1 px-2 rounded-sm text-black w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="py-1 px-2 rounded-sm text-black w-full"
          required
        />
        <button
          type="submit"
          className="bg-white/50 w-full rounded-sm py-1 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
