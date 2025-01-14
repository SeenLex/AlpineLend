'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Category {
  category_id: number;
  category_name: string;
}

const SearchableCategoryList = ({ categories }: {categories: Category[] }) => {
  const [search, setSearch] = useState("");
  
  const filteredCategories =
    categories?.filter((category) =>
      category.category_name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
      <div className="relative w-full max-w-lg mx-auto">
        {/* Search Bar */}
      <div className="p-4">
        <div className="relative text-black">
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
  
        {/* Dropdown Suggestions */}
        {search && filteredCategories.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
            <div className="p-2 font-semibold text-gray-700">Categories</div>
            <ul>
              {filteredCategories.map((category) => (
                <li key={category.category_id} className="cursor-pointer">
                  <Link
                    href={`/categories/${encodeURIComponent(category.category_name)}/items`}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                  >
                    {category.category_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {/* No Results */}
        {search && filteredCategories.length === 0 && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-1 z-10">
            <div className="p-4 text-center text-sm text-gray-500">No results found.</div>
          </div>
        )}
      </div>
  );
}

export default SearchableCategoryList;
