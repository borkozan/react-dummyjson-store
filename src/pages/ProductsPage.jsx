import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";

export default function ProductsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return(
    <div>
    <h1>Products</h1>
    <ul>
      {data.products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
    </div>
  );   
}