//this will fetch the suggestions

const ADDRESS_SUGGESTIONS_URL = (inputSearchText) =>
  `https://hhserverproxy.us-east-1.elasticbeanstalk.com/api/swiggy/dapi/misc/place-autocomplete?input=${inputSearchText}&types=`;

export default async function addressSuggestionFetch(inputSearch) {
  try {
    const addressSuggested = await fetch(ADDRESS_SUGGESTIONS_URL(inputSearch));
    const addressSuggestedJSON = await addressSuggested.json();
    return addressSuggestedJSON.data;
  } catch (error) {
    console.error("error in fetching data", error);
    throw error;
  }
}
