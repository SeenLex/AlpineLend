'use client';
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '@/actions/category';
import { Category } from '@prisma/client';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="p-6">
        <div className="max-w-screen-lg mx-auto space-y-12">
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Looking For</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div
                  key={category.category_id}
                  className="flex flex-col items-center bg-white shadow-sm rounded-md p-4"
                >
                  <img
                    src={category.image || '/placeholder.png'}
                    alt={category.category_name}
                    className="w-16 h-16 object-cover mb-2"
                  />
                  <span className="text-sm font-medium text-gray-600">{category.category_name}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col bg-white shadow-sm rounded-md p-4">
                <h4 className="text-gray-800 font-medium">Scarpa</h4>
                <span className="text-sm text-gray-600">Boots</span>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum.</p>
                <div className="flex items-center mt-4">
                  <span className="text-yellow-500 text-sm mr-2">★ ★ ★ ★ ☆</span>
                  <span className="text-sm text-gray-500">(128)</span>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                  Book
                </button>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Users</h3>
            <div className="flex items-center bg-white shadow-sm rounded-md p-4">
              <img
                src="/default-profile.png"
                alt="User profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h4 className="text-gray-800 font-medium">Andrew</h4>
                <span className="text-sm text-gray-600">Rating: ★</span>
                <p className="text-sm text-gray-500">Member Since: 2022</p>
              </div>
              <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-900 transition">
                See Profile
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;