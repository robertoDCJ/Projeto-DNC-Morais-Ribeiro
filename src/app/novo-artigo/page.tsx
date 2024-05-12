import { auth } from "@/../auth";
import { FormArtigo } from "@/components";
import db from "@/lib/db";
import { redirect } from "next/navigation";

export default async function NovoArtigo() {
  const session = await auth();
  const members = await db.member.findMany({
    select: {
      id: true,
      name: true,
      profession: true,
    },
  });

  if (!session) {
    return redirect("/");
  }

  return (
    <>
      <FormArtigo members={members} />
    </>
  );
}
