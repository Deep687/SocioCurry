
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, removeItem } from '../utilitis/cartSlice';
import PriceCart from '../utilitis/PriceCart';
import CartItems from '../utilitis/CartItems';

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
        <div className="container mx-auto p-4">
            <div className="flex flex-col justify-center items-center mb-4">
                <h2 className="text-2xl font-semibold text-center">Your Cart</h2>
                <button
                    className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={handleClearItems}
                >
                    Clear This Cart
                </button>
            </div>
            {cartItems.length === 0 ? (
                <div className="text-center text-lg font-semibold text-gray-700">
                    Your Cart Is Empty!!! Add Some Items, So You Can Eat Some Mouth-Watering Stuff 😊!
                </div>
            ) : (
                <>
                    <CartItems data={cartItems} onRemoveItem={handleRemoveItem} />
                    <div>
                        <PriceCart data={cartItems} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;