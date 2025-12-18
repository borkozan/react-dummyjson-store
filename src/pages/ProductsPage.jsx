import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { useState} from "react";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", search],
    queryFn: () => fetchProducts(search),
  });

  return(
    <div>
      <h2>Products</h2>
      <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} style={{marginBottom: "10px", padding: "5px", width: "300px" }}/>
      {isLoading && <p>Loading products...</p>}
      {error && <p>Error loading products</p>}
      {!isLoading && !error && (
        <ul>
          {data.products.map((p) => (
            <li key={p.id}>
              <Link to={`/products/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );   
}