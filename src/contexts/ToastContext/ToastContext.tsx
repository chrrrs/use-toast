import { createContext, useContext } from "react";

export const ToastContext = createContext({});

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (JSON.stringify(context) === "{}") {
    throw new Error(`useToastContext must be used within a ToastProvider`);
  }

  return context;
};
