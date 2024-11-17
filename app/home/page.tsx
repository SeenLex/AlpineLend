"use client";
import React, { useEffect, useState } from "react";
import { logout } from "@/actions/auth";
import { Category } from "@prisma/client";
import { getAllCategories } from "@/actions/category";
import Footer from "@/components/Footer";
import CategoryList from "@/components/CategoryList";

const HomePage = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src="/default-profile.png"
            alt="User profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <h2 className="text-lg font-semibold text-gray-800">User Name</h2>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="flex-grow max-w-lg px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
        />
        <form action={logout}>
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </form>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-screen-lg mx-auto space-y-12">
          <CategoryList categories={categories} />
          {/* Popular Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Popular
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition">
                <h4 className="text-lg font-medium text-gray-800">Scarpa</h4>
                <span className="text-sm text-gray-600">Boots</span>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum.</p>
                <div className="flex items-center mt-4">
                  <span className="text-yellow-500 text-sm mr-2">
                    ★ ★ ★ ★ ☆
                  </span>
                  <span className="text-sm text-gray-500">(128)</span>
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition">
                  Book
                </button>
              </div>
              {/* Add more cards if needed */}
            </div>
          </section>

          {/* Popular Users Section */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Popular Users
            </h3>
            <div className="flex items-center bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition">
              <img
                src="/default-profile.png"
                alt="User profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-800">Andrew</h4>
                <span className="text-sm text-gray-600">Rating: ★</span>
                <p className="text-sm text-gray-500">Member Since: 2022</p>
              </div>
              <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-900 transition">
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
