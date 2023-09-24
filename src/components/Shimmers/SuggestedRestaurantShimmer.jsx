import TopRestaurantShimmer from "./TopRestaurantShimmer";
function SuggestedRestaurantShimmer() {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl mb-8">
          Restaurant you are looking for:
        </h1>
        <div className="w-[241px] h-[375px] shadow-lg rounded-lg mb-8 hover:scale-105 transition-all ease-in-out">
          <div className="flex flex-col">
            <div className="w-[241px] h-[225px] rounded-xl  mb-2 bg-slate-50 "></div>
            <div className="p-2">
              <div className="w-20 h-5 bg-slate-100 rounded-md"></div>
              <div className="w-12 h-5 bg-slate-100 rounded-md mt-2"></div>
              <div className="w-24 h-5 bg-slate-100 rounded-md mt-2"> </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl mb-8">More results like this:</h1>
        <div className="flex flex-wrap gap-12 items-center">
          <TopRestaurantShimmer />
        </div>
      </div>
    </>
  );
}

export default SuggestedRestaurantShimmer;
