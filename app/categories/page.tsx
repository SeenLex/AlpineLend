import { getAllCategories } from '@/actions/category';
import Categories from '@/components/Categories';
import React from 'react'

const CategoriesPage = async () => {
  const categories =  await getAllCategories();
  return <Categories categories={categories} />
}

export default CategoriesPage