'use client'

import { useEffect, useState } from "react"
import { fetchUser } from "@/actions/user"
import { UserRole } from "@prisma/client"

export default function PersonalDetails() {
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

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">Failed to load user details.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Status Bar */}
      <div className="flex h-8 items-center justify-between px-4 text-sm">
        <span>9:45</span>
        <div className="flex items-center gap-1">
          <span>98%</span>
          <div className="h-3 w-6 rounded-sm border border-black"></div>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center gap-4 p-4">
        <button className="text-2xl">&larr;</button>
        <h1 className="text-xl font-medium">Personal Details</h1>
      </header>

      <form className="flex flex-1 flex-col gap-4 p-4">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="relative h-32 w-32 rounded-full border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden">
            {user.profile_image ? (
              <img
                src={user.profile_image || "/placeholder.svg"}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            )}
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept="image/*"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
              Name
            </label>
            <input 
              id="name" 
              type="text"
              value={`${user.name} ${user.surname}`.trim()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input 
              id="email" 
              type="email"
              value={user.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">
              Phone
            </label>
            <input 
              id="phone" 
              type="tel"
              value={user.phone || "Not Provided"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-1">
              Location
            </label>
            <input 
              id="location" 
              type="text"
              value={user.location || "Not Provided"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Gender
            </label>
            <input
              type="text"
              value={user.gender || "Not Provided"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  )
}

