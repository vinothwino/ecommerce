import React from "react";
import ProductListContainer from "../../container/ProductListContainer";
import InventoryLayout from "../organisms/InventoryLayout";

export default function Inventory() {
  return (
    <ProductListContainer>
      <InventoryLayout />
    </ProductListContainer>
  );
}
