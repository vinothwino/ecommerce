import { useContext } from "react";
import { ProductListContext } from "../contexts/productListContext";

export default function useProductList() {
  const context = useContext(ProductListContext);
  return context.filteredList;
}

export function useProductListRoot() {
  const context = useContext(ProductListContext);
  return context;
}
