import { render, screen } from "@testing-library/react";
import Home from "./components/Home/home";
import { BrowserRouter } from "react-router-dom";

test("renders the home page start activity button", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});
