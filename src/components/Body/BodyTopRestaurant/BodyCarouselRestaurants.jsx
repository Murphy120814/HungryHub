import { useEffect, useState, useContext } from "react";
import AppContext from "../../../utils/AppContext";
import { useParams } from "react-router-dom";
import leftArrow from "../../../assets/left-arrow-svgrepo-com.svg";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import fetchBodyCarouselRestaurant from "../../../utils/fetchBodyCarouselRestaurants";
import TopRestaurantShimmer from "../../Shimmers/TopRestaurantShimmer";

function BodyCarouselRestaurants() {
  const { addressData } = useContext(AppContext);
  let { entityID } = useParams();
  entityID = entityID.split("_id").join("");
  console.log(entityID);
  const name = entityID.split("CCS_")[1];
  console.log(name);
  const [carouselResData, setCarouselResData] = useState(null);
  useEffect(() => {
    async function gettingCarouselRestData(id, lat, lng) {
      try {
        const data = await fetchBodyCarouselRestaurant(id, lat, lng);
        const destructuredDataArrayOfRes = data.data?.cards
          .filter(
            (card) =>
              card.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )
          .map((card) => card.card.card.info);
        setCarouselResData(destructuredDataArrayOfRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (!addressData || !addressData.coordinates) {
      gettingCarouselRestData(entityID);
    } else {
      gettingCarouselRestData(
        entityID,
        addressData.coordinates.lat,
        addressData.coordinates.lng
      );
    }
  }, []);
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
      <h1 className="font-bold text-3xl mb-4"> {name}</h1>
      <div className="flex flex-wrap gap-8 items-center">
        {!carouselResData ? (
          <TopRestaurantShimmer />
        ) : (
          carouselResData.map((info) => (
            <Link
              className="max-w-none"
              to={"/restaurants/" + info?.id}
              key={info?.id}>
              <RestaurantCard restaurantData={info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default BodyCarouselRestaurants;
