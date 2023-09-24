import { useSelector } from "react-redux";
import CartItem from "./CartItem";
function Cart() {
  const cartItemArray = useSelector((store) => store.cart.items);
  return (
    <>
      <h1 className="font-bold text-3xl"></h1>
      <div className="w-full flex flex-col gap-12">
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
