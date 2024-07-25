import React from "react";

const CartItems = ({ data, onRemoveItem }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex items-center justify-between mb-4"
        >
          <div className="flex-1 mr-3">
            <p className="text-lg font-semibold text-gray-800 mb-1">
              {item.card.info.name}
            </p>
            <p className="text-gray-700 text-base mb-1">
              {item.card.info.description}
            </p>
            <div className="flex items-center mb-1">
              <p className="text-lg font-semibold text-gray-800 mr-2">
                {item.card.info.ratings.aggregatedRating.rating}
              </p>
              <div className="flex text-yellow-500">
                {Array.from(
                  {
                    length: Math.floor(
                      item.card.info.ratings.aggregatedRating.rating,
                    ),
                  },
                  (_, index) => (
                    <span key={index}>&#9733;</span>
                  ),
                )}
                {item.card.info.ratings.aggregatedRating.rating % 1 !== 0 && (
                  <span>&#9734;</span>
                )}
              </div>
            </div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_300/${item.card.info.imageId}`}
              alt={item.card.info.name}
              className="w-24 h-24 object-cover border border-gray-300 rounded-lg mb-1"
            />
            <p className="text-green-600 font-semibold">
              Rs.{" "}
              {(
                item.card.info.price / 100 || item.card.info.defaultPrice / 100
              ).toFixed(2)}
            </p>
          </div>
          <button
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-1 px-3 rounded transition duration-300"
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
