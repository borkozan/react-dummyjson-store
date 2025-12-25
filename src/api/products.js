export async function fetchProducts(search, limit=20, skip=0) {
  const url = "https://dummyjson.com/products";
  const params = new URLSearchParams();
  if (search) {
    console.log("search: " + search);
    params.append("q", search);
  }
  params.append("limit", limit);
  params.append("skip", skip);
  const response = await fetch(`${url}/search?${params.toString()}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}
export async function fetchProductById(id) {
  const response = await fetch("https://dummyjson.com/products/" + id);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}