import { logout } from "../actions/auth";
import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import { Category } from "@prisma/client";
import { getAllCategories } from "../actions/category";

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoriesData] = await Promise.all([getAllCategories()]);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
  }, []);


  return (
    <div className="p-4">
      <header className="header flex items-center justify-between mb-6">
        <form action={logout}>
          <button
            className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
            type="submit"
          >
            logout
          </button>
        </form>
        <div className="profile-info flex items-center">
          <img
            src="/default-profile.png"
            alt="User profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <h2 className="text-xl font-bold">User Name</h2>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="search-bar px-4 py-2 rounded bg-gray-100 w-full max-w-xs"
        />
      </header>

      <CategoryList categories={categories} />
    </div>
  );
};

export default HomePage;

// export default function Home() {
//
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//
//         <form action={logout}>
//           <button className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out" type="submit">
//             logout
//           </button>
//         </form>
//         <div className="text-4xl">Hai ca avem de munca</div>
//         <AuthPage />
//       </main>
//
//     </div>
//   );
// }
