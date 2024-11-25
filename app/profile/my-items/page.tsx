'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchUser } from '@/actions/user';
import { getItemsByUser } from '@/actions/item';
import { Decimal } from '@prisma/client/runtime/library';

interface Category {
  category_id: number;
  category_name: string;
  image: string;
}

interface Item {
  category: Category;
  user_id: number;
  item_id: number;
  category_id: number;
  brand: string;
  model: string;
  condition: string;
  description: string | null;
  availability: boolean;
  price_per_day: Decimal;
}

const Page = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const currentUser = await fetchUser();

      if (currentUser) {
        const fetchedItems = await getItemsByUser(currentUser.user_id);
        setItems(fetchedItems);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
      <header className="w-full flex items-center justify-between mb-6">
        <button className="text-lg">&larr;</button>
        <h1 className="text-xl font-semibold">My Items</h1>
        <div className="w-6"></div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mb-20">
        {items.length === 0 ? (
          <p className="text-center col-span-full">No items found.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.item_id}
              className="flex flex-col bg-white rounded-lg shadow-md p-4"
            >
              <div className="w-full h-32 bg-gray-200 rounded-lg flex justify-center items-center mb-4">
                <span className="text-gray-500">Image</span>
              </div>

              <div className="flex flex-col">
                <p className="font-medium text-lg">{item.brand}</p>
                <p className="text-sm text-gray-500">{item.model}</p>
                <p className="text-sm text-gray-500">{item.condition}</p>
              </div>

              <div className="mt-4 flex justify-between">
                <button className="px-4 py-2 bg-black text-white rounded-md">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md">
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <Link
        href="/profile/my-items/add-item"
        className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white text-2xl flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        +
      </Link>
    </div>
  );
};

export default Page;
