const MENU_URL = (id, lat = "18.9894007", lng = "73.1175162") =>
  `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

export default async function dataFetchResMenu(id, lat, lng) {
  try {
    const data = await fetch(MENU_URL(id, lat, lng));
    const dataJSON = await data.json();
    console.log("this is dataJson", dataJSON.data);
    const tempRestMenuCards = dataJSON.data?.cards.filter(
      (card) => card.groupedCard
    );
    const [restMenuCards] = tempRestMenuCards;
    console.log("temp", tempRestMenuCards);
    console.log(restMenuCards); //.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const topCarousel =
      restMenuCards.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
      );

    const restInfo = dataJSON.data?.cards.filter(
      (card) =>
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const dishes =
      restMenuCards.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (card) =>
          card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    return {
      restInfo: restInfo[0].card?.card?.info,
      topCarousel,
      dishes,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
