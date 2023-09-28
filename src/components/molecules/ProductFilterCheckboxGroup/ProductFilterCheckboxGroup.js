import React from "react";
import styles from "./productFilterCheckboxGroup.module.scss";
import CheckboxGroup from "../../atoms/CheckboxGroup";

export default function RadioFilterSearch(props) {
  const {
    options,
    label,
    isSearchable,
    selected,
    onSelect,
    renderAdditionalLabelContent,
  } = props;

  return (
    <div className={styles["radio-filter-search"]}>
      <div className={styles["radio-filter-search__wrapper"]}>
        <h3 className={styles["radio-filter-search__heading"]}>{label}</h3>
        {!!isSearchable && (
          <button className={styles["radio-filter-search__icon-btn"]}>i</button>
        )}
      </div>
      <CheckboxGroup
        className={styles["radio-filter-search__checkbox-group"]}
        list={options}
        onSelect={onSelect}
        selected={selected}
        renderAdditionalLabelContent={renderAdditionalLabelContent}
      />
    </div>
  );
}
