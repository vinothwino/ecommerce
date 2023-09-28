import { useContext } from "react";
import { ProductListContext } from "../contexts/productListContext";
import { filterByCategory } from "../helpers/category.helpers";

export function useProductCategories() {
  const context = useContext(ProductListContext);

  if (!context?.products?.length) return [];

  return context?.products?.reduce((acc, item) => {
    if (acc.findIndex((data) => data.value === item.category) === -1) {
      acc.push({
        label: item.category,
        value: item.category,
      });
    }
    return acc;
  }, []);
}

export function useProductBrands() {
  const context = useContext(ProductListContext);
  if (!context?.products?.length) return [];
  const filters = {
    category: context.selectedCategoryFilters,
  };

  const { products } = filterByCategory({
    products: context?.products,
    filters,
  });

  return products?.reduce((acc, item) => {
    if (acc.findIndex((accItem) => accItem.value === item.brand) === -1) {
      acc.push({
        label: item.brand,
        value: item.brand,
      });
    }
    return acc;
  }, []);
}
