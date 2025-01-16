'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, Home, Grid, FileText, User } from 'lucide-react';
import { fetchUser } from '@/actions/user';
import { getItemsByIds } from '@/actions/item';
import { getBookingsByUserId, deleteBooking } from '@/actions/booking';


interface ItemWithBooking extends Item {
  booking_id: number | null;
}

interface Item {
  item_id: number;
  brand: string;
  model: string;
  category: {
    category_name: string;
  };
  condition: string;
  availability: boolean;
}

export default function HistoryView() {
  const [items, setItems] = useState<ItemWithBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItems() {
      const currentUser = await fetchUser();
      try {
        if (currentUser) {
          const fetchedBookings = await getBookingsByUserId(currentUser.user_id);
          const itemIds = fetchedBookings.map((booking) => booking.item_id);
          const fetchedItems = await getItemsByIds(itemIds);

          const items = fetchedItems.map(item => {
            const booking = fetchedBookings.find(b => b.item_id === item.item_id);
            return {
              item_id: item.item_id,
              brand: item.brand,
              model: item.model,
              category: item.category,
              condition: item.condition,
              availability: item.availability,
              booking_id: booking ? booking.booking_id : null,
            };
          });

          setItems(items);
        } else {
          setError('User not found. Please log in again.');
        }
      } catch (err) {
        setError('Failed to fetch items. Please try again later.');
        console.error('Error fetching items:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  const handleCancel = async (booking_id: number) => {
    if (!booking_id) {
      setError('Booking ID not found.');
      return;
    }
    try {
      await deleteBooking(booking_id);
      setItems((prevItems) => prevItems.filter(item => item.booking_id !== booking_id));
    } catch (err) {
      console.error('Error deleting booking:', err);
      setError('Failed to cancel the booking. Please try again later.');
    }
  };

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="flex min-h-screen items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
      <header className="flex items-center gap-4 p-4">
        <Link href="/profile">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-medium">My History</h1>
      </header>

      <div className="flex-1 space-y-4 p-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">No items found.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.item_id}
              className="flex gap-4 rounded-lg bg-gray-100 p-4"
            >
              <div
                className="h-16 w-16 flex-shrink-0 rounded-lg bg-gray-300"
                style={{
                  backgroundImage: `url(/placeholder.svg)`,
                  backgroundSize: 'cover',
                }}
              />
              <div className="flex flex-1 flex-col">
                <h3 className="font-medium">{`${item.brand} ${item.model}`}</h3>
                <p className="text-sm text-gray-600">Category: {item.category.category_name}</p>
                <p className="text-sm text-gray-600">Condition: {item.condition}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="rounded bg-black px-4 py-1 text-sm text-white">
                  View
                </button>
                {item.availability && item.booking_id ? (
                  <button
                    className="rounded bg-gray-200 px-4 py-1 text-sm"
                    onClick={() => item.booking_id && handleCancel(item.booking_id)}
                  >
                    Cancel
                  </button>
                ) : (
                  <button className="rounded bg-gray-200 px-4 py-1 text-sm" disabled>
                    Unavailable
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <nav className="flex items-center justify-around border-t py-4">
        <Home className="h-6 w-6 text-gray-400" />
        <Grid className="h-6 w-6 text-gray-400" />
        <FileText className="h-6 w-6 text-gray-400" />
        <User className="h-6 w-6 text-gray-400" />
      </nav>
    </div>
  );
}