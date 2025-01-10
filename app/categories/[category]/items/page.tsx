import Link from 'next/link';
import { getItemsByCategoryName } from "@/actions/item";

interface ItemsPageProps {
    category: string;
}

const ItemsPage = async ({ params }: {params: Promise<ItemsPageProps>}) => {
  const { category } = await params;

  const items = await getItemsByCategoryName(category);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Items for Category: {category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.item_id} className="bg-white p-4 rounded-lg shadow">
              <div className="w-full h-32 bg-gray-200 rounded-lg flex justify-center items-center mb-4">
                <span className="text-gray-500">Image</span></div>  
              <h2 className="text-lg font-semibold text-gray-700">{item.brand} - {item.model}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              <Link
               href={`/booking/${item.item_id}`}
               className="block mt-4 py-2 bg-indigo-600 text-white text-center rounded-md hover:bg-indigo-700"
              >
              Book now
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;
