import { useContext, useState, useEffect, useRef } from "react";
import AppContext from "../../utils/AppContext";
import { debounce } from "lodash";
import addressSuggestionFetch from "../../utils/addressSuggestionFetch";
import locationPin from "../../assets/location-pin.svg";

import fetchingCoordinates from "../../utils/addressDataFetch";
function HeaderAddressSearch() {
  const inputRef = useRef(null);
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
  }, 300);
  useEffect(() => {
    setAddressData({ ...addressData, coordinates });
  }, [coordinates]);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestion(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);

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
      <label className="relative block ">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img className="w-5 h-5" src={locationPin} alt="location"></img>
        </span>
        <input
          ref={inputRef}
          className="w-96 p-3 outline-none shadow-md rounded-lg py-2 pl-9 pr-3"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestion(true);
            debounceHandleInputChange(e.target.value);
          }}
          placeholder="Search Your Location ..."></input>
      </label>

      <ul className="absolute top-full left-0 bg-slate-50 rounded-lg z-50">
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
