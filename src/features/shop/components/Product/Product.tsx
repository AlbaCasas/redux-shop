import React from "react";
import Text from "src/components/Text/Text";

interface ProductsProps {
  src: string;
  name: string;
  price: string;
}

const Product = ({ src, name, price }: ProductsProps) => {
  return (
    <div className="w-full">
      <img className="w-full" src={src} alt={name} />
      <h1>{name}</h1>
      <Text>{price}</Text>
    </div>
  );
};

export default Product;
