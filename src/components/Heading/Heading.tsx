import React from "react";

interface HeadingProps {
  children: JSX.Element | string;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1 className={`font-heading font-semibold ${className}`}>{children}</h1>
  );
};

export default Heading;
