'use client'
import React, { useEffect, useState } from 'react';
import { getItemById, updateItem } from '@/actions/item';
import { useParams } from 'next/navigation';

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
}

const EditItemPage = () => {
  const { itemId } = useParams<{ itemId: string }>();

  // Set the state as an Item object or null if not loaded yet
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  // Track loading state
  const [error, setError] = useState<string | null>(null);  // Track error state

  useEffect(() => {
    const loadItem = async () => {
      if (itemId) {
        try {
          const itemData = await getItemById(parseInt(itemId, 10));

          // Check if the fetched data is valid
          if (itemData) {
            setItem(itemData);  // Set the fetched item
            setLoading(false);   // Set loading to false
          } else {
            setError('Item not found');
            setLoading(false);
          }
        } catch {
          setError('Failed to fetch item');
          setLoading(false);
        }
      } else {
        setError('No item ID provided');
        setLoading(false);
      }
    };

    loadItem();
  }, [itemId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement); // Explicitly cast e.target as HTMLFormElement
    await updateItem(Number(itemId), formData);
  };

  // Display loading, error, or the item form
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
      <header className="w-full flex items-center justify-between mb-6">
        <button className="text-lg" onClick={() => window.history.back()}>&larr;</button>
        <h1 className="text-xl font-semibold">Edit Item</h1>
        <div className="w-6"></div>
      </header>

      {item && (
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            id="brand"
            name="brand"
            type="text"
            defaultValue={item.brand}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">Model</label>
          <input
            id="model"
            name="model"
            type="text"
            defaultValue={item.model}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Condition</label>
          <input
            id="condition"
            name="condition"
            type="text"
            defaultValue={item.condition}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={item.description || ''}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
          <input
            id="availability"
            name="availability"
            type="checkbox"
            defaultChecked={item.availability}
            className="w-4 h-4 border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Save Changes
        </button>
      </form>
      )}
    </div>
  );
};

export default EditItemPage;
