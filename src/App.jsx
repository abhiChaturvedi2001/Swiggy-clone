import React from "react";
import Body from "./Components/Body";
import { createBrowserRouter } from "react-router-dom";
import SinglePageProduct from "./Components/SinglePageProduct";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Error from "./Components/Error";
import SignUpIn from "./Components/SignUpIn";

const App = () => {
  return (
    <>
      <Navbar />
      <SignUpIn />
      <Outlet />
    </>
  );
};

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
        path: "/singlePageProduct/:id",
        element: <SinglePageProduct />,
      },
      {
        path: "/checkout",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
