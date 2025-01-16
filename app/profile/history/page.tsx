"use client";

import { ChevronLeft, Home, Grid, FileText, User } from 'lucide-react';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { getItemsByUser } from '@/actions/item';

interface Item {
  item_id: number;
  brand: string;
  model: string;
  condition: string;
  description: string | null;
  availability: boolean;
  category: {
    category_name: string;
  };
}

export default function HistoryView({ userId }: { userId: number }) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const fetchedItems = await getItemsByUser(userId);
        setItems(fetchedItems);
      } catch (err) {
        setError('Failed to fetch items. Please try again later.');
        console.error('Error fetching items:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, [userId]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="flex min-h-screen items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex items-center gap-4 p-4">
        <Link href="/profile">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-medium">My History</h1>
      </header>

      {/* Items List */}
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
                  backgroundSize: "cover",
                }}
              />
              <div className="flex flex-1 flex-col">
                <h3 className="font-medium">{`${item.brand} ${item.model}`}</h3>
                <p className="text-sm text-gray-600">Category: {item.category.category_name}</p>
                <p className="text-sm text-gray-600">Condition: {item.condition}</p>
                {item.description && (
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <button className="rounded bg-black px-4 py-1 text-sm text-white">
                  View
                </button>
                <button className="rounded bg-gray-200 px-4 py-1 text-sm">
                  {item.availability ? 'Cancel' : 'Unavailable'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-around border-t py-4">
        <Home className="h-6 w-6 text-gray-400" />
        <Grid className="h-6 w-6 text-gray-400" />
        <FileText className="h-6 w-6 text-gray-400" />
        <User className="h-6 w-6 text-gray-400" />
      </nav>
    </div>
  );
}

