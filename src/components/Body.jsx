import React, { useState, useEffect } from "react";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";
import RestaurantCard, { PromotedCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import image from "../utilitis/Images/image.png";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();

      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (Array.isArray(restaurants)) {
        setListOfRestaurant(restaurants);
        setFilterList(restaurants);
      } else {
        throw new Error("Unexpected data structure");
      }

      setLoading(false);
    } catch (error) {
      setError(
        "Error fetching data. Please check your connection or try again later."
      );
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
    setSearchText("");
  };

  return (
    <div className="body mx-1 lg:mx-10 lg:mt-10 md:mt-5 mt-3 p-5 lg:p-8 rounded-lg shadow-lg">
      {error && <div className="text-red-500 font-semibold">{error}</div>}

      <div className="hero flex flex-col-reverse md:flex-row items-center md:items-start font-serif">
        <div className="flex-1 md:mr-5 mb-5 md:mb-0">
          <div className="heroText text-4xl lg:text-6xl font-semibold mt-7 w-full">
            <h1 className="p-1 lg:p-1">Fastest</h1>
            <div className="flex">
              <h1 className="p-1 lg:p-1 text-orange-500">Delivery</h1>
              <h1 className="p-1 lg:p-1">And</h1>
            </div>
            <div className="flex">
              {" "}
              <h1 className="p-1 lg:p-1">Easy</h1>
              <h1 className="p-1 lg:p-1 text-orange-500">Pickup</h1>
            </div>
          </div>
          <div className="mt-4 lg:mt-6 flex flex-col lg:w- w-3/4 mx-3">
            <input
              type="text"
              name="searchBar"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search for restaurants..."
              className="p-2 border border-gray-300 rounded-lg lg:w-1/2 w-max"
            />
            <button
              onClick={clearFilter}
              className="mt-2 p-2 bg-green-500 font-semibold text-white rounded-lg w-full lg:w-1/2"
            >
              Clear Filter
            </button>
          </div>
        </div>
        <div className="heroImg w-full sm:w-1/2 lg:w-1/3 md:mt-0 lg:mr-10">
          <img className="rounded-full bg-white" src={image} alt="Delivery" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-4 md:m-2 md:p-2">
          <div className="flex-col lg:pt-7">
            <div className="md:p-2 md:m-2 lg:p-6 bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  className="text-green-500"
                >
                  <path d="M200-80q-83 0-141.5-58.5T0-280q0-83 58.5-141.5T200-480q83 0 141.5 58.5T400-280q0 83-58.5 141.5T200-80Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm240-40v-200L312-512q-12-11-18-25.5t-6-30.5q0-16 6.5-30.5T312-624l112-112q12-12 27.5-18t32.5-6q17 0 32.5 6t27.5 18l76 76q28 28 64 44t76 16v80q-57 0-108.5-22T560-604l-32-32-96 96 88 92v248h-80Zm180-540q-33 0-56.5-23.5T540-820q0-33 23.5-56.5T620-900q33 0 56.5 23.5T700-820q0 33-23.5 56.5T620-740ZM760-80q-83 0-141.5-58.5T560-280q0-83 58.5-141.5T760-480q83 0 141.5 58.5T960-280q0 83-58.5 141.5T760-80Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                </svg>
                <div className="ml-3 ">
                  <p className="text-lg font-semibold">Fast Delivery</p>
                  <p className="text-sm text-gray-600">
                    Promise to deliver within 30 minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="md:p-2 md:m-2 lg:p-6 bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  className="text-blue-500"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
                </svg>
                <div className="ml-3">
                  <p className="text-lg font-semibold">Pick Up</p>
                  <p className="text-sm text-gray-600">
                    Pick up delivery at your doorstep
                  </p>
                </div>
              </div>
            </div>

            <div className="md:p-2 md:m-2 lg:p-6 bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                  className="text-red-500"
                >
                  <path d="M320-200h60v-270q26-8 43-28.5t17-49.5v-152q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v152q0 29 17 49.5t43 28.5v270Zm240 0h60v-254q33-16 51.5-51t18.5-82q0-57-28.5-95T590-720q-43 0-71.5 38T490-587q0 47 18.5 82t51.5 51v254ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z" />
                </svg>
                <div className="ml-3">
                  <p className="text-lg font-semibold">Dine In</p>
                  <p className="text-sm text-gray-600">
                    Enjoy your food fresh, crispy, and hot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-screen lg:py-2">
        <div className="container mx-auto mt-1">
          <div className="text-center lg:text-start">
            <h1
              className="text-3xl md:text-5xl font-semibold mb-10"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Best <span className="text-orange-500">Restaurants</span> In{" "}
              <span className="text-orange-500">Nagpur</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 my-2">
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <RestaurantCardSkeleton key={index} />
              ))
            ) : Array.isArray(filterList) && filterList.length > 0 ? (
              filterList.map((restaurant) => (
                <div
                  className="restaurant-card-wrapper"
                  key={restaurant.info.id}
                >
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
              <div className="text-center text-gray-600">
                No restaurants found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
