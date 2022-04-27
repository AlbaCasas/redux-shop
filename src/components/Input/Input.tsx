import React from "react";

interface InputProps {
  className?: string;
  name: string;
  placeholder: string;
}

const Input = ({ className, name, placeholder }: InputProps) => {
  return (
    <input
      className={`p-3 ${className}`}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
