'use client';
import React from 'react';
import { logout } from '@/actions/auth';

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="/default-profile.png"
          alt="User profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <h2 className="text-lg font-bold text-gray-800">User Name</h2>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 bg-gray-100 text-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
      />
      <form action={logout}>
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </form>
    </header>
  );
};

export default Navbar;
