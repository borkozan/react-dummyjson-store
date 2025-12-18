import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/products";

export default function ProductDetailPage() {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id),
    });
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
    <div>
        <h2>{data.title}</h2>
        <img src={data.thumbnail} alt={data.title} width="300" />
        <p>{data.description}</p>
        <p>Price: 
            <strong>
                {data.price}
            </strong>
        </p>
        <p>Brand: {data.brand}</p>
        <p>Category: {data.category}</p>
    </div>

    );
}