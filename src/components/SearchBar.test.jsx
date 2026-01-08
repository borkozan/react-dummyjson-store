import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders search input", () => {
  render(<SearchBar value="" onChange={() => {}} />);

  expect(
    screen.getByPlaceholderText(/search/i)
  ).toBeInTheDocument();
});
