import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../product";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );

    if (response && response.data) setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
