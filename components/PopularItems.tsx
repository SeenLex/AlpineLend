import React from "react";
import Link from "next/link";

interface PopularItem {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  averageRating: number;
  totalReviews: number;
}

const PopularSlider = ({ popularItems }: { popularItems: PopularItem[] }) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4 -mx-4">
      {popularItems.map((item) => (
        <div
          key={item.id}
          className="min-w-[250px] bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition flex-shrink-0"
        >
          <img
            src={item.image || "/placeholder.jpg"} // Replace with actual image handling
            alt={item.name}
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
          <span className="text-sm text-gray-600">{item.category}</span>
          <p className="text-gray-500 text-sm mt-2">{item.description}</p>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500 text-sm mr-2">
              {Array(Math.floor(item.averageRating))
                .fill("★")
                .join(" ")}{" "}
              {item.averageRating % 1 > 0 ? "☆" : ""}
            </span>
            <span className="text-sm text-gray-500">({item.totalReviews})</span>
          </div>
          <Link
            href={`/items/${item.id}`}
            className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition block text-center"
          >
            View Item
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularSlider;
