import { useState } from "react";
import vegLogo from "../../assets/veg.png";
import nonVegLogo from "../../assets/nonveg.png";
import altFoodImg from "../../assets/altFoodImg.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/cartSlice";

function RestaurantMenuItemCard({ itemCard }) {
  itemCard;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const [isAdded, setIsAdded] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  return (
    <div
      className="flex justify-between items-center py-4 divide-x-2"
      key={itemCard.card.info.id}>
      <div className="w-9/12 p-8">
        <img
          className="h-[20px] w-[20px] mr-1 mb-4"
          src={itemCard.card.info.isVeg === 1 ? vegLogo : nonVegLogo}></img>
        <h1 className="font-bold text-lg">{itemCard.card.info.name}</h1>
        <h2 className="font-semibold text-lg">
          {!itemCard.card.info.price
            ? "₹ 200"
            : `₹ ${Math.ceil(itemCard.card.info.price / 100)}`}
        </h2>
        <div>
          {!showFullText ? (
            <h4 className="text-lg line-clamp-1">
              {itemCard.card.info.description}
            </h4>
          ) : (
            <h4 className="text-lg">{itemCard.card.info.description}</h4>
          )}
          <h1
            className="font-bold text-sm hover:text-orange-600 cursor-pointer"
            onClick={() => setShowFullText((prevState) => !prevState)}>
            {!showFullText ? "Read More..." : "Read Less"}
          </h1>
        </div>
      </div>
      <div className="w-3/12 relative">
        <div className="absolute bottom-0">
          {!isAdded ? (
            <button
              className="p-2 bg-slate-900 shadow-lg text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black "
              onClick={() => {
                setIsAdded(true);
                return handleAddItem(itemCard);
              }}>
              Add
            </button>
          ) : (
            <button
              className="p-2 bg-slate-900 shadow-lg text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black "
              onClick={() => {
                setIsAdded(false);
                return handleAddItem(itemCard);
              }}>
              Remove
            </button>
          )}
        </div>
        <img
          className="max-w-none w-full h-[185px] mx-auto rounded-md p-4"
          src={
            !itemCard.card.info.imageId
              ? altFoodImg
              : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                itemCard.card.info.imageId
          }
          alt={itemCard.card.info.name}></img>
      </div>
    </div>
  );
}

export default RestaurantMenuItemCard;
