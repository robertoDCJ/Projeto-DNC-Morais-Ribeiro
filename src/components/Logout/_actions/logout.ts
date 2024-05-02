"use server";

import { redirect } from "next/navigation";
import { signOut } from "../../../../auth";

export default async function logout() {
  try {
    await signOut();
  } catch (e) {
    throw e;
  }

  redirect("/");
}
