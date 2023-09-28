export const FILTER_TYPE = {
  CATEGORY: "CATEGORY",
  BRAND: "BRAND",
  PRICE: "PRICE",
};

export const PRICE_TYPE = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
};

export const PRICE_TYPE_VS_PRICE_RANGE = {
  [PRICE_TYPE.LOW]: {
    min: 0,
    max: 100,
  },
  [PRICE_TYPE.MEDIUM]: {
    min: 100,
    max: 500,
  },
  [PRICE_TYPE.HIGH]: {
    min: 500,
  },
};

export const PRICE_RANGE_FILTER_OPTIONS = [
  {
    label: "Rs 0 to Rs 100",
    value: PRICE_TYPE.LOW,
  },
  {
    label: "Rs 100 to Rs 500",
    value: PRICE_TYPE.MEDIUM,
  },
  {
    label: "Above 500",
    value: PRICE_TYPE.HIGH,
  },
];
