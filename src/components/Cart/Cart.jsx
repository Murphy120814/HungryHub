import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../slices/cartSlice";
import emptyCardPicture from "../../assets/emtycart.png";
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
      {cartItemArray.length === 0 ? (
        <div className="w-ful flex justify-center">
          {" "}
          <img className="mt-10" src={emptyCardPicture} alt="EmptyCart"></img>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-4">
          <button
            className="p-3 bg-black text-white rounded-md my-4"
            onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      )}
      <div className="w-full flex flex-col gap-12 min-h-[200px]">
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
