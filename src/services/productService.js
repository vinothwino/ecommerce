export const fetchProductList = () =>
  new Promise(async (res, rej) => {
    try {
      const headers = {
        contentType: "applications/json",
        method: "GET",
      };
      const response = await fetch("https://dummyjson.com/products", {
        headers,
      }).then((data) => data.json());
      res(response);
    } catch (err) {
      rej(err);
    }
  });
