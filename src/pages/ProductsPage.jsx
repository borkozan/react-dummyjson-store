import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const skip = (page - 1) * limit;
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["products", search, page],
    queryFn: () => fetchProducts(search, limit, skip),
    keepPreviousData: true,
  });
  return(
    <div>
      <h2>Products</h2>
      <SearchBar value={search} onChange={(e) => {setSearch(e.target.value);setPage(1)}} />
      {isLoading && <p>Loading products...</p>}
      {error && <p>Error loading products</p>}
      {isFetching && <p>Updating results...</p>}
      {data && !error && (
        <ul>
          {data.products.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <p>{page}</p>
        <button onClick={() => setPage(page + 1)} disabled={data && data.products.length < limit}>Next</button>
      </div>
    </div>
  );   
}