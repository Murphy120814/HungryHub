function RestaurantMenuTopCarousel({ topPicks }) {
  const topPickCarousel =
    topPicks.length === 0 ? [] : topPicks[0]?.card?.card?.carousel;
  return (
    <div className="restaurantMenuCarousel__container">
      <h1 className="font-bold text-3xl mb-4">Top Picks</h1>
      <div className="flex justify-between items-center gap-3 overflow-x-scroll scrollbar mb-12">
        {topPickCarousel.map((banner) => (
          <img
            className="max-w-none w-[279px] h-[330px] mb-4"
            key={banner.bannerId}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/" +
              banner.creativeId
            }></img>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenuTopCarousel;
