//this will fetch the latitude and longitude of the location
const ADDRESS_URL = (placeId) =>
  `http://HHServerProxy.us-east-1.elasticbeanstalk.com/api/swiggy/dapi/misc/address-recommend?place_id=${placeId}`;

const fetchingCoordinates = async (placeId) => {
  try {
    const data = await fetch(ADDRESS_URL(placeId));
    const dataJSON = await data.json();
    return dataJSON.data;
  } catch (error) {
    console.log("Fetching Error Occured in FetchingCoordinate", error);
    throw error;
  }
};

export default fetchingCoordinates;
