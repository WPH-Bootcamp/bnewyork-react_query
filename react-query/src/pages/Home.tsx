import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/product.service";
import { type Product } from "../types";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Warehouse Products</h1>

      {data?.map((product: Product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Warehouse: {product.warehouse}</p>
        </div>
      ))}
    </div>
  );
}
