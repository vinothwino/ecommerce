import React, { memo, useCallback, useMemo, useState } from "react";
import { ProductListContext } from "../contexts/productListContext";
import useProductListService from "../hooks/useProductListService";
import { FILTER_TYPE } from "../constants/product";
import { getFilteredProducts, toggleFilter } from "../helpers/category.helpers";

export default memo(function ProductListContainer(props) {
  const { children } = props;

  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([]);
  const [selectedBrandFilters, setSelectedBrandFilters] = useState([]);
  const [selectedPriceFilters, setSelectedPriceFilters] = useState([]);

  const [isLoading, productData] = useProductListService() || {};
  const { products, ...restProductData } = productData;

  const handleFilterChange = useCallback((type, category) => {
    if (type === FILTER_TYPE.CATEGORY) {
      setSelectedCategoryFilters((prevState) =>
        toggleFilter(prevState, category)
      );
    }

    if (type === FILTER_TYPE.BRAND) {
      setSelectedBrandFilters((prevState) => toggleFilter(prevState, category));
    }
    if (type === FILTER_TYPE.PRICE) {
      setSelectedPriceFilters((prevState) => toggleFilter(prevState, category));
    }
  }, []);

  const filteredList = useMemo(() => {
    if (!products?.length) return [];
    const filters = {
      category: selectedCategoryFilters,
      brands: selectedBrandFilters,
      prices: selectedPriceFilters,
    };
    return getFilteredProducts({ products, filters });
  }, [
    selectedCategoryFilters,
    selectedBrandFilters,
    selectedPriceFilters,
    products,
  ]);

  const contextValue = useMemo(
    () => ({
      ...restProductData,
      isLoading,
      products,
      filteredList,
      selectedCategoryFilters,
      selectedBrandFilters,
      selectedPriceFilters,
      handleFilterChange,
    }),
    [
      isLoading,
      filteredList,
      products,
      selectedCategoryFilters,
      selectedBrandFilters,
      selectedPriceFilters,
      handleFilterChange,
      restProductData,
    ]
  );

  return (
    <ProductListContext.Provider value={contextValue}>
      {children}
    </ProductListContext.Provider>
  );
});
