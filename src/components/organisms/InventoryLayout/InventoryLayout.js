import React from "react";

import Filters from "../Filters";
import TopFilters from "../TopFilters";
import Clothes from "../ProductList/ProductList";

import styles from "./inventoryLayout.module.scss";
import { useProductListRoot } from "../../../hooks/userProductList";
import RippleLoader from "../../../components/atoms/RippleLoader/RippleLoader";

export default function InventoryLayout() {
  const { isLoading } = useProductListRoot();

  if (isLoading) return <RippleLoader isLoading />;

  return (
    <div className={styles["inventory"]}>
      <Filters />
      <div className={styles["inventory__main"]}>
        <TopFilters />
        <Clothes />
      </div>
    </div>
  );
}
