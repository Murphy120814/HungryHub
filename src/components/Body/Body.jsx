import { BodyCarousel, TopRestaurant } from "./index";
import AppContext from "../../utils/AppContext";
import { useContext } from "react";
function Body() {
  const { addressData } = useContext(AppContext);
  return (
    <div>
      {!addressData || !addressData.coordinates ? (
        <>
          <BodyCarousel />
          <TopRestaurant />
        </>
      ) : (
        <>
          <BodyCarousel
            lat={addressData.coordinates.lat}
            lng={addressData.coordinates.lng}
          />
          <TopRestaurant
            lat={addressData.coordinates.lat}
            lng={addressData.coordinates.lng}
          />
        </>
      )}
    </div>
  );
}

export default Body;
