import upArrow from "../../assets/up-arrow-svgrepo-com.svg";
import downArrow from "../../assets/down-arrow-svgrepo-com.svg";

import { useState } from "react";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";

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
            <RestaurantMenuItemCard
              key={itemCard.card.info.id}
                itemCard={itemCard}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantMenuItemCards;
