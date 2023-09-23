import {
  Header,
  Body,
  Footer,
  Error,
  Search,
  LogIn,
  Cart,
  RestaurantMenu,
  BodyCarouselRestaurants,
  SuggestedRestaurant,
  SuggestedDishes,
} from "./index";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { useState } from "react";
import AppContext from "../utils/AppContext";

function App() {
  const [addressData, setAddressData] = useState();

  return (
    <div className="w-9/12 mx-auto">
      <AppContext.Provider value={{ addressData, setAddressData }}>
        <Header />
        <Outlet />
      </AppContext.Provider>
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/carouselRestaurant/:entityID",
        element: <BodyCarouselRestaurants />,
      },
      {
        path: "/suggestedRestaurant/:suggestedResId",
        element: <SuggestedRestaurant />,
      },
      {
        path: "/suggestedDishes/:suggestedDishId",
        element: <SuggestedDishes />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
