import React from "react";

interface ProductsProps {
  src: string;
  name: string;
}

const Product = ({ src, name }: ProductsProps) => {
  return (
    <div className="w-full">
      <img className="w-full" src={src} alt={name} />
    </div>
  );
};

export default Product;
