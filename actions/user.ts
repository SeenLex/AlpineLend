'use server'
import prisma from "@/prisma/db";


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

export async function getUserById(user_id: number) {
  return await prisma.user.findUnique({
    where: {
      user_id,
    },
  });
}

export async function getPopularUsers() {
  return await prisma.user.findMany({
    take: 5,
    orderBy: {
      user_id: "desc",
    },
  });
}

export async function updateUser(user_id: number, formData: FormData) {
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

export async function deleteUser(user_id: number) {
  await prisma.user.delete({
    where: {
      user_id,
    },
  });
}