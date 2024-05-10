const Card =()=>{


return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2">{locality}</p>
          <div className="flex items-center mb-2">
            <span className="text-lg mr-1">Average Rating:</span>
            <div className="flex items-center">
              {generateStars(avgRating)}
            </div>
          </div>
          <p className="text-lg mb-2">Cost for Two: {costForTwo / 100}</p>
          <p className="text-lg mb-2">{cuisines.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;