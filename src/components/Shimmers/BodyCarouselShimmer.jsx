function BodyCarouselShimmer() {
  const divArray = new Array(10).fill("").map((_, index) => {
    return (
      <div
        key={index}
        className="bg-slate-50 max-w-none w-36 h-36 shadow-lg rounded-2xl mb-4 hover:scale-105 transition-all ease-in-out">
        {/* <div className="shimmer-img bg-color"></div>
        <div className="shimmer-name bg-color"></div>
        <div className="shimmer-cuisines bg-color"></div>
        <div className="shimmer-distance bg-color"></div> */}
      </div>
    );
  });

  return divArray;
}

export default BodyCarouselShimmer;
