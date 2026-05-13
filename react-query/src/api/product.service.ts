import api from "./api";

import {
   type Product, type CreateProduct
} from "../types";

export async function getProducts(): Promise<Product[]> {
   const response = await api.get("/products");
   return response.data;
}

export async function getProductById(
   id: number
): Promise<Product> {
   const response = await api.get(
      `/products/${id}`
   );

   return response.data;
}

export async function addProduct(
   payload: CreateProduct
): Promise<Product> {
   const response = await api.post(
      "/products",
      payload
   );

   return response.data;
}