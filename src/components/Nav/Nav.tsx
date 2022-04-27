import React from "react";
import Heading from "../Heading";

interface propsNav {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Nav = ({ className, onClick }: propsNav) => {
  return (
    <div className={`flex flex-col gap-4 mb-6 ${className}`}>
      <Heading onClick={onClick} className="text-4xl cursor-pointer ">
        Minimalist book
      </Heading>
    </div>
  );
};

export default Nav;
