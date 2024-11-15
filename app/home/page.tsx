import React from "react";
//import prisma from "@/prisma/db";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <p className="ml-2 font-medium">User Name</p>
        </div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg">Looking For</h2>
          <button className="text-sm text-gray-500">More →</button>
        </div>
        <div className="flex gap-2">
          {["Boots", "Crampons", "Headlamps", "Backpacks"].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
              <p className="text-sm mt-1">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mb-6">
        <h2 className="font-bold text-lg mb-2">Popular</h2>
        <div className="flex gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-1 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                <div className="ml-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2">Lorem ipsum.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-yellow-400">{"★".repeat(product.rating)}</div>
                  <p className="text-sm ml-2">({product.reviews})</p>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-2">Popular Users</h2>
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-lg mb-2"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
            <div className="ml-4">
              <h3 className="font-medium">{user.name}</h3>
              <div className="text-yellow-400 text-sm">{"★".repeat(user.rating)}</div>
              <p className="text-sm text-gray-500">
                Member Since: {new Date(user.memberSince).toLocaleDateString()}
              </p>
            </div>
            <button className="ml-auto px-3 py-1 bg-gray-200 text-sm rounded-lg">
              See Profile
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
