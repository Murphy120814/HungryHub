import altFoodImg from "../../assets/altFoodImg.png";
import upArrow from "../../assets/up-arrow-svgrepo-com.svg";
import downArrow from "../../assets/down-arrow-svgrepo-com.svg";
import vegLogo from "../../assets/veg.png";
import nonVegLogo from "../../assets/nonveg.png";
import { useState } from "react";
function RestaurantMenuItemCards({
  title,
  itemCards,
  showItem,
  index,
  setShowIndex,
}) {
  const [showIndividualList, setShowIndividualList] = useState(false);
  const handleClick = () => {
    setShowIndex(index);
    setShowIndividualList((prevState) => !prevState);
  };
  // console.log(title);
  // console.log("this are the itemCards", itemCards);
  //itemCard.card.info
  return (
    <div className="bg-slate-50 shadow-lg p-4 my-7 rounded-lg">
      <div className="flex justify-between items-center" onClick={handleClick}>
        <span className="font-bold text-xl mb-4">
          {title + ` (${itemCards.length})`}
        </span>
        <span className="cursor-pointer">
          <img
            className="h-[20px] w-[20px] mr-1"
            src={!showIndividualList || !showItem ? downArrow : upArrow}></img>
        </span>
      </div>
      {!showIndividualList || !showItem ? null : (
        <div className="">
          {itemCards.map((itemCard) => (
            <div
              className="flex justify-between items-center py-4 divide-x-2"
              key={itemCard.card.info.id}>
              <div className="w-9/12 p-8">
                <img
                  className="h-[20px] w-[20px] mr-1 mb-4"
                  src={
                    itemCard.card.info.isVeg === 1 ? vegLogo : nonVegLogo
                  }></img>
                <h1 className="font-bold text-lg">{itemCard.card.info.name}</h1>
                <h2 className="font-semibold text-lg">
                  {!itemCard.card.info.price
                    ? "₹ 200"
                    : `₹ ${Math.ceil(itemCard.card.info.price / 100)}`}
                </h2>
                <h4 className="text-lg">{itemCard.card.info.description}</h4>
              </div>
              <div className="w-3/12 ">
                {/* <div className="absolute bottom-0 right-[45]">
                  <button className="p-2 bg-white shadow-lg text-black rounded-lg">
                    Add +
                  </button>
                </div> */}
                <img
                  className="max-w-none w-[150px] h-[160px] mx-auto rounded-md"
                  src={
                    !itemCard.card.info.imageId
                      ? altFoodImg
                      : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                        itemCard.card.info.imageId
                  }
                  alt={itemCard.card.info.name}></img>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantMenuItemCards;
