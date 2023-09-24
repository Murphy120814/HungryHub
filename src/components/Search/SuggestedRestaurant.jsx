import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AppContext from "../../utils/AppContext";
import fetchSuggestedDishesAndRestaurantsData from "../../utils/fetchSuggestedDishesRestaurants";
import RestaurantCard from "../Body/BodyTopRestaurant/RestaurantCard";
import TopRestaurantShimmer from "../Shimmers/TopRestaurantShimmer";
import SuggestedRestaurantShimmer from "../Shimmers/SuggestedRestaurantShimmer";

function SuggestedRestaurant() {
  const { suggestedResId } = useParams();
  const encodedSuggestedResId = encodeURIComponent(suggestedResId);
  let [dishName, metaDataFromURL] = encodedSuggestedResId.split("%26");
  const { addressData } = useContext(AppContext);
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    const fetchingSuggestedRestaurantData = async (
      nameOfDish,
      lat,
      lng,
      metaData
    ) => {
      const suggestedRestaurantData =
        await fetchSuggestedDishesAndRestaurantsData(
          nameOfDish,
          lat,
          lng,
          metaData
        );
      console.log(suggestedRestaurantData);
      setRestaurantData(suggestedRestaurantData.data.cards);
    };

    if (!addressData || !addressData.coordinates) {
      fetchingSuggestedRestaurantData(dishName, metaDataFromURL);
    } else {
      fetchingSuggestedRestaurantData(
        dishName,
        metaDataFromURL,
        addressData.coordinates.lat,
        addressData.coordinates.lng
      );
    }
  }, []);

  if (!restaurantData) {
    return <SuggestedRestaurantShimmer />;
  }

  //? local Destructuring logic of the cards
  let restaurantDataGroupedCards = restaurantData.filter(
    (arrayOfObject) =>
      arrayOfObject?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
  );
  let [searchedRestaurant, similarRestaurant] =
    restaurantDataGroupedCards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
  searchedRestaurant = searchedRestaurant.card.card.info;
  similarRestaurant = similarRestaurant.card.card.restaurants;

  //! ------------------------Destructuring ends here -------------------

  return (
    <div>
      <h1 className="font-bold text-3xl mb-8">
        Restaurant you are looking for:
      </h1>
      <div className="flex flex-wrap justify-between items-center mb-4">
        <Link
          className="max-w-none"
          to={"/restaurants/" + searchedRestaurant?.id}
          key={searchedRestaurant?.id}>
          <RestaurantCard restaurantData={searchedRestaurant} />
        </Link>
      </div>
      <h1 className="font-bold text-3xl mb-8">More results like this:</h1>
      <div className="flex flex-wrap gap-12 items-center">
        {!similarRestaurant ? (
          <TopRestaurantShimmer />
        ) : (
          similarRestaurant.map((restaurant) => (
            <Link
              className="max-w-none"
              to={"/restaurants/" + restaurant.info?.id}
              key={restaurant.info?.id}>
              <RestaurantCard restaurantData={restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default SuggestedRestaurant;
