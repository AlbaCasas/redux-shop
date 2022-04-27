import React from "react";

interface propsLayout {
  children?: any | JSX.Element;
  className?: string;
}

const Layout = ({ children, className }: propsLayout) => {
  return <div className={`w-full ${className} p-8`}>{children}</div>;
};

export default Layout;
