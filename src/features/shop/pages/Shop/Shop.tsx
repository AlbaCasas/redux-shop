import React, { useEffect, useState } from "react";
import Heading from "src/components/Heading";
import Text from "src/components/Text/Text";
import api from "src/services/api";
import Product from "../../components/Product";

const Shop = () => {
  const [products, setProducts] = useState([{}]);
  console.log(products);

  useEffect(() => {
    const sendRequest = async () => {
      const data = await api.getProducts();
      const mappedData = Object.entries(data).map(
        (item: Array<any>): Object => ({
          id: item[0],
          ...item[1],
        })
      );
      setProducts(mappedData);
      /*  console.log({
        original: data,
        entries: Object.entries(data),
        mappedData, */
    };
    sendRequest();
  }, []);

  return (
    <div>
      <Heading className="text-3xl">Minimalist book</Heading>
      <div className="mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products &&
            products.map((product: any) => {
              return (
                <div key={product.id}>
                  <Product src={product.image} name={product.name} />
                  <h1>{product.name}</h1>
                  <Text>{product.price}</Text>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
