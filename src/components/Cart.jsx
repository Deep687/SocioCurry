import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItem } from "../utilitis/cartSlice";
import PriceCart from "../utilitis/PriceCart";
import CartItems from "../utilitis/CartItems";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.elements);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearItems());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            Your Cart
          </h2>
          {cartItems.length > 0}
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center text-lg sm:text-xl font-semibold text-gray-600 bg-white p-6 sm:p-8 rounded-lg shadow">
            Your Cart Is Empty! Add some delicious items to satisfy your
            cravings 😋
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 overflow-x-auto">
              <CartItems data={cartItems} onRemoveItem={handleRemoveItem} />
            </div>
            <div className="lg:col-span-1">
              <PriceCart data={cartItems} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
