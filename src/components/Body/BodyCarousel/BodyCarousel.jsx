import { useEffect, useState } from "react";
import fetchBodyCarousel from "../../../utils/fetchBodyCarousel";
import BodyCarouselElement from "./BodyCarouselElement";

function BodyCarousel({ lat, lng }) {
  console.log({ lat, lng });
  const [listOfCarouselElement, setListOfCarouselElement] = useState([]);
  useEffect(() => {
    const fetchingCarouselElements = async (lat, lng) => {
      try {
        const carouselData = await fetchBodyCarousel(lat, lng);
        setListOfCarouselElement(
          carouselData[0].card?.card?.gridElements?.infoWithStyle?.info
        );
      } catch (error) {
        console.log("Fetching Error Occured At BodyCarousel", error);
        throw error;
      }
    };
    fetchingCarouselElements(lat, lng);
  }, [lat, lng]);
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">What&apos;s On Your Mind?</h1>
      <div className="flex items-center gap-10 overflow-x-scroll">
        {listOfCarouselElement.length === 0 ? (
          <h1 className="font-bold text-lg">Carousel Is Loading</h1>
        ) : (
          listOfCarouselElement.map((carouselElement) => (
            <BodyCarouselElement
              imageId={carouselElement.imageId}
              key={carouselElement.id}
              altText={carouselElement.accessibility?.altText}
              // name={carouselElement.action?.text}
              entityId={carouselElement.entityId}
            />
          ))
        )}
      </div>
    </>
  );
}

export default BodyCarousel;
