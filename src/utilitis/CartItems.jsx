import React from "react";

const CartItems = ({ data, onRemoveItem }) => {
  return (
    <div className="flex flex-col items-center">
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex items-center justify-between mb-3 w-full max-w-md"
        >
          <div className="flex-1 mr-3">
            <p className="text-lg font-semibold text-gray-800 mb-1">
              {item.card.info.name}
            </p>
            <div className="flex items-center text-base mb-1">
              <p className="font-semibold text-gray-800 mr-1">
                {item.card.info.ratings.aggregatedRating.rating}
              </p>
              <div className="flex text-yellow-500">
                {/* ... existing rating code ... */}
              </div>
            </div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_150/${item.card.info.imageId}`}
              alt={item.card.info.name}
              className="w-20 h-20 object-cover border border-gray-300 rounded-lg mb-2"
            />
            <p className="text-green-600 font-semibold text-base">
              Rs.{" "}
              {(
                item.card.info.price / 100 || item.card.info.defaultPrice / 100
              ).toFixed(2)}
            </p>
          </div>
          <button
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded text-base transition duration-300"
            onClick={() => onRemoveItem(item.card.info.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
