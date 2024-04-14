import RestaurantCard from "./RestaurantCard";
import resList from "../utilitis/RestaurantList";
const Body = () => {

    return (
      <div className="Bodycontainer bg-gray-100 p-4 md:p-8">
        <div className="searchcontainer mb-4">
          <button className="searchButton bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Top rated restaurant
          </button>
        </div>
        <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resList={restaurant} />
        ))}
       
        </div>
      </div>
    );
  };
  
  export default Body;