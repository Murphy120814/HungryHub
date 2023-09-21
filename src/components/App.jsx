import { Header, Body, Footer } from "./index";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-9/12 mx-auto">
      <Header />
      <Outlet />
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
    ],
  },
]);

export default App;
