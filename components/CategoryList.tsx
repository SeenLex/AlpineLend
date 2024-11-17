import React from "react";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => (
  <section>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Looking For</h3>
      <Link
        href="categories"
        className="text-sm font-medium text-gray-800 hover:text-black"
      >
        More
      </Link>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.category_id}
          href={`/categories/${encodeURIComponent(
            category.category_name
          )}/items`}
          passHref
        >
          <div className="flex flex-col items-center bg-white shadow-sm rounded-md p-4 cursor-pointer">
            <img
              src={category.image || "/placeholder.png"}
              alt={category.category_name}
              className="w-16 h-16 object-cover rounded-full mb-2"
            />
            <span className="text-sm font-medium text-gray-600">
              {category.category_name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryList;
