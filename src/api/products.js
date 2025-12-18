export async function fetchProducts(search="") {
  let url;
  if (search) {
    console.log("search: " + search);
    url = "https://dummyjson.com/products/search?q=" + search;
  } else {
    url = "https://dummyjson.com/products?limit=20";
    console.log("url: " + url);
  }
  const response = await fetch(url);
  
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