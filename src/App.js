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


// The entry point to the App component
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
// createBrowserRouter setup
export const appRouter = createBrowserRouter([
  {
     // path for root URL
    path: "/",
     // pass the App component
    element: <App />,
     // add error page
    errorElement: <ErrorPage />,
     // navigate and attached router children to the main path
    children: [
      {
        path: "/",
         // body component
        element: <Body />,
      },
      {
        path: "/about",
           // about page
        element: <About />,
      },
      {
        path: "/contact",
          // contact page
        element: <Contact />,
      },
      {
        path: "/cart",
          // cart page
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
          // restaurant details
        element: <RestaurantDetails />,
      },
      {
        path: "/mart",
        element: (
        // lazily loaded mart component with shimmer effect
          <Suspense fallback={<Shimmer />}>        
            <Mart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
