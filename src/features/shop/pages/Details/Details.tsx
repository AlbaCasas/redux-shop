import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "src/components/Heading";
import Layout from "src/components/Layout";
import Nav from "src/components/Nav";
import Text from "src/components/Text/Text";
import api from "src/services/api";
import { ProductDetail } from "../../entities/product";

const Details = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sendRequest = async () => {
      if (productId) {
        const data = await api.getProduct(productId);
        setProduct(data);
      }
    };
    sendRequest();
  }, [productId]);

  return (
    <Layout>
      <Nav onClick={() => navigate(-1)} />
      <div className="flex flex-col md:justify-between md:flex-row-reverse">
        <img src={product?.image} alt={product?.name} />
        <div className="flex-col flex justify-between w-full mt-3">
          <div className=" flex flex-col gap-4">
            <Heading className="text-xl">{product?.name}</Heading>
            <Text>{product?.description}</Text>
          </div>
          <div className="self-center">
            <Heading className="text-3xl ">{`${product?.price}$`}</Heading>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
