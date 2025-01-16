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

export async function getPopularUsers(limit: number = 10) {
  const usersWithRating = await prisma.user.findMany({
    where: {
      ratings: {
        some: {},
      },
    },
    include: {
      ratings: {
        select: { rating_value: true },
      },
    },
  });

  const popularUsers = usersWithRating.map((user) => {
    const totalRatings = user.ratings.length;
    const averageRating =
      totalRatings > 0
        ? user.ratings.reduce((sum, r) => sum + r.rating_value, 0) / totalRatings
        : 0;

    return {
      id: user.user_id,
      name: `${user.name} ${user.surname}`,  
      image: "/placeholder.jpg",           
      averageRating,                      
      totalReviews: totalRatings, 
    };
  });

  const sortedPopularUsers = popularUsers.sort(
    (a, b) => b.averageRating - a.averageRating
  );

  return sortedPopularUsers.slice(0, limit);
}
