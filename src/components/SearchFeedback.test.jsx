import { render, screen } from "@testing-library/react";
import SearchFeedback from "./SearchFeedback";

test("renders empty state message", () => {
  render(<SearchFeedback type="empty" message="No products found" />);

  expect(
    screen.getByText("No products found")
  ).toBeInTheDocument();
});