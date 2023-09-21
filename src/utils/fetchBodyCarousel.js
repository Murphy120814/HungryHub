export const FETCH_URL = (lat = "18.9894007", lng = "73.1175162") =>
  `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

async function fetchBodyCarousel(lat, lng) {
  const data = await fetch(FETCH_URL(lat, lng));
  const dataJSON = await data.json();
  const arrayOfRestaurantAndCarousel = dataJSON.data.cards.filter(
    (card) => card.card.card?.gridElements?.infoWithStyle?.["@type"]
  );
  const arrayOfCarousel = arrayOfRestaurantAndCarousel.filter(
    (card) =>
      card.card.card.gridElements?.infoWithStyle?.["@type"] ===
        "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard" &&
      card.card.card.gridElements?.infoWithStyle?.info.length > 10
  );
  return arrayOfCarousel;
}

export default fetchBodyCarousel;
