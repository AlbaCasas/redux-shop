import React from "react";

interface ButtonProps {
  children: string | JSX.Element;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-secondary bg-primary p-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
