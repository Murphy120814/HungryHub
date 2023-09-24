function SuggestedSearchShimmer() {
  const searchSuggestion = new Array(15).fill("").map((_, index) => {
    return (
      <>
        <div className="flex justify-normal items-center p-4 shadow-lg mb-4 w-full h-[150px]">
          <div className="mr-8 rounded-md w-[100px] h-[100px] bg-slate-100"></div>
          <div>
            <h1 className="bg-slate-100 w-[100px] h-[25px] rounded-md mb-4"></h1>
            <h1 className="bg-slate-100 w-[80px] h-[25px] rounded-md"></h1>
          </div>
        </div>
      </>
    );
  });

  return searchSuggestion;
}

export default SuggestedSearchShimmer;
