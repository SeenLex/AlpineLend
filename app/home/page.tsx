import React from "react";
import { logout } from "@/actions/auth";
import { getAllCategories } from "@/actions/category";
import CategoryList from "@/components/CategoryList";

const HomePage = async () => {
  const categories = await getAllCategories();
        

  return (
<div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
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
          className="hidden sm:flex flex-grow max-w-sm px-4 py-2 rounded-full border border-gray-300 bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
      <main className="pb-20 p-4 sm:p-6">
        <div className="max-w-screen-lg mx-auto space-y-12">
          <CategoryList categories={categories} />

          {/* Popular Section */}
          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Popular
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition">
                <h4 className="text-lg font-medium text-gray-800">Scarpa</h4>
                <span className="text-sm text-gray-600">Boots</span>
                <p className="text-gray-500 text-sm mt-2">
                  Comfortable and durable boots for hiking.
                </p>
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
            </div>
          </section>

          {/* Popular Users Section */}
          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
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
    </div>  );
};

export default HomePage;
