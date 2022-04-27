import React from "react";
import Heading from "src/components/Heading";
import Text from "src/components/Text/Text";

interface ProductsProps {
  src: string;
  name: string;
  price: string;
}

const Product = ({ src, name, price }: ProductsProps) => {
  return (
    <div className="w-full cursor-pointer flex gap-3 flex-col">
      <img className="w-full" src={src} alt={name} />
      <Heading className="text-2xl">{name}</Heading>
      <Text className="text-2xl">{`${price}$`}</Text>
    </div>
  );
};

export default Product;
