import React from "react";
import { getAllCategories } from "@/actions/category";
import { getPopularItems } from "@/actions/item";
import CategoryList from "@/components/CategoryList";

import PopularSlider from "@/components/PopularItems";
import PopularUsersSlider from "@/components/PopularUsers";
import SearchableCategoryList from "@/components/SearchableCategoryList";
import { getPopularUsers } from "@/actions/user";

const HomePage = async () => {
  const categories = await getAllCategories();
  const popularItems = await getPopularItems();
  const popularUsers = await getPopularUsers();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800">AlpineLend</h1>
        </div>

        <div className="px-4 pb-3">
          <section>
            <SearchableCategoryList categories={categories} />
          </section>
        </div>
      </header>

      <main className="pt-36 pb-20 p-4 sm:p-6">
        <div className="max-w-screen-lg mx-auto space-y-12">
          <CategoryList categories={categories} />

          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Popular items
            </h3>
            <PopularSlider popularItems={popularItems} />
          </section>

          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              Popular users
            </h3>
            <PopularUsersSlider popularUsers={popularUsers} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
