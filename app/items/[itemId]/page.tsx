import { getItemById } from '@/actions/item';
import Link from "next/link";

interface ItemDetailsPageProps {
    itemId: string ;
}

const ItemDetailPage = async ({ params } : {params: Promise<ItemDetailsPageProps>}) => {
    const { itemId } = await params;
    const item = await getItemById(parseInt(itemId, 10));

    if(!item) {
        return <div>Item not found</div>;
    }

    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-80 bg-gray-200 rounded-lg flex justify-center items-center mb-4 lg:mb-0">
              <span className="text-gray-500">Image</span>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-6">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                {item.brand} - {item.model}
              </h1>
              <p className="text-gray-600 mb-2">
                <strong>Description:</strong> {item.description}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Condition:</strong> {item.condition}
              </p>
              <Link
                href={`/booking/${itemId}`}
                className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ItemDetailPage;
