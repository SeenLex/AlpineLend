import {User, Item, Booking, Category, Notification} from '@prisma/client';

export interface Database {
    users: User[];
    items: Item[];
    bookings: Booking;
    categories: Category[];
    notifications: Notification;
}
