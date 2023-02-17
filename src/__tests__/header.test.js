import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import store from "../store/store";
import {StaticRouter} from "react-router-dom/server"



test("to check logo should loaded before header load", () => {
  // To render logo
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Navbar />
    </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo")
  expect(logo.src).toBe("https://fbcd.co/images/products/3802636c168b62fd041fdec5b263b9a0_resize.png") 
});
test("to check cart should be 0 before header load", () => {
  // To render logo
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Navbar />
    </Provider>
    </StaticRouter>
  );
  const cartLength = header.getByTestId("cart-length")
  expect(cartLength.innerHTML).toBe("0") 
});
test("to check cart should be 0 before header load", () => {
  // To render logo
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Navbar />
    </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online_status")
  expect(onlineStatus.innerHTML).toBe("Online😄🟢") 
});
