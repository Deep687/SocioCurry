import React from 'react';

const RestaurantCard = ({ resData }) => {
  const { cuisines, name, sla, costForTwo, avgRating, cloudinaryImageId } = resData?.info;
  const truncatedCuisines = cuisines.slice(0, 2);

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 h-96 mx-4">
      <div className="relative h-56">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          className="w-full h-full object-cover object-center rounded-t-lg"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white py-1 px-2 rounded-tr-lg">
          Rating: {avgRating}
        </div>
      </div>
      <div className="p-2">
        <p className="text-lg font-semibold mb-2">{name}</p>
        <div className="flex items-center mb-2">
          <p className="text-gray-600">Cuisine: {truncatedCuisines.join(", ")}{cuisines.length > 5 && '...'}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-gray-600">Avg. Time: {sla.deliveryTime} Minutes</p>
        </div>
        <div className="flex items-center">
          <p className="text-gray-600">Cost: {costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export const PromotedCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;