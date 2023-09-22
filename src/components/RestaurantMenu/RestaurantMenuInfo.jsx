import rating from "../../assets/rating.svg";
import clockTime from "../../assets/clock-lines.svg";
import leftArrow from "../../assets/left-arrow-svgrepo-com.svg";
import { Link } from "react-router-dom";
function RestaurantMenuInfo({ restInfo }) {
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
    city,
    sla: { deliveryTime: deliveryTime },
  } = restInfo;
  return (
    <>
      <Link to="/">
        <div className="flex items-center mb-4">
          <img
            className="h-[20px] w-[20px] mr-1"
            src={leftArrow}
            alt="left logo"></img>
          <h5 className="font-semibold text-lg hover:text-orange-600">Back</h5>
        </div>
      </Link>
      <div className="w-full flex justify-between items-center px-12 py-3 shadow-md mb-8">
        <div className="">
          <h1 className="font-bold text-2xl mb-1">
            {name},{city}
          </h1>
          <div className="flex items-center">
            <img
              className="h-[20px] w-[20px] mr-1"
              src={rating}
              alt="rating logo"></img>
            <h5 className="font-semibold text-lg">{avgRatingString}</h5>
          </div>
          <h3 className="font-semibold text-lg">{costForTwoMessage}</h3>
          <h3 className="text-xl">{cuisines.join(", ")}</h3>
        </div>
        <div>
          <img
            className="max-w-none w-[150px] h-[160px] mb-1"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }></img>
          <div className="flex items-center justify-center">
            <img
              className="h-[30px] w-[30px] mr-2"
              src={clockTime}
              alt="clock logo"></img>
            <h5 className="font-semibold text-lg">{deliveryTime} min.</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenuInfo;
