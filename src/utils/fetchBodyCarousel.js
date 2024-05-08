export const FETCH_URL = (lat = "18.9894007", lng = "73.1175162") =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

async function fetchBodyCarousel(lat, lng) {
  const data = await fetch(FETCH_URL(lat, lng));
  const dataJSON = await data.json();
  const arrayOfRestaurantAndCarousel = dataJSON.data.cards.filter(
    (card) => card.card.card?.gridElements?.infoWithStyle?.["@type"]
  );
  // ?getting topRestaurants too
  const arrayOfRestaurant = arrayOfRestaurantAndCarousel.filter(
    (card) =>
      card.card.card.gridElements?.infoWithStyle?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle" &&
      // card.card.card.gridElements?.infoWithStyle?.collectionId === "84124"
      card.card.card.gridElements?.infoWithStyle?.restaurants.length > 8
  );
  let arrayOfCarousel = arrayOfRestaurantAndCarousel.filter(
    (card) =>
      card.card.card.gridElements?.infoWithStyle?.["@type"] ===
        "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard" &&
      card.card.card.gridElements?.infoWithStyle?.info.length > 10
  );

  arrayOfCarousel =
    arrayOfCarousel[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  arrayOfCarousel = !arrayOfCarousel
    ? []
    : arrayOfCarousel.filter((onlyValidEntityIdElement) =>
        onlyValidEntityIdElement.entityId.includes("swiggy://collectionV2")
      );

  return { arrayOfCarousel, arrayOfRestaurant };
}

export default fetchBodyCarousel;
