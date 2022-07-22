import { render, screen } from "@testing-library/react";
import Questions from "./components/Questions/questions";
import { BrowserRouter } from "react-router-dom";
import mockFetch from "./mocks/fetchQuestions";

test("renders the questions page ", () => {
  render(
    <BrowserRouter>
      <Questions />
    </BrowserRouter>
  );
});

//testing fetching data
beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});
