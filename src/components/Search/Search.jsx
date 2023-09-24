import searchIcon from "../../assets/search-svgrepo-com.svg";
import { useState, useContext } from "react";
import AppContext from "../../utils/AppContext";
import fetchSearchSuggestions from "../../utils/fetchSearchSuggestions";
import SearchSuggestionItems from "./SearchSuggestionItems";
import SuggestedSearchShimmer from "../Shimmers/SuggestedSearchShimmer";

import { Link } from "react-router-dom";

function Search() {
  const [searchSuggestionData, setSearchSuggestionData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const { addressData } = useContext(AppContext);

  const handleSearchSuggestion = async (searchText, lat, lng) => {
    const data = await fetchSearchSuggestions(searchText, lat, lng);
    setSearchSuggestionData(data.data.suggestions);
  };

  return (
    <div className="w-9/12 m-auto">
      <label className="relative block mb-12">
        <span className="absolute top-4 bottom-0 left-0 flex items-center pl-2">
          <img className="w-5 h-5" src={searchIcon} alt="location"></img>
        </span>
        <input
          type="text"
          className="w-full mt-4 p-3 outline-none shadow-md rounded-lg py-2 pl-9 pr-3 border-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (!addressData || !addressData.coordinates) {
              handleSearchSuggestion(searchText);
            } else {
              handleSearchSuggestion(
                searchText,
                addressData.coordinates.lat,
                addressData.coordinates.lng
              );
            }
          }}
          placeholder="Search restaurants or dishes..."></input>
      </label>
      <div className="w-full">
        {!searchSuggestionData ? (
          <SuggestedSearchShimmer />
        ) : searchText === "" ? (
          <SuggestedSearchShimmer />
        ) : (
          searchSuggestionData
            .filter(
              (dataObj) =>
                dataObj.type === "DISH" || dataObj.type === "RESTAURANT"
            )
            .map((dataObj, index) => (
              <Link
                key={index}
                to={
                  dataObj.type === "RESTAURANT"
                    ? "/suggestedRestaurant/" +
                      encodeURIComponent(dataObj.text) +
                      "&" +
                      encodeURIComponent(dataObj.metadata)
                    : "/suggestedDishes/" +
                      encodeURIComponent(dataObj.text) +
                      "&" +
                      encodeURIComponent(dataObj.metadata)
                }>
                <SearchSuggestionItems
                  title={dataObj.text}
                  type={dataObj.tagToDisplay}
                  cloudinaryId={dataObj.cloudinaryId}
                />
              </Link>
            ))
        )}
      </div>
    </div>
  );
}

export default Search;
