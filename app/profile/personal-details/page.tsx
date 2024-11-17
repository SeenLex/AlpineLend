import React from "react";

const PersonalDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="py-6 px-4 w-full text-center">
        <h1 className="text-center text-xl font-semibold mb-6 lg:text-2xl">Personal Details</h1>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center sm:w-28 sm:h-28 lg:w-32 lg:h-32">
            {/* Placeholder for profile image */}
            <span className="text-gray-500 text-sm lg:text-base">Image</span>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 text-black"
              defaultValue="Jessi Gill"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="jessi77@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="1234509876"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              placeholder="Location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="Maharashtra, India"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1">Gender</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300"
              defaultValue="Male"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
