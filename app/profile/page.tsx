// profile.tsx
import React from 'react';
import Link from 'next/link';
import { History, User, LogOut, Home, LayoutGrid, Image } from 'lucide-react';
import AuthPage from '@/components/AuthPage';
import Footer from '@/components/Footer';

const Profile = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-4 px-4">
        <h1 className="text-xl font-semibold text-black">Profile</h1>
      </div>

      {/* Profile Image Placeholder */}
      <div className="px-4 mb-6">
        <div className="w-20 h-20 border-2 border-gray-200 rounded-lg flex items-center justify-center">
          <Image className="text-gray-400" size={24} />
        </div>
        <AuthPage />
      </div>

      <div className="px-4">
        <Link href="/history" 
          className="flex items-center py-8 border border-red-600">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <History className="text-gray-600" size={18} />
          </div>
          <span className="text-black">History</span>
          <span className="ml-auto text-gray-400">&gt;</span>
        </Link>

        <Link href="/my-items" 
          className="flex items-center py-4 border-b border-gray-100">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <Image className="text-gray-600" size={18} />
          </div>
          <span className="text-black">My Items</span>
          <span className="ml-auto text-gray-400">&gt;</span>
        </Link>

        <Link href="/personal-details" 
          className="flex items-center py-4 border-b border-gray-100">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <User className="text-gray-600" size={18} />
          </div>
          <span className="text-black">Personal Details</span>
          <span className="ml-auto text-gray-400">&gt;</span>
        </Link>

        <button className="flex items-center py-4 w-full">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <LogOut className="text-red-500" size={18} />
          </div>
          <span className="text-red-500">Log out</span>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;