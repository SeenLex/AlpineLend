import React from "react";
import { notFound } from "next/navigation";
import { getItemsByUser } from "@/actions/item";
import { getUserById } from "@/actions/user";
import Link from 'next/link';

type UsersProps = {
    userId: string;
};

const UserProfilePage = async ({ params }: {params: Promise<UsersProps>}) => {
  const { userId } = await params;

  const user = await getUserById(parseInt(userId));
  const items = await getItemsByUser(parseInt(userId));

  if (!user) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.profile_image || "/default-avatar.png"}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
          </div>
        </div>
      </header>

      <main className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{`${user.name}'s Items`}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.length > 0 ? (
            items.map((item) => (
              <Link 
                href={`/items/${item.item_id}`}
                key={item.item_id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
              <div
                key={item.item_id}
                className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
              >
                <img
                  src={ "/default-item.png"}
                  alt={item.model}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-md font-medium mt-2">{item.model}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600">No items found for this user.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;
