import { useEffect, useState } from "react";
import fetchBodyCarousel from "../../../utils/fetchBodyCarousel";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import TopRestaurantShimmer from "../../Shimmers/TopRestaurantShimmer";
function TopRestaurant({ lat, lng }) {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    const fetchingRestaurants = async (lat, lng) => {
      try {
        const data = await fetchBodyCarousel(lat, lng);
        const { arrayOfRestaurant: restaurantData } = data;
        setListOfRestaurant(
          restaurantData[0].card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      } catch (error) {
        console.log("Fetching Error Occured At BodyCarousel", error);
        throw error;
      }
    };
    fetchingRestaurants(lat, lng);
  }, [lat, lng]);

  return (
    <>
      <h1 className="font-bold text-2xl mb-10 mt-12">
        Top Restaurants Near You
      </h1>
      <div className="flex flex-wrap gap-12 items-center">
        {listOfRestaurant.length === 0 ? (
          <TopRestaurantShimmer />
        ) : (
          listOfRestaurant.map((restaurant) => (
            <Link
              className="max-w-none"
              to={"/restaurants/" + restaurant.info?.id}
              key={restaurant.info?.id}>
              <RestaurantCard restaurantData={restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default TopRestaurant;
