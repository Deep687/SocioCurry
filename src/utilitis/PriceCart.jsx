const PriceCart = ({ data }) => {
  const totalPrice = data.reduce((total, element) => {
    const price = element.card.info.price || element.card.info.defaultPrice;
    return total + (price || 0);
  }, 0);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
      {data.map((element) => {
        const price = element.card.info.price || element.card.info.defaultPrice;
        return (
          <div
            key={element.card.info.id}
            className="flex justify-between items-center mb-2"
          >
            <p className="text-gray-700">{element.card.info.name}</p>
            <p className="text-gray-900 font-medium">
              ₹{(price / 100).toFixed(2)}
            </p>
          </div>
        );
      })}
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex justify-between items-center text-lg font-semibold">
          <p className="text-gray-800">Total</p>
          <p className="text-green-600">₹{(totalPrice / 100).toFixed(2)}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        * Prices are inclusive of taxes. Delivery fees may apply.
      </p>
    </div>
  );
};

export default PriceCart;
