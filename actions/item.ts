'use server'
import prisma from "@/prisma/db";

export async function createItem(formData: FormData) {
    return await prisma.item.create({
        data: {
            user_id: parseInt(formData.get("user_id") as string, 10),
            category_id: parseInt(formData.get("category_id") as string, 10),
            brand: formData.get("brand") as string,
            model: formData.get("model") as string,
            condition: formData.get("condition") as string,
            description: formData.get("description") as string | null,
            availability: formData.get("availability") === "true",
        },
    });
}

export async function getAllItems() {
    return await prisma.item.findMany({
        include: {
            category: true,
            user: true,
        },
    });
}

export async function getItemById(item_id: number) {
    return await prisma.item.findUnique({
        where: { item_id },
        include: {
            category: true,
            user: true,
        },
    });
}

export async function getItemsByCategoryName(category_name: string) {
    return await prisma.item.findMany({
        where: {
            category: {
                category_name: category_name,
            },
        },
        include: {
            category: true,
            user: true,
        },
    });
}

export async function getItemsByUser(user_id: number) {
    return await prisma.item.findMany({
        where: { user_id },
        include: {
            category: true,
        },
    });
}

export async function updateItem(item_id: number, formData: FormData) {
    return await prisma.item.update({
        where: { item_id },
        data: {
            user_id: parseInt(formData.get("user_id") as string, 10),
            category_id: parseInt(formData.get("category_id") as string, 10),
            brand: formData.get("brand") as string,
            model: formData.get("model") as string,
            condition: formData.get("condition") as string,
            description: formData.get("description") as string | null,
            availability: formData.get("availability") === "true",
        },
    });
}

export async function deleteItem(item_id: number) {
    return await prisma.item.delete({
        where: { item_id },
    });
}

export async function getPopularItems(limit: number = 10) {
  const itemsWithRatings = await prisma.item.findMany({
    where: {
      availability: true,
      ratings: {
        some: {},
      },
    },
    include: {
      ratings: {
        select: { rating_value: true },
      },
      category: {
          select: { category_name: true},
      }
    },
  });

  const popularItems = itemsWithRatings.map((item) => {
    const totalRatings = item.ratings.length;
    const averageRating =
      totalRatings > 0
        ? item.ratings.reduce((sum, r) => sum + r.rating_value, 0) / totalRatings
        : 0;

    return {
      id: item.item_id,                     
      name: `${item.brand} ${item.model}`,  
      category: item.category?.category_name || "", 
      description: item.description || "", 
      image: "/placeholder.jpg",           
      averageRating,                      
      totalReviews: totalRatings, 
    };
  });

  const sortedPopularItems = popularItems.sort(
    (a, b) => b.averageRating - a.averageRating
  );

  return sortedPopularItems.slice(0, limit);
}
