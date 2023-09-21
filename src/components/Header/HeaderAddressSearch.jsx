import { useContext, useState, useEffect } from "react";
import AppContext from "../../utils/AppContext";
import { debounce } from "lodash";
import addressSuggestionFetch from "../../utils/addressSuggestionFetch";

import fetchingCoordinates from "../../utils/addressDataFetch";
function HeaderAddressSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [showSuggestion, setShowSuggestion] = useState(true);
  const [coordinates, setCoordinates] = useState();
  const addressContextData = useContext(AppContext);
  const { addressData, setAddressData } = addressContextData;

  const debounceHandleInputChange = debounce((value) => {
    const fetchAddressSuggestion = async () => {
      const addressSuggestions = await addressSuggestionFetch(value);
      setSuggestions(addressSuggestions);
    };
    fetchAddressSuggestion();
  }, 10);
  useEffect(() => {
    setAddressData({ ...addressData, coordinates });
  }, [coordinates]);

  const handleLocationClick = (placeId) => {
    const fetchAddressCoordinates = async () => {
      const addressObject = await fetchingCoordinates(placeId);
      console.log(addressObject);
      setCoordinates(addressObject[0].geometry.location);
    };
    fetchAddressCoordinates();
  };

  return (
    <div className="flex flex-col relative">
      <input
        className="w-96 p-3 outline-none shadow-md rounded-lg"
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setShowSuggestion(true);
          debounceHandleInputChange(e.target.value);
        }}
        placeholder="Search Your Location ..."></input>
      <ul className="absolute top-full left-0 bg-slate-50 rounded-lg">
        {!suggestions
          ? null
          : showSuggestion &&
            suggestions.map((location) => (
              <li
                className="p-3 w-96 cursor-pointer"
                key={location.place_id}
                onClick={() => {
                  setSearchQuery(location.description);
                  setShowSuggestion(false);
                  handleLocationClick(location.place_id);
                }}>
                {location.description}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default HeaderAddressSearch;
