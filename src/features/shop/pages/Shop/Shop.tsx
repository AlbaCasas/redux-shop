import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button";
import Heading from "src/components/Heading";
import Layout from "src/components/Layout";
import Nav from "src/components/Nav";
import api from "src/services/api";
import Product from "../../components/Product";

const Shop = () => {
  const [products, setProducts] = useState([{}]);
  const navigate = useNavigate();
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
    <Layout>
      <Nav />
      <Heading className="text-2xl text-center md:text-3xl">
        Gridshop is a beautiful minimalist e-commerce template for your Card
        website
      </Heading>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {products &&
            products.map((product: any) => {
              return (
                <div key={product.id}>
                  <Product
                    onClick={() => {
                      navigate(`details/${product.id}`);
                    }}
                    src={product.image}
                    name={product.name}
                    price={product.price}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Button
        onClick={() => {
          navigate("/admin");
        }}
      >
        Create product
      </Button>
    </Layout>
  );
};

export default Shop;
