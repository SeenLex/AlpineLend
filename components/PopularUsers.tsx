import React from "react";
import Link from "next/link";

interface PopularUser {
  id: number;
  name: string;
  image: string;
  averageRating: number;                      
  totalReviews: number; 
}

const PopularUsersSlider = ({ popularUsers }: { popularUsers: PopularUser[] }) => {
  return (
    <div className="flex overflow-x-scroll space-x-4 p-4 -mx-4">
      {popularUsers.map((user) => (
        <div
          key={user.id}
          className="min-w-[250px] bg-white shadow-sm rounded-lg p-4 hover:shadow-md transition flex-shrink-0"
        >
          <img
            src={user.image || "/placeholder.jpg"} // Replace with actual image handling
            alt={user.name}
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <h4 className="text-lg font-medium text-gray-800">{user.name}</h4>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500 text-sm mr-2">
              {Array(Math.floor(user.averageRating))
                .fill("★")
                .join(" ")}{" "}
              {user.averageRating % 1 > 0 ? "☆" : ""}
            </span>
            <span className="text-sm text-gray-500">({user.totalReviews})</span>
          </div>
          <Link
            href={`/users/${user.id}`}
            className="mt-4 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-blue-700 transition block text-center"
          >
          See profile
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularUsersSlider;
