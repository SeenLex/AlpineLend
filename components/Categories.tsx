'use client';

import { useState } from "react";
import Link from 'next/link';

interface Category {
  category_id: number;
  category_name: string;
  image: string | null;
}

const Categories = ({categories}: {categories: Category[]}) => {
  const [search, setSearch] = useState("");

  const filteredCategories =
    categories?.filter((category) =>
      category.category_name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex items-center p-4 bg-white shadow-sm">
        <Link href="home" className="text-lg text-gray-700 font-semibold mr-4">←</Link>
        <h1 className="text-lg font-bold text-gray-900">Categories</h1>
      </div>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <span className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>
      </div>

      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {filteredCategories.length === 0 ? (
          <p className="text-center text-gray-500">No categories found.</p>
        ) : (
          filteredCategories.map((category) => (
            <Link href={`/categories/${encodeURIComponent(category.category_name)}/items`}
              key={category.category_id}
              className="flex items-center bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-300 flex items-center justify-center">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.category_name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-500 text-lg">🖼</span>
                )}
              </div>

              <div className="flex-grow px-4 py-2">
                <p className="text-sm font-medium text-gray-800">
                  {category.category_name}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
