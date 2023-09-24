function SuggestedDishesShimmer() {
  const divArray = new Array(20).fill("").map((_, index) => {
    return (
      <div
        key={index}
        className="w-5/12 shadow-lg rounded-lg bg-slate-100 h-[300px]"></div>
    );
  });
  return (
    <>
      <h1 className="font-bold text-3xl mb-8">Exciting Dishes for you:</h1>
      <div className="w-full flex flex-wrap items-center gap-12">
        {divArray}
      </div>
    </>
  );
}

export default SuggestedDishesShimmer;
