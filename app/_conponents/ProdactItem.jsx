import React from "react";

export const ProdactItem = ({ product }) => {
  return <div>{product.attributes.title}</div>;
};
