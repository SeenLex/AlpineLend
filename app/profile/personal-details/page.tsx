'use client'

import React, { useEffect, useState } from "react";
import { fetchUser } from "@/actions/user";
import { UserRole } from "@prisma/client";

const PersonalDetails = () => {
  const [user, setUser] = useState<{
    user_id: number;
    role: UserRole;
    name: string;
    surname: string;
    email: string;
    phone: string | null;
    location: string | null;
    gender: string | null;
    profile_image: string | null;
    member_since: Date;
    status: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>Failed to load user details.</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="py-6 px-4 w-full text-center">
        <h1 className="text-center text-xl font-semibold mb-6 lg:text-2xl">
          Personal Details
        </h1>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center sm:w-28 sm:h-28 lg:w-32 lg:h-32">
            {/* Placeholder for profile image */}
            <img
              src={user.profile_image || "/placeholder.jpg"}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 text-black"
              defaultValue={user.name}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue={user.email}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue={user.phone || "Not Provided"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue={user.location || "Not Provided"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Gender
            </label>
            <input
              type="text"
              placeholder="Gender"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue={user.gender || "Not Provided"}
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
