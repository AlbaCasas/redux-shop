import React from "react";
import { useDispatch } from "react-redux";
import Button from "src/components/Button";
import Heading from "src/components/Heading";
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
    <div className="flex flex-col w-[800px] gap-4 mx-auto">
      <ToastManager />
      <Heading>Hello, create a product</Heading>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="name" placeholder="Name" />
        <input name="image" placeholder="Image" />
        <textarea name="description" placeholder="Enter a description" />
        <input name="price" placeholder="Price" />
        <select name="category">
          <option defaultValue="">Choose any option</option>
          <option value="tech">Technology</option>
          <option value="book">Books</option>
        </select>
        <Button>Create</Button>
      </form>
    </div>
  );
};

export default Dashboard;
