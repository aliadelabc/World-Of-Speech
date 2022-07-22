import { render } from "@testing-library/react";
import CheckBox from "./components/Type/checkBox";

test("renders the checkbox used in activity", () => {
  render(
    <CheckBox
      label={""}
      value={""}
      handleChange={() => {
        return;
      }}
      checked={false}
      isCorrect={false}
    />
  );
});
