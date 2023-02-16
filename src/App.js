import React, { lazy, Suspense } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetails from "./components/RestaurantDetails";
import Shimmer from "./components/Shimmer";
const Mart = lazy(() => import("./components/Mart"));
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/mart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Mart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
