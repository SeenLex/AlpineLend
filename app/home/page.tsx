import React from "react";
import { getAllCategories } from "@/actions/category";
import { getPopularItems } from "@/actions/item";
import CategoryList from "@/components/CategoryList";
import PopularSlider from "@/components/PopularItems";
import SearchableCategoryList from "@/components/SearchableCategoryList";

const HomePage = async () => {
  const categories = await getAllCategories();
  const popularItems = await getPopularItems();
        
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800">AlpineLend</h1>
        </div>

        <div className="px-4 pb-3">
        <section>
        {/* Searchable Category List */}
        <SearchableCategoryList categories={categories} />
        </section>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-36 pb-20 p-4 sm:p-6">

        <div className="max-w-screen-lg mx-auto space-y-12">
          <CategoryList categories={categories} />

          {/* Popular Section */}
          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Popular items
            </h3>
            <PopularSlider popularItems={popularItems} />
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
