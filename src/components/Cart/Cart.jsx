import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../slices/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItemArray = useSelector((store) => store.cart.items);
  return (
    <>
      <h1 className="font-bold text-3xl text-center">
        You are just one step away from delicious food
      </h1>
      {cartItemArray.length === 0 ? null : (
        <div className="flex justify-center items-center mt-4">
          <button
            className="p-3 bg-black text-white rounded-md my-4"
            onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      )}
      <div className="w-full flex flex-col gap-12 min-h-[800px]">
        {cartItemArray.map((cartItem) => (
          <CartItem
            cartItemInfo={cartItem.card.info}
            key={cartItem.card.info.id}
          />
        ))}
      </div>
    </>
  );
}

export default Cart;
