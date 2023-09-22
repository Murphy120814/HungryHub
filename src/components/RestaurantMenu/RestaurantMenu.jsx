import { useState, useEffect, useContext } from "react";
import AppContext from "../../utils/AppContext";
import dataFetchResMenu from "../../utils/fetchRestaurantMenu";
import { useParams } from "react-router-dom";
import {
  RestaurantMenuGroupedCards,
  RestaurantMenuInfo,
  RestaurantMenuTopCarousel,
} from "./index";
import RestaurantMenuShimmer from "../Shimmers/RestaurantMenuShimmer";
function RestaurantMenu() {
  const { addressData } = useContext(AppContext);
  const [restInfo, setRestInfo] = useState(null);
  const [topPicks, setTopPicks] = useState(null);
  const [menuDishes, setMenuDishes] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    const fetchingResMenuData = async (id, lat, lng) => {
      try {
        const dataIncoming = await dataFetchResMenu(id, lat, lng);

        const { restInfo, topCarousel, dishes } = dataIncoming;
        setRestInfo(restInfo);
        setTopPicks(topCarousel);
        setMenuDishes(dishes);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    if (!addressData || !addressData.coordinates) {
      fetchingResMenuData(resId);
    } else {
      fetchingResMenuData(
        resId,
        addressData.coordinates.lat,
        addressData.coordinates.lng
      );
    }
  }, []);
  if (restInfo === null || topPicks === null || menuDishes === null)
    return <RestaurantMenuShimmer />;

  console.log("this is restInfo", restInfo);
  console.log("this is carousel", topPicks);
  console.log("this is menuDishes", menuDishes);
  return (
    <div className="w-9/12 m-auto">
      <RestaurantMenuInfo restInfo={restInfo} />
      <RestaurantMenuTopCarousel
        topPicks={topPicks.length === 0 ? [] : topPicks}
      />
      <RestaurantMenuGroupedCards
        menuDishes={menuDishes.length === 0 ? [] : menuDishes}
      />
    </div>
  );
}

export default RestaurantMenu;
