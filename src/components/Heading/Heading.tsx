import React from "react";

interface HeadingProps {
  children: JSX.Element | string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Heading = ({ children, className, onClick }: HeadingProps) => {
  return (
    <h1
      onClick={onClick}
      className={`font-heading font-semibold  ${className}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
