import { Link } from "react-router-dom";

function BodyCarouselElement({ imageId, altText, entityId }) {
  return (
    <Link to={"/carouselRestaurant/" + entityId.split("?")[1]}>
      <img
        className="max-w-none w-36 shadow-lg rounded-2xl mb-4 hover:scale-105 transition-all ease-in-out"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          imageId
        }
        alt={altText}
      />
    </Link>
  );
}

export default BodyCarouselElement;
