const RestaurantCardSkeleton = () => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 animate-pulse mx-4">
      <div className="relative h-56 bg-gray-300"></div>
      <div className="p-4">
        <div className="text-lg font-semibold mb-2 h-4 bg-gray-300 rounded"></div>
        <div className="mb-2 h-4 bg-gray-300 rounded"></div>
        <div className="mb-2 h-4 bg-gray-300 rounded"></div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCardSkeleton;
