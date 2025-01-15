import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaHome, FaFolder } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-3 px-6 flex justify-around h-16">
      <Link href="/home" className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <FaHome size={24} />
        <span className="text-sm">Home</span>
      </Link>
      <Link href="categories" className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <FaFolder size={24} />
        <span className="text-sm">Categories</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-gray-600 hover:text-gray-800">
        <CgProfile size={24} />
        <span className="text-sm">Profile</span>
      </Link>
    </footer>
  );
};

export default Footer;
