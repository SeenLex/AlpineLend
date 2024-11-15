'use server'
import { PrismaClient } from "@prisma/client";

export async function saveUser(formData: FormData) {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      email: formData.get("email") as string,
    },
  });
}

export async function getUserByEmail(email: string) {
  const prisma = new PrismaClient();
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function getUserById(user_id: number) {
  const prisma = new PrismaClient();
  return await prisma.user.findUnique({
    where: {
      user_id,
    },
  });
}

export async function updateUser(user_id: number, formData: FormData) {
  const prisma = new PrismaClient();
  await prisma.user.update({
    where: {
      user_id,
    },
    data: {
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      email: formData.get("email") as string,
    },
  });
}