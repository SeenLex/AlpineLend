import React from 'react';
import { Category } from '@prisma/client';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => (
  <section className="categories">
    <h3>Looking For</h3>
    <div className="categories-list flex gap-4 overflow-x-auto">
      {categories.map((category) => (
        <div key={category.category_id} className="category-item text-center">
          <img src="../assets/boots.jpg" alt={category.category_name} className="w-16 h-16" />
          <span>{category.category_name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CategoryList;
