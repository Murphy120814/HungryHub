import altFoodImg from "../../assets/altFoodImg.png";
import vegLogo from "../../assets/veg.png";
import nonVegLogo from "../../assets/nonveg.png";
function CartItem({ cartItemInfo }) {
  return (
    <div className="w-9/12 mx-auto flex items-center justify-between p-2 shadow-md">
      <div className="9/12 px-4">
        <img
          className="h-[20px] w-[20px] mr-1 mb-4"
          src={cartItemInfo.isVeg === 1 ? vegLogo : nonVegLogo}></img>
        <h1 className="font-bold text-lg">{cartItemInfo.name}</h1>
        <h2 className="font-semibold text-lg">
          {!cartItemInfo.price
            ? "₹ 200"
            : `₹ ${Math.ceil(cartItemInfo.price / 100)}`}
        </h2>
        <h4 className="text-lg">{cartItemInfo.description}</h4>
      </div>
      <div className="3/12">
        <img
          className="max-w-none w-[150px] h-[160px] mx-auto rounded-md"
          src={
            !cartItemInfo.imageId
              ? altFoodImg
              : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                cartItemInfo.imageId
          }
          alt={cartItemInfo.name}></img>
      </div>
    </div>
  );
}

export default CartItem;
