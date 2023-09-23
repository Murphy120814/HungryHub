const SEARCH_SUGGESTION_URL = (
  searchText,
  lat = "18.9894007",
  lng = "73.1175162"
) =>
  `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${searchText}&trackingId=null`;

async function fetchSearchSuggestions(searchText, lat, lng) {
  const data = await fetch(SEARCH_SUGGESTION_URL(searchText, lat, lng));
  const dataJSON = await data.json();
  return dataJSON;
}

export default fetchSearchSuggestions;
