import React from "react";
import PropTypes from "prop-types";

import styles from "./ripple.module.scss";

export default function RippleLoader(props) {
  const { isLoading } = props;
  if (!isLoading) return null;

  return (
    <div class={`${styles["lds-ripple"]} ${styles["lds-ripple__fixed"]}`}>
      <div></div>
      <div></div>
    </div>
  );
}

RippleLoader.propTypes = {
  isLoading: PropTypes.bool,
};

RippleLoader.defaultProps = {
  isLoading: false,
};
