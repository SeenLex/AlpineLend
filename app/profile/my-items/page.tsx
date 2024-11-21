import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
      <header className="w-full flex items-center justify-between mb-6">
        <button className="text-lg">&larr;</button>
        <h1 className="text-xl font-semibold">My Items</h1>
        <div className="w-6"></div> {/* Placeholder for alignment */}
      </header>

      <div className="w-full max-w-md">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4"
            >
              {/* Image placeholder */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex justify-center items-center">
                  <span className="text-gray-500">Image</span>
                </div>

                {/* Item Details */}
                <div>
                  <p className="font-medium">Brand</p>
                  <p className="text-sm text-gray-500">Model</p>
                  <p className="text-sm text-gray-500">Condition</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col space-y-2">
                <button className="px-4 py-1 bg-black text-white rounded-md">
                  Edit
                </button>
                <button className="px-4 py-1 bg-red-100 text-red-600 rounded-md">
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
      
      <Link href="/profile/my-items/add-item" className="fixed bottom-20 right-6 w-14 h-14 bg-blue-600 text-white text-2xl flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
        +
      </Link>

    </div>
  )
}

export default page
