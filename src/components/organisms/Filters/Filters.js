import React from "react";
import ProductFilterCheckboxGroup from "../../molecules/ProductFilterCheckboxGroup";
import {
  useProductBrands,
  useProductCategories,
} from "../../../hooks/userProductFilters";
import { useProductListRoot } from "../../../hooks/userProductList";
import styles from "./filters.module.scss";
import {
  FILTER_TYPE,
  PRICE_RANGE_FILTER_OPTIONS,
} from "../../../constants/product";

export default function Filters() {
  const categories = useProductCategories();
  const brands = useProductBrands();
  const {
    handleFilterChange,
    selectedCategoryFilters,
    selectedBrandFilters,
    selectedPriceFilters,
  } = useProductListRoot();

  const handleSelect = (filterType, e) => {
    handleFilterChange(filterType, e.target.value);
  };

  const renderAdditionalLabelContent = () => (
    <span className={styles["radio-filter-search__checkbox-stock-count"]}>
      (71820)
    </span>
  );

  return (
    <aside className={styles["filters"]}>
      <h3 className={styles["filters__heading"]}>Filters</h3>
      <div className={styles["filters__categories"]}>
        <ProductFilterCheckboxGroup
          options={categories}
          label="Categories"
          onSelect={handleSelect.bind(this, FILTER_TYPE.CATEGORY)}
          selected={selectedCategoryFilters}
          renderAdditionalLabelContent={renderAdditionalLabelContent}
        />
        <ProductFilterCheckboxGroup
          options={brands}
          label="Brands"
          onSelect={handleSelect.bind(this, FILTER_TYPE.BRAND)}
          selected={selectedBrandFilters}
          renderAdditionalLabelContent={renderAdditionalLabelContent}
        />
        <ProductFilterCheckboxGroup
          options={PRICE_RANGE_FILTER_OPTIONS}
          label="Price"
          onSelect={handleSelect.bind(this, FILTER_TYPE.PRICE)}
          selected={selectedPriceFilters}
          renderAdditionalLabelContent={renderAdditionalLabelContent}
        />
      </div>
    </aside>
  );
}
