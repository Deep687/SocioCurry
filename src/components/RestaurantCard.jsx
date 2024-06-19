import React from 'react';

const RestaurantCard = (props) => {
  try {
    const { resData } = props;
    const { cuisines, name, sla, costForTwo, avgRating, cloudinaryImageId } = resData?.info;
    const truncatedCuisines = cuisines.slice(0, 2); // Limiting cuisines to 5 items

    return (
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 h-96 mx-4">
        <div className="relative h-56">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt={name}
            loading='lazy'
            className="w-full h-full object-cover object-center rounded-t-lg"
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white py-1 px-2 rounded-tr-lg">
            Rating: {avgRating}
          </div>
        </div>
        <div className="p-2"> 
          <p className="text-lg font-semibold mb-2">{name}</p>
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-5c-.553 0-1 .447-1 1s.447 1 1 1 1-.447 1-1-.447-1-1-1z"/></svg>
            <p className="text-gray-600">Cuisine: {truncatedCuisines.join(", ")}{cuisines.length > 5 && '...'}</p>
          </div>
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3c-4.417 0-8 3.582-8 8s3.583 8 8 8 8-3.582 8-8-3.583-8-8-8zm0 14c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zM10 7c-.553 0-1 .447-1 1v4c0 .553.447 1 1 1s1-.447 1-1v-4c0-.553-.447-1-1-1z"/></svg>
            <p className="text-gray-600">Avg. Time: {sla.deliveryTime} Minutes</p>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 fill-current text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-5c-.553 0-1 .447-1 1s.447 1 1 1 1-.447 1-1-.447-1-1-1z"/></svg>
            <p className="text-gray-600">Cost: {costForTwo}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering RestaurantCard:", error);
    return <div>Error rendering restaurant card. Please try again later.</div>;
  }
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
