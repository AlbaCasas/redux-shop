import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Text from "src/components/Text/Text";
import api from "src/services/api";

const Details = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([{}]);

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
    };
    sendRequest();
  }, []);

  const result: any =
    products &&
    products.filter((product: any) => {
      return product.id === productId;
    });

  return (
    <div className="">
      <div className="flex-col flex">
        <Text>{result[0]?.name}</Text>
        <Text>{result[0]?.price}</Text>
        <Text>{result[0]?.description}</Text>
      </div>
      <img src={result[0]?.image} alt={result[0]?.name} />
    </div>
  );
};

export default Details;
