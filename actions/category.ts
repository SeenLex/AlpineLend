'use server'
import prisma from "@/prisma/db";

export async function createCategory(formData: FormData) {
    await prisma.category.create({
        data: {
            category_name: formData.get("name") as string,
            image: formData.get("image") as string,
        },
    });
}

export async function getAllCategories() {
    return await prisma.category.findMany();
}

export async function getCategoryById(category_id: number) {
    return await prisma.category.findUnique({
        where: {
            category_id,
        },
    });
}

export async function updateCategory(category_id: number, formData: FormData) {
    await prisma.category.update({
        where: {
            category_id,
        },
        data: {
            category_name: formData.get("name") as string,
            image: formData.get("image") as string,
        },
    });
}

export async function deleteCategory(category_id: number) {
    await prisma.category.delete({
        where: {
            category_id,
        },
    });
}

export async function getItemsByCategory(category_id: number) {
    return await prisma.item.findMany({
        where: {
            category_id,
        },
    });
}