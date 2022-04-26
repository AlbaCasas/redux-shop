import React from "react";
import Heading from "../Heading";

interface propsNav {
  children?: JSX.Element | string;
  className?: string;
}

const Nav = ({ children, className }: propsNav) => {
  return (
    <div className={`flex flex-col gap-4 mb-6 ${className}`}>
      <Heading className="text-4xl">Minimalist book</Heading>
    </div>
  );
};

export default Nav;
