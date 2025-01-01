import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import store from "@/store";

type TReduxProviderProps = PropsWithChildren;

const ReduxProvider = ({ children }: TReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
