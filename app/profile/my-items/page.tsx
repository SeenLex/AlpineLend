import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Link href="/profile/my-items/add-item" className="fixed bottom-20 right-6 w-14 h-14 bg-blue-600 text-white text-2xl flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
        +
      </Link>

    </div>

  )
}

export default page
