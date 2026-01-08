import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "./ProductCard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99,
  thumbnail: "test.jpg",
};

test("renders product title and price", () => {
  render(
    <MemoryRouter>
        <ProductCard product={mockProduct} />
    </MemoryRouter>
    );

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("99")).toBeInTheDocument();
});
