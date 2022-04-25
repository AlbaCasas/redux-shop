import React from "react";
import { MdClose } from "react-icons/md";

interface ToastProps {
  children: string | JSX.Element;
  className?: string;
  onClose?: () => void;
}
const Toast = ({ children, className, onClose }: ToastProps) => {
  return (
    <div
      className={`flex items-center p-4 min-w-[200px] rounded-lg shadow border-2 border-green-500 fixed right-4 bottom-4 ${className}`}
    >
      <MdClose onClick={onClose} className="absolute top-2 right-2" />
      {children}
    </div>
  );
};

export default Toast;
