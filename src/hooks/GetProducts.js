import { useState, useEffect } from "react";
import axios from "axios";

const GetProducts = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return { data };
};

export default GetProducts;
