// import React from 'react';
// import { Item, Rating } from '@prisma/client';

// interface PopularItemsListProps {
//   items: Item[];
// }

// const PopularItemsList: React.FC<PopularItemsListProps> = ({ items }) => {
//   const calculateAverageRating = (ratings: Rating[]) => {
//       if (ratings.length === 0) return 0;

//       const totalRating = ratings.reduce((acc, rating) => acc + rating.rating_value, 0);
//       return totalRating / ratings.length;
//   };

//   <section className="popular-items">
//     <h3>Popular</h3>
//     <div className="items-list grid grid-cols-2 gap-4">
//       {items.map((item) => (
//         <div key={item.item_id} className="item-card p-4 bg-gray-100 rounded-lg">
//           <h4>{item.model}</h4>
//           <p>{item.description}</p>
//           <div className="rating flex justify-between items-center">
//             <span>⭐ {item.ratings.}</span>
//             <button className="px-2 py-1 bg-blue-500 text-white rounded">Book</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// };

// export default PopularItemsList;

