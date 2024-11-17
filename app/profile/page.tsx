import React from "react";
import Link from "next/link";
import { History, User, LogOut, Image } from "lucide-react";
import AuthPage from "@/components/AuthPage";
import Footer from "@/components/Footer";
import { logout } from "@/actions/auth";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="py-6 px-4 w-full text-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
      </div>

      {/* Profile Picture Section */}
      <div className="flex flex-col items-center py-8 w-full">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
          <Image className="text-gray-400" size={40} />
        </div>
        <div className="flex justify-center w-full px-4">
          <AuthPage />
        </div>
      </div>

      {/* Options Section */}
      <div className="px-4 py-6 w-full max-w-md space-y-6">
        <Link
          href="/profile/history"
          className="flex items-center px-4 py-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <History className="text-gray-600" size={20} />
          </div>
          <span className="flex-1 text-gray-800 font-medium">History</span>
          <span className="text-gray-400">&gt;</span>
        </Link>

        <Link
          href="/profile/my-items"
          className="flex items-center px-4 py-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <Image className="text-gray-600" size={20} />
          </div>
          <span className="flex-1 text-gray-800 font-medium">My Items</span>
          <span className="text-gray-400">&gt;</span>
        </Link>

        <Link
          href="/profile/personal-details"
          className="flex items-center px-4 py-3 bg-white rounded-lg shadow hover:bg-gray-100 transition"
        >
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <User className="text-gray-600" size={20} />
          </div>
          <span className="flex-1 text-gray-800 font-medium">
            Personal Details
          </span>
          <span className="text-gray-400">&gt;</span>
        </Link>

        <form action={logout}>
          <button
            type="submit"
            className="flex items-center px-4 py-3 bg-white rounded-lg shadow hover:bg-gray-100 transition w-full"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
              <LogOut className="text-red-500" size={20} />
            </div>
            <div className="text-red-500 font-medium">Logout</div>
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
