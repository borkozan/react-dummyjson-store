import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SearchFeedback from "../components/SearchFeedback";
import SkeletonProductCard from "../components/SkeletonProductCard";
import "../styles/global.css"

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 12;
  const skip = (page - 1) * limit;
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["products", search, page],
    queryFn: () => fetchProducts(search, limit, skip),
    keepPreviousData: true,
  });
  return(
    <div className="page">
      <h2>Products</h2>
      <SearchBar value={search} onChange={(e) => {setSearch(e.target.value);setPage(1)}} />
      {isLoading && (
        <ul className="product-grid">
          {Array.from({ length: limit }).map((_, index) => (
            <li key={index} className="product-grid-item">
              <SkeletonProductCard />
            </li>
          ))}
        </ul>
      )}
      {error && <SearchFeedback type="error" message="Error loading products."/>}
      {isFetching && !isLoading && (<SearchFeedback type="updating" message="Updating products..."/>)}
      {data && data.products.length === 0 && (<SearchFeedback type="empty" message="No products found. Try a different search."/>)}
      {data && !error && data.products.length > 0 && (
        <ul className="product-grid">
          {data.products.map((p) => (
            <li key={p.id} className="product-grid-item">
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