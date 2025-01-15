'use client'

import React, { useEffect, useState } from 'react'
import { createItem } from '../../../../actions/item'
import { getAllCategories } from "../../../../actions/category";
import { fetchUser } from '@/actions/user';

const AddItem = () => {
    const [categories, setCategories] = useState<{ category_id: number; category_name: string; image: string }[]>([]);

    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
      }
    };

    fetchCategories();
    }, []);

    const handleAddItem = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();


        const form = event.currentTarget.form;
        if (!form) {
            console.error("Form not found!");
            return;
        }

        const user = await fetchUser();

        const formData = new FormData(form);
        formData.append("user_id", user?.user_id.toString() ?? "");
        formData.append("availability", String(true));

        try {
            await createItem(formData);
          
        } catch (error) {
          console.error('Couldn\'t add item', error);
        }
    };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="py-6 px-4 w-full text-center">
        <h1 className="text-center text-xl text-gray-700 font-semibold mb-6 lg:text-2xl">Add item</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="model" className="block text-gray-700 text-sm font-medium mb-1">Product name</label>
            <input
              id="model"
              name="model"
              type="text"
              required
              placeholder="Enter product name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category_id" className="block text-gray-700 text-sm font-medium mb-1">Category</label>
            <select
              id="category_id"
              name="category_id"
              defaultValue={''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            >
              <option value="" disabled>Select a category</option>
              {categories.map((category) => (
                  <option key={category.category_id} value={category.category_id}>
                    {category.category_name}
                  </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-gray-700 text-sm font-medium mb-1">Brand</label>
            <input
              id="brand"
              name="brand"
              type="text"
              required
              placeholder="Enter brand"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="condition" className="block text-gray-700 text-sm font-medium mb-1">Condition</label>
            <select
              id="condition"
              name="condition"
              defaultValue={'Not specified'}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            >
              <option value="Not specified" disabled>Select a condition</option>
              <option value="New/Never Worn">New/Never Worn</option>
              <option value="Gentely Used">Gentely Used</option>
              <option value="Used">Used</option>
              <option value="Very Worn">Very Worn</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-1">Product Description</label>
            <input
              id="description"
              name="descrption"
              type="text"
              placeholder="Add details about the garment"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            />
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={handleAddItem}
              className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}

export default AddItem
