import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../utils/AppContext";
import fetchSuggestedDishesAndRestaurantsData from "../../utils/fetchSuggestedDishesRestaurants";
import RestaurantAndDishComboItemCard from "./RestaurantAndDishComboItemCard";
import SuggestedDishesShimmer from "../Shimmers/SuggestedDishesShimmer";
function SuggestedDishes() {
  const { suggestedDishId } = useParams();
  const encodedSuggestedDishId = encodeURIComponent(suggestedDishId);
  let [dishName, metaDataFromURL] = encodedSuggestedDishId.split("%26");
  const { addressData } = useContext(AppContext);
  const [restaurantDishData, setRestaurantDishData] = useState(null);
  useEffect(() => {
    const fetchingSuggestedRestaurantDishData = async (
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
      setRestaurantDishData(suggestedRestaurantData.data.cards);
    };

    if (!addressData || !addressData.coordinates) {
      fetchingSuggestedRestaurantDishData(dishName, metaDataFromURL);
    } else {
      fetchingSuggestedRestaurantDishData(
        dishName,
        metaDataFromURL,
        addressData.coordinates.lat,
        addressData.coordinates.lng
      );
    }
  }, []);

  if (!restaurantDishData) {
    return <SuggestedDishesShimmer />;
  }

  console.log(restaurantDishData);

  // ?destructuring the data
  let restaurantDataGroupedCards = restaurantDishData.filter(
    (arrayOfObject) => arrayOfObject?.groupedCard?.cardGroupMap?.DISH
  );
  let arrayOfDishes =
    restaurantDataGroupedCards[0].groupedCard.cardGroupMap.DISH.cards.filter(
      (onlyDishes) =>
        onlyDishes.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    );

  return (
    <>
      <h1 className="font-bold text-3xl mb-8">
        Dish which satisfy your cravings:
      </h1>
      <div className="w-full flex flex-wrap items-center gap-12">
        {arrayOfDishes.map((cardObj) => (
          <RestaurantAndDishComboItemCard
            key={cardObj.card.card.info.id}
            dishInfo={cardObj.card}
            restaurantInfo={cardObj.card.card.restaurant.info}
          />
        ))}
      </div>
    </>
  );
}

export default SuggestedDishes;
