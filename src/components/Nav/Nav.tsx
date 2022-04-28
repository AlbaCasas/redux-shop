import React from "react";
import Heading from "../Heading";
import { MdOutlineShoppingCart } from "react-icons/md";

interface propsNav {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Nav = ({ className, onClick }: propsNav) => {
  return (
    <div
      className={`flex gap-4 mb-6 items-center justify-between ${className}`}
    >
      <Heading
        onClick={onClick}
        className="text-2xl cursor-pointer md:text-4xl"
      >
        Minimalist book
      </Heading>
      <div className="flex items-center gap-2">
        <h1 className="hidden md:block">hola</h1>
        <MdOutlineShoppingCart className="text-3xl" />
      </div>
    </div>
  );
};

export default Nav;
