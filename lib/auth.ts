import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "./prisma";

export async function currentUser() {
  const id = (await cookies()).get("school_session")?.value;
  if (!id) return null;
  const u = await db.user.findUnique({ where: { id }, include: { student: true, teacher: true } });
  return u?.status === "ACTIVE" ? u : null;
}

export async function requireRole(role: "ADMIN" | "TEACHER" | "STUDENT") {
  const u = await currentUser();
  if (!u || u.role !== role) redirect("/login");
  return u;
}
