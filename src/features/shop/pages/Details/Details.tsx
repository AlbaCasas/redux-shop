import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "src/components/Button";
import Heading from "src/components/Heading";
import Layout from "src/components/Layout";
import Nav from "src/components/Nav";
import Text from "src/components/Text/Text";
import ToastManager from "src/features/common/interface/components/ToastManager";
import { actions } from "src/features/common/interface/slice/interface.slice";
import api from "src/services/api";
import { ProductDetail } from "../../entities/product";

const Details = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
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

  const addProduct = () => {
    dispatch(
      actions.addToast({
        title: "Product added to cart",
        type: "success",
      })
    );
  };

  return (
    <Layout>
      <ToastManager />
      <Nav onClick={() => navigate(-1)} />
      <div className="flex flex-col md:justify-between md:flex-row-reverse">
        <img src={product?.image} alt={product?.name} />
        <div className="flex-col flex justify-between w-full mt-3">
          <div className=" flex flex-col gap-4">
            <Heading className="text-xl">{product?.name}</Heading>
            <Text>{product?.description}</Text>
          </div>
          <Button onClick={addProduct} className="self-center">
            <Heading className="text-1xl md:text-3xl">{`BUY ${product?.price}$`}</Heading>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
