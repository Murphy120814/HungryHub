function TopRestaurantShimmer() {
  const divArray = new Array(20).fill("").map((_, index) => {
    return (
      <div
        key={index}
        className="w-[241px] h-[375px] shadow-lg rounded-lg mb-8 hover:scale-105 transition-all ease-in-out">
        <div className="flex flex-col">
          <div className="w-[241px] h-[225px] rounded-xl  mb-2 bg-slate-50 "></div>
          <div className="p-2">
            <div className="w-20 h-5 bg-slate-100 rounded-md"></div>
            <div className="w-12 h-5 bg-slate-100 rounded-md mt-2"></div>
            <div className="w-24 h-5 bg-slate-100 rounded-md mt-2"> </div>
          </div>
        </div>
      </div>
    );
  });
  return divArray;
}

export default TopRestaurantShimmer;
