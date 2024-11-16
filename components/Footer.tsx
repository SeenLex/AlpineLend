'use client';
import React from 'react';
import { FaHome, FaFolder, FaCog } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-4 px-6 flex justify-around">
      <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <FaHome size={24} />
        <span className="text-sm">Home</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <FaFolder size={24} />
        <span className="text-sm">Categories</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <FaCog size={24} />
        <span className="text-sm">Settings</span>
      </button>
    </footer>
  );
};

export default Footer;
