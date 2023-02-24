import { render, waitFor } from "@testing-library/react";
import  "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import Body from "../components/Body";
import { MOCK_RESTAURANT_DATA } from "../mocks/fetch";
import store from "../store/store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_RESTAURANT_DATA);
    },
  });
});

test("to check shimmer load first on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=>{expect(body.getByTestId("search"))})
  // console.log(body)
const shimmer = body.getByTestId("shimmer-Ui");
expect(shimmer.children.length).toBe(24); 

});
