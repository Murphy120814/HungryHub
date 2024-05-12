const SUGGESTED_DISHES_RESTAURANT_FETCH_URL = (
  nameOfDish,
  metaData,
  lat = "18.9894007",
  lng = "73.1175162"
) =>
  `http://HHServerProxy.us-east-1.elasticbeanstalk.com/api/swiggy/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${nameOfDish}&trackingId=undefined&submitAction=SUGGESTION&metaData=${metaData}`;
async function fetchSuggestedDishesAndRestaurantsData(
  nameOfDish,
  lat,
  lng,
  metaData
) {
  console.log(
    "this is URL",
    SUGGESTED_DISHES_RESTAURANT_FETCH_URL(nameOfDish, lat, lng, metaData)
  );
  const data = await fetch(
    SUGGESTED_DISHES_RESTAURANT_FETCH_URL(nameOfDish, lat, lng, metaData)
  );

  return data.json();
}

export default fetchSuggestedDishesAndRestaurantsData;
