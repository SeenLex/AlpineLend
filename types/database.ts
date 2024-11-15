import {User, Item, Booking, Category, Notification, Message} from '@prisma/client';

export interface Database {
    users: User[];
    items: Item[];
    bookings: Booking;
    categories: Category[];
    notifications: Notification;
    messages: Message;
}
