import React from "react";
import styles from "./productList.module.scss";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import useProductList from "../../../hooks/userProductList";
import { getDiscountPrice } from "helpers/product.helpers";

export default function ProductList() {
  const list = useProductList();

  const renderProductList = () =>
    list.map((item) => (
      <div key={item.title} className={styles["clothes__item"]}>
        <ProductCard
          key={item.id}
          title={item.title}
          desc={item.description}
          originalPrice={Math.ceil(item.price)}
          discountPrice={Math.ceil(
            getDiscountPrice(item.price, item.discountPercentage)
          )}
          discountPercentage={item.discountPercentage}
          imgAlt={item.title}
          imgSrc={item.thumbnail}
          rating={item.rating.toFixed(1)}
        />
      </div>
    ));

  return (
    <div className={styles["clothes"]}>
      <div className={styles["clothes__list"]}>{renderProductList()}</div>
    </div>
  );
}
