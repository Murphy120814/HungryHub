import altFoodImg from "../../assets/altFoodImg.png";
function SearchSuggestionItems({ cloudinaryId, title, type }) {
  return (
    <div className="flex justify-normal items-start p-4 shadow-lg mb-4 hover:scale-105 transition-all ease-in-out cursor-pointer">
      <div>
        <img
          className="mr-8 rounded-md"
          src={
            !cloudinaryId
              ? altFoodImg
              : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/` +
                cloudinaryId
          }
          alt="Dish Photo"></img>
      </div>
      <div>
        <h1 className="font-semibold text-xl">{title}</h1>
        <h1 className="text-lg">{type}</h1>
      </div>
    </div>
  );
}

export default SearchSuggestionItems;
