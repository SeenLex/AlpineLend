"use client";

import { ChevronLeft, Home, Grid, FileText, User } from 'lucide-react';
import Link from "next/link";

interface Item {
  title: string;
  details: string;
  image: string;
}

const allItems: Item[] = [
  {
    title: "Boot",
    details: "Date: from - to\nUser: xulescu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MzXoXGXklYObrZdEyH4qAU5Dczu3Rw.png",
  },
  {
    title: "Backpack",
    details: "Business Guide",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MzXoXGXklYObrZdEyH4qAU5Dczu3Rw.png",
  },
];

export default function HistoryView() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex items-center gap-4 p-4">
        <Link href="/profile">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-medium">My History</h1>
      </header>

      {/* Items List */}
      <div className="flex-1 space-y-4 p-4">
        {allItems.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-lg bg-gray-100 p-4"
          >
            <div
              className="h-16 w-16 flex-shrink-0 rounded-lg bg-gray-300"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
            />
            <div className="flex flex-1 flex-col">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {item.details}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="rounded bg-black px-4 py-1 text-sm text-white">
                View
              </button>
              <button className="rounded bg-gray-200 px-4 py-1 text-sm">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-around border-t py-4">
        <Home className="h-6 w-6 text-gray-400" />
        <Grid className="h-6 w-6 text-gray-400" />
        <FileText className="h-6 w-6 text-gray-400" />
        <User className="h-6 w-6 text-gray-400" />
      </nav>
    </div>
  );
}

