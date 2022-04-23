import React from "react";

interface TextProps {
  children: JSX.Element | string;
  className?: string;
}

const Text = ({ children, className }: TextProps) => {
  return <span className={`font-body ${className}`}>{children}</span>;
};

export default Text;
