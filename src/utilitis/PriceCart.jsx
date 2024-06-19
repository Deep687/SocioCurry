const PriceCart = ({ data }) => {
    // Calculate the total price, using defaultPrice if price is not available
    const totalPrice = data.reduce((total, element) => {
        const price = element.card.info.price || element.card.info.defaultPrice;
        return total + (price || 0);
    }, 0);

    return (
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Estimated Price</h3>
            </div>
            {data.map((element) => {
                const price = element.card.info.price || element.card.info.defaultPrice;
                return (
                    <div key={element.card.info.id} className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-3 flex items-center justify-between mb-4">
                        <div className="flex-1 mr-3">
                            <p className="text-lg font-semibold text-gray-800 mb-1">{element.card.info.name}</p>
                            <p className="text-green-600 font-semibold">Rs. {(price / 100).toFixed(2)}</p>
                        </div>
                    </div>
                );
            })}
            <div className="text-lg font-semibold text-gray-800 mt-4">
                Total Price: Rs. {(totalPrice / 100).toFixed(2)}
            </div>
        </div>
    );
}

export default PriceCart;