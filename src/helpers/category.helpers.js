import { PRICE_TYPE_VS_PRICE_RANGE } from "constants/product";
import { compose } from "../utils/compose";
import { EMPTY_OBJECT } from "../utils/default";

export const toggleFilter = (list, value) => {
  let newList = [...list];
  let itemIndex = list.findIndex((item) => item === value);

  if (itemIndex > -1) {
    newList.splice(itemIndex, 1);
    return newList;
  }
  newList.push(value);
  return newList;
};

export const filterByCategory = ({ products, filters } = EMPTY_OBJECT) => {
  let filteredProducts;
  if (!!filters?.category?.length) {
    filteredProducts = products.filter((item) =>
      filters.category.includes(item.category)
    );
  }
  return { products: filteredProducts || products, filters };
};

export const filterByBrand = ({ products, filters } = EMPTY_OBJECT) => {
  let filteredProducts;
  if (!!filters?.brands?.length) {
    filteredProducts = products.filter((item) =>
      filters.brands.includes(item.brand)
    );
  }
  return { products: filteredProducts || products, filters };
};

export const filterByPriceRange = ({ products, filters }) => {
  let filteredProducts;
  if (!!filters?.prices?.length) {
    filteredProducts = products.filter((item) =>
      filters.prices.some((rangeType) => {
        let { min, max } = PRICE_TYPE_VS_PRICE_RANGE[rangeType];
        if (!max) return item.price >= min;
        return item.price >= min && item.price < max;
      })
    );
  }
  return { products: filteredProducts || products, filters };
};

export const getFilteredProducts = ({ products, filters } = EMPTY_OBJECT) => {
  if (!!products?.length) {
    let filteredData = compose(
      filterByPriceRange,
      filterByBrand,
      filterByCategory
    )({ products, filters });
    return filteredData?.products;
  }
  return [];
};
