import React from "react";
import PropTypes from "prop-types";

import styles from "./checkbox.module.scss";
import { EMPTY_ARRAY, EMPTY_FUNCTION } from "../../../utils/default";

export default function RadioButton(props) {
  const { value, onSelect, label, selected, renderAdditionalLabelContent } =
    props;
  const isChecked = Array.isArray(selected) && selected.includes(value);

  return (
    <div className={styles["checkbox"]}>
      <label htmlFor={value} className={styles["checkbox__input-wrapper"]}>
        <input
          className={styles["checkbox__input"]}
          type="checkbox"
          id={value}
          name={value}
          value={value}
          onChange={onSelect}
          checked={isChecked}
        />
        <span className={styles["checkbox__check-mark"]}></span>
      </label>
      <label htmlFor={value} className={styles["checkbox__label"]}>
        {label.toLowerCase()} {renderAdditionalLabelContent(value)}
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.array.isRequired,
  renderAdditionalLabelContent: PropTypes.func,
};

RadioButton.defaultProps = {
  renderAdditionalLabelContent: EMPTY_FUNCTION,
};
