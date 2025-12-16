export async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=20");
  
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
  
    return response.json();
  }