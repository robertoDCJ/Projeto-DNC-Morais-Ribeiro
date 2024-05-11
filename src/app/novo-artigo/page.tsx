import { auth } from "@/../auth";
import { redirect } from "next/navigation";
import {FormArtigo} from "./_formArtigo/formArtigo";
import db from "@/lib/db";


export default async function NovoArtigo() {
  const session = await auth();
  const members = await db.member.findMany({
    select: {
      id: true,
      name: true,
      profession: true,
    }
  });
  
  // console.log(members.find( member => member.name))

  if (!session) {
    return redirect("/");
  }

  return (
    <>
    <FormArtigo
      members={members}
    />
    </>
  );
}
