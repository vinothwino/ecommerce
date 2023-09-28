import React from "react";
import PropTypes from "prop-types";

import styles from "./productCard.module.scss";

export default function ProductCard(props) {
  const {
    imgSrc,
    imgAlt,
    title,
    desc,
    discountPrice,
    originalPrice,
    discountPercentage,
    rating,
  } = props;

  const renderProductImg = () => (
    <div className={styles["product-card__img-wrapper"]}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );

  const renderPriceWrapper = () => (
    <div className={styles["product-card__price-wrapper"]}>
      <span className={styles["product-card__discount-price"]}>
        Rs. {discountPrice}
      </span>
      <del className={styles["product-card__price"]}>Rs. {originalPrice}</del>
      <span className={styles["product-card__discount-percent"]}>
        ({discountPercentage}% OFF)
      </span>
    </div>
  );

  const renderTitle = () => (
    <h5 className={styles["product-card__title"]}>{title}</h5>
  );

  const renderDesc = () => (
    <p className={styles["product-card__desc"]}>{desc}</p>
  );

  const renderRatingAndComments = () => (
    <div className={styles["product-card__rating-and-comments"]}>
      <div>
        <span>{rating}</span>
        <i className={`${styles["product-card__star-icon"]} icon-star`}></i>
      </div>
      |<span>5.9k</span>
    </div>
  );

  const renderImageWithRatingAndComments = () => (
    <div className={styles["product-card--theme-floating-rating-with-image"]}>
      {renderProductImg()}
      {renderRatingAndComments()}
    </div>
  );

  return (
    <div className={styles["product-card"]}>
      {renderImageWithRatingAndComments()}
      {renderTitle()}
      {renderDesc()}
      {renderPriceWrapper()}
    </div>
  );
}

ProductCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  fullTitle: PropTypes.string,
  discountPrice: PropTypes.number,
  originalPrice: PropTypes.number,
  discountPercentage: PropTypes.number,
  rating: PropTypes.number,
};
