'use server'
import { PrismaClient, Category, User, Item} from "@prisma/client";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

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

export const fetchCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase.from('categories').select('*');
  if (error) throw error;
  return data || [];
};

export const fetchPopularItems = async(): Promise<Item[]> => {
  const { data, error } = await supabase.from('items').select('*').order('rating', {ascending: false}).limit(5);
  if (error) throw error;
  return data || [];
}

export const fetchPopularUsers = async(): Promise<User[]> => {
  const { data, error } = await supabase.from('users').select('*').order('rating', {ascending: false}).limit(5);
  if (error) throw error;
  return data || [];
}
