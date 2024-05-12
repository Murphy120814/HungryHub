const CAROUSEL_URL = (
  id,
  lat = "18.980890333210745",
  lng = "73.10281599318355"
) =>
  `http://hhapi.frontendmeta.dev/api/swiggy/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&${id}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

export default async function fetchBodyCarouselRestaurant(id, lat, lng) {
  try {
    const dataMainCarouselRes = await fetch(CAROUSEL_URL(id, lat, lng));
    const dataMainCarouselResJSON = await dataMainCarouselRes.json();
    return dataMainCarouselResJSON;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
