import React, { useState, useEffect } from 'react';
import RestaurantCardSkeleton from './RestaurantCardSkeleton';
import RestaurantCard, { PromotedCard } from './RestaurantCard';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      
      const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      if (Array.isArray(restaurants)) {
        setListOfRestaurant(restaurants);
        setFilterList(restaurants);
      } else {
        throw new Error("Unexpected data structure");
      }
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };
  const debouncedSearch = debounce((text) => {
    if (Array.isArray(listOfRestaurant)) {
      const filterSearchText = listOfRestaurant.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilterList(filterSearchText);
    }
  }, 300);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    debouncedSearch(text);
  };

  const clearFilter = () => {
    setFilterList(listOfRestaurant);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {error && <div className="text-red-600 text-center">{error}</div>}
      <div className="flex flex-col sm:flex-col items-center justify-between px-4 md:px-8">
        <input
          type="text"
          name="searchBar"
          value={searchText}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 sm:mb-0 w-full sm:w-auto"
          placeholder="Search for restaurants..."
        />
        <button
          onClick={clearFilter}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          Clear Filter
        </button>
      </div>
      <div className="container mx-auto mt-8">
        <div className="text-center mb-8">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              const filtered = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating > 4);
              setFilterList(filtered);
            }}
          >
            Show Top Rated Restaurants
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 my-2">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <RestaurantCardSkeleton key={index} />
            ))
          ) : (
            Array.isArray(filterList) && filterList.length > 0 ? (
              filterList.map((restaurant) => (
                <div className="restaurant-card-wrapper" key={restaurant.info.id}>
                  <Link to={"/menu/" + restaurant.info.id}>
                    {restaurant.info.promoted ? (
                      <PromotedCard resData={restaurant} />
                    ) : (
                      <RestaurantCard resData={restaurant} />
                    )}
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">No restaurants found.</div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;