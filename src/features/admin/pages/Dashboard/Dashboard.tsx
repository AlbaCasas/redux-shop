import React from "react";
import Button from "src/components/Button";
import Heading from "src/components/Heading";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-[800px] gap-4 mx-auto">
      <Heading>Hello, create a product</Heading>
      <form className="flex flex-col gap-3">
        <input placeholder="Name" />
        <input placeholder="Image" />
        <input placeholder="Enter a description" />
        <input placeholder="Price" />
        <select>
          <option defaultValue="">Choose any option</option>
          <option value="tech">Technology</option>
          <option value="book">Technology</option>
        </select>
        <Button>Create</Button>
      </form>
    </div>
  );
};

export default Dashboard;
