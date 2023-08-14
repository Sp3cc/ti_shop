import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../api/api";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ProductContextData {
  updateList: () => void;
  products: Product[];
}

export const ProductContext = createContext({} as ProductContextData);

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    updateList();
  }, []);

  const updateList = () => {
    api
      .get("products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  };

  return (
    <ProductContext.Provider value={{ updateList, products }}>
      {children}
    </ProductContext.Provider>
  );
}
