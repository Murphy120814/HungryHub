import { BodyCarousel } from "./index";
import AppContext from "../../utils/AppContext";
import { useContext } from "react";
function Body() {
  const { addressData } = useContext(AppContext);
  return (
    <div>
      {!addressData || !addressData.coordinates ? (
        <BodyCarousel />
      ) : (
        <BodyCarousel
          lat={addressData.coordinates.lat}
          lng={addressData.coordinates.lng}
        />
      )}
    </div>
  );
}

export default Body;
