import { CDN_URL } from "../utilitis/constants";
const RestaurantCard = (props) => {
    const {resList}=props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resList?.data;

    return (
      <div className="max-w-xs rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
        <img className="w-full" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' + cloudinaryImageId}
         alt="Restaurant" />
        <div className="px-3 py-2">
          <div className="font-bold text-sm mb-1">{name}</div>
          <p className="text-gray-800 text-xs mb-1">{cuisines.join(" , ")}</p>
          <p className="text-gray-800 text-xs mb-1">{avgRating}</p>
          <p className="text-gray-800 text-xs mb-1">{costForTwo/100}</p>
          <p className="text-gray-800 text-xs mb-1">{deliveryTime} Minutes</p>
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;