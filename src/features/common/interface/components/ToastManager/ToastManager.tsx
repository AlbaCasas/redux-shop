import React from "react";
import { useSelector } from "react-redux";
import Toast from "src/components/Toast";
import { IRootState } from "src/infrastructure/redux/store";

const ToastManager = () => {
  const toast = useSelector((state: IRootState) => state.interface.toast);
  return toast && <Toast>{toast.title}</Toast>;
};

export default ToastManager;
