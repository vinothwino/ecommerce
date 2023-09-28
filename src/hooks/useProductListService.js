import { useEffect, useRef, useState } from "react";
import { fetchProductList } from "../services/productService";

export default function useProductListService() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      fetchProductList()
        .then((list) => {
          setProductList(list);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, []);

  return [isLoading, productList];
}
