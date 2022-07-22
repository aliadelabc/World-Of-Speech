import { render } from "@testing-library/react";
import LinearWithValueLabel from "./components/Type/linearProgress";

test("renders the linear-progress used in activity", () => {
  render(<LinearWithValueLabel value={0} />);
});
