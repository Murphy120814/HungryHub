import rating from "../../../assets/rating.svg";
function RestaurantCard({ restaurantData }) {
  // destructuring data
  const {
    name,
    cloudinaryImageId,
    // areaName,
    // costForTwo,
    cuisines,
    avgRatingString,
    // sla: { slaString: value },
    aggregatedDiscountInfoV3,
  } = restaurantData;
  return (
    <div className="w-[241px] h-[350px] shadow-lg rounded-lg mb-8 hover:scale-105 transition-all ease-in-out">
      <div className="flex flex-col">
        <img
          className=" w-[241px] h-[225px] rounded-xl  mb-2 "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}></img>
        <div className="p-2">
          <h3 className="font-bold text-xl mb-1 text-ellipsis overflow-hidden whitespace-nowrap">
            {name}
          </h3>
          <div className="flex items-center">
            <img
              className="h-[20px] w-[20px] mr-1"
              src={rating}
              alt="rating logo"></img>
            <h5 className="font-semibold text-lg">{avgRatingString}</h5>
          </div>
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-lg">
            {cuisines.join(", ")}
          </p>
        </div>
      </div>
      {/* {aggregatedDiscountInfoV3 ? (
        <label className="align-middle">
          {aggregatedDiscountInfoV3?.header ??
            "" + aggregatedDiscountInfoV3?.subHeader ??
            "" + aggregatedDiscountInfoV3?.discountTag ??
            ""}
        </label>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default RestaurantCard;
