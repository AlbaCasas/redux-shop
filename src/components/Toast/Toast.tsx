import React from "react";

interface ToastProps {
  children: string | JSX.Element;
  className?: string;
}
const Toast = ({ children, className }: ToastProps) => {
  return (
    <div
      className={`flex items-center p-4 min-w-[200px] rounded-lg shadow border-2 border-green-500 fixed right-4 bottom-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Toast;
