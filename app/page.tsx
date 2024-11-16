'use client'
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-3xl font-bold mb-8">Logo</div>

      <Link href="/login">
        <button className="bg-gray-800 text-white text-lg font-medium py-2 px-6 rounded-md hover:bg-gray-700 transition">
          Let&apos;s Go
        </button>
      </Link>
    </div>
  );
}
