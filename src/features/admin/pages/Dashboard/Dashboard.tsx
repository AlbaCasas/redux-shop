import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button";
import Heading from "src/components/Heading";
import Input from "src/components/Input";
import Layout from "src/components/Layout";
import Nav from "src/components/Nav";
import ToastManager from "src/features/common/interface/components/ToastManager";
import { actions } from "src/features/common/interface/slice/interface.slice";
import api from "src/services/api";

interface SubmitTarget {
  name: { value: string };
  image: { value: string };
  description: { value: string };
  price: { value: number };
  category: { value: string };
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & SubmitTarget;

    api.createProduct({
      name: target.name.value,
      image: target.image.value,
      description: target.description.value,
      price: target.price.value,
      category: target.category.value,
    });

    dispatch(actions.addToast({ title: "Product created", type: "success" }));
  };

  return (
    <Layout className="flex flex-col w-[800px] gap-4 mx-auto">
      <Nav
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="w-full md:w-[400px] self-center flex gap-5 flex-col ">
        <ToastManager />
        <Heading>Hello, create a product</Heading>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input name="name" placeholder="Name" />
          <Input name="image" placeholder="Image" />
          <Input
            className="resize-none"
            name="description"
            placeholder="Enter a description"
          />
          <Input name="price" placeholder="Price" />
          <select name="category">
            <option defaultValue="">Choose any option</option>
            <option value="tech">Technology</option>
            <option value="book">Books</option>
          </select>
          <Button>Create</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
