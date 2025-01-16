'use server'
import prisma from "@/prisma/db";
import { createClient } from '@/utils/supabase/server'

export async function fetchUser() {
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    const dbUser = await getUserByEmail(data.user!.email!);

    if (!dbUser) {
      throw new Error('User not found in the database');
    }

    return dbUser;
  } catch (error) {
    console.error('Error in fetchUser:', error);
    return null;
  }
};

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
      phone: formData.get("phone") as string,
      location: formData.get("location") as string,
      gender: formData.get("gender") as string,
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

export async function getUserInfo(user_id: number) {
  return await prisma.user.findUnique({
    where: {
      user_id,
    },
    select: {
      name: true,
      surname: true,
      email: true,
      phone: true,
      location: true,
      gender: true
    },
  });
}