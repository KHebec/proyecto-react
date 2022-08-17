import { useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const response = axios(API);
  setProducts(response.data);
  return products;
};

export default useGetProducts;
