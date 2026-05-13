export interface Product {
   id: number;
   name: string;
   category: string;
   brand: string;
   price: number;
   stock: number;
   warehouse: string;
}

export interface CreateProduct {
   name: string;
   category: string;
   brand: string;
   price: number;
   stock: number;
   warehouse: string;
}