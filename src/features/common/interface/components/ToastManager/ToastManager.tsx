import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Toast from "src/components/Toast";
import { IRootState } from "src/infrastructure/redux/store";
import { useDispatch } from "react-redux";
import { actions } from "src/features/common/interface/slice/interface.slice";

const ToastManager = () => {
  const toast = useSelector((state: IRootState) => state.interface.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (toast) {
      timer = setTimeout(() => {
        dispatch(actions.closeToast());
      }, 5000);
    } else {
      clearTimeout(timer);
    }
  }, [toast, dispatch]);

  return (
    toast && (
      <Toast onClose={() => dispatch(actions.closeToast())}>
        {toast.title}
      </Toast>
    )
  );
};

export default ToastManager;
