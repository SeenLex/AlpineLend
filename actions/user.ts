'use server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function saveUser(formData: FormData) {
  await prisma.user.create({
    data: {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      email: formData.get("email") as string,
    },
  });
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}
