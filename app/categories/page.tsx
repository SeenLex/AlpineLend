'use client';
import { getAllCategories } from "@/actions/category";
import { useEffect, useState } from "react";

interface Category {
  category_id: number;
  category_name: string;
  image: string | null;
}

const Categories = () => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
  }, []);

  const filteredCategories =
    categories?.filter((category) =>
      category.category_name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow-sm">
        <button className="text-lg text-gray-700 font-semibold mr-4">←</button>
        <h1 className="text-lg font-bold text-gray-900">Categories</h1>
      </div>

      {/* Search Bar */}
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

      {/* Categories List */}
      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {filteredCategories.length === 0 ? (
          <p className="text-center text-gray-500">No categories found.</p>
        ) : (
          filteredCategories.map((category) => (
            <div
              key={category.category_id}
              className="flex items-center bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image Section */}
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

              {/* Text Section */}
              <div className="flex-grow px-4 py-2">
                <p className="text-sm font-medium text-gray-800">
                  {category.category_name}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Categories;
