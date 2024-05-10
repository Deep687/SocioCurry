import restaurants from "../utilitis/RestaurantList";
import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [listOfRestaurant,setListOfRestaurant] = useState(restaurants);


  useEffect(()=>{
    fetchData();
    
  },[]);
  const fetchData=async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json =await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <button
            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            
          >
            Show Top Rated Restaurants
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {listOfRestaurant.map((restaurants) => (
            <RestaurantCard key={restaurants.info.id} resData={restaurants} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
