import { ToastContext } from "./ToastContext";

export interface ToastProviderProps {}

export const ToastProvider = (props: ToastProviderProps) => {
  const { ...rest } = props;

  return <ToastContext.Provider value={{}} {...rest} />;
};
