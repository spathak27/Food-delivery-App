import { clearCart } from "../../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="p-2 m-5 bg-gray-500 text-white rounded-lg cursor-pointer "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="md:italic ">
            Cart is empty!😿 Please add items to your cart
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
