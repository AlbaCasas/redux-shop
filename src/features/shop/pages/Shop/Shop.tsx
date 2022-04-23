import React from "react";
import Heading from "src/components/Heading";
import Product from "../../components/Product";

const Shop = () => {
  return (
    <div>
      <Heading className="text-3xl">Minimalist book</Heading>
      <div className="mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Product
            src={
              "https://1bbc6964f20fe2f1.demo.carrd.co/assets/images/image11.jpg?v=d1275141"
            }
            name={"bottle"}
          />
          <Product
            src={
              "	https://1bbc6964f20fe2f1.demo.carrd.co/assets/images/image12.jpg?v=d1275141"
            }
            name={"bottle"}
          />
          <Product
            src={
              "	https://1bbc6964f20fe2f1.demo.carrd.co/assets/images/image13.jpg?v=d1275141"
            }
            name={"bottle"}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
