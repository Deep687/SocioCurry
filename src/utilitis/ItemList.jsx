import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-6">
      {data.map((elements) => (
        <div
          key={elements.card.info.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 lg:p-6 flex flex-col lg:flex-row items-center lg:items-start justify-between transition-transform transform hover:shadow-xl"
        >
          <div className="flex-1 lg:mr-4 mb-4 lg:mb-0">
            <p className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
              {elements.card.info.name}
            </p>
            <p className="text-base lg:text-lg font-medium text-gray-700 mb-1">
              {elements.card.info.ratings.aggregatedRating.rating}
            </p>
            <p className="text-green-600 font-semibold text-base lg:text-lg mb-2">
              Rs.{" "}
              {elements.card.info.defaultPrice / 100 ||
                elements.card.info.price / 100}
            </p>
            <p className="text-gray-600 text-sm lg:text-base mb-3">
              {elements.card.info.description}
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_400/${elements.card.info.imageId}`}
              alt={elements.card.info.name}
              loading="lazy"
              className="w-48 h-48 lg:w-56 lg:h-56 object-cover border border-gray-300 rounded-lg mb-4 lg:mb-4"
            />
            <button
              className="bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-white px-4 py-2 text-sm lg:text-lg rounded-md transition-transform transform active:scale-95 active:shadow-inner"
              onClick={() => handleItem(elements)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
