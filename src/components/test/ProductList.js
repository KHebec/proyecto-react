import React from "react";
import useGetProducts from "../../hooks/useGetProducts";

const API = "../../db/db.json";

export const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <div>
      {products.map((e) => (
        <>
          <img src={e.image} alt={e.brand} key={e.id} />
          <p>{e.brand}</p>
        </>
      ))}
    </div>
  );
};
