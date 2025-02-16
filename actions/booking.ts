'use server'
import prisma from "@/prisma/db";

export async function createBooking(formData: FormData) {
    return await prisma.booking.create({
        data: {
            item_id: parseInt(formData.get("item_id") as string, 10),
            borrower_id: parseInt(formData.get("borrower_id") as string, 10),
            lender_id: parseInt(formData.get("lender_id") as string, 10),
            start_date: new Date(formData.get("start_date") as string),
            end_date: new Date(formData.get("end_date") as string),
        },
    });
}

export async function getAllBookings() {
    return await prisma.booking.findMany({
        include: {
            borrower: true,
            lender: true,
            item: true,
        },
    });
}

export async function getBookingById(booking_id: number) {
    return await prisma.booking.findUnique({
        where: { booking_id },
        include: {
            borrower: true,
            lender: true,
            item: true,
        },
    });
}

export async function getBookingsByItemId(item_id: number) {
    return await prisma.booking.findMany({
        where: { item_id },
    });
}

export async function getBookingByLenderId(lender_id: number) {
    return await prisma.booking.findMany({
        where: { lender_id: lender_id },
        include: {
            borrower: true,
            lender: true,
            item: true,
        },
    });
}

export async function getBookingsByUserId(user_id: number) {
    return await prisma.booking.findMany({
        where: { borrower_id: user_id },
        include: {
            borrower: true,
            lender: true,
            item: true,
        },
    });
}

export async function deleteBooking(booking_id: number) {
    return await prisma.booking.delete({
        where: { booking_id },
    });
}
