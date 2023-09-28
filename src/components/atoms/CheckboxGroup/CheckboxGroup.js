import React from "react";
import RadioButton from "../Checkbox";

export default function CheckboxGroup(props) {
  const { list, onSelect, selected, className, ...rest } = props;

  const renderCheckboxGroups = () =>
    list.map((item) => (
      <RadioButton
        key={item.value}
        label={item.label}
        value={item.value}
        onSelect={onSelect}
        selected={selected}
        {...rest}
      />
    ));

  return <div className={className}>{renderCheckboxGroups()}</div>;
}
