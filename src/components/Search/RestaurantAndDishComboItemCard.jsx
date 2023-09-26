import { Link } from "react-router-dom";
import rating from "../../assets/rating.svg";
import rightArrow from "../../assets/right-arrow-svgrepo-com.svg";
// import vegLogo from "../../assets/veg.png";
// import nonVegLogo from "../../assets/nonveg.png";
// import altFoodImg from "../../assets/altFoodImg.png";
import RestaurantMenuItemCard from "../RestaurantMenu/RestaurantMenuItemCard";
function RestaurantAndDishComboItemCard({ restaurantInfo, dishInfo }) {
  return (
    <div className="w-5/12 shadow-lg rounded-lg">
      <Link to={"/restaurants/" + restaurantInfo.id} className="max-w-none">
        <div className="flex justify-between items-center p-2">
          <h5 className="font-semibold text-lg">Go to Restaurant</h5>
          <img
            className="h-[20px] w-[20px] mr-1"
            src={rightArrow}
            alt="arrow logo"></img>
        </div>
        <div className="w-full flex items-center">
          <div className="w-9/12 p-2">
            <h1 className="font-bold text-2xl">{restaurantInfo.name}</h1>
            <div className="flex items-center">
              <img
                className="h-[20px] w-[20px] mr-1"
                src={rating}
                alt="rating logo"></img>
              <h5 className="font-semibold text-lg">
                {restaurantInfo.avgRating}
              </h5>
            </div>
            <p className="text-ellipsis overflow-hidden whitespace-nowrap text-lg">
              {restaurantInfo.cuisines.join(", ")}
            </p>
          </div>
          <div className="w-3/12">
            <img
              className=" w-[125px] h-[100px] rounded-xl  mb-2 mx-auto"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                restaurantInfo.cloudinaryImageId
              }
              alt={restaurantInfo.name}></img>
          </div>
        </div>
      </Link>
      <RestaurantMenuItemCard itemCard={dishInfo} />
      {/* <div className="w-full flex divide-y-2 mt-4">
        <div className="w-9/12 p-2">
          <img
            className="h-[20px] w-[20px] mr-1 mb-1"
            src={dishInfo.isVeg === 1 ? vegLogo : nonVegLogo}></img>
          <h1 className="font-bold text-lg">{dishInfo.name}</h1>
          <h2 className="font-semibold text-lg">
            {!dishInfo.price ? "₹ 200" : `₹ ${Math.ceil(dishInfo.price / 100)}`}
          </h2>
        </div>
        <div className="w-3/12">
          <img
            className="max-w-none w-[100px] h-[100px] mx-auto rounded-md my-2"
            src={
              !dishInfo.imageId
                ? altFoodImg
                : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                  dishInfo.imageId
            }
            alt={dishInfo.name}></img>
        </div>
      </div> */}
    </div>
  );
}

export default RestaurantAndDishComboItemCard;
