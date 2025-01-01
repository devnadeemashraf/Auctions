import { PropsWithChildren } from "react";

// Providers
import ReduxProvider from "./redux-provider";
import ThemeProvider from "./theme-provider";

type TRootProviderProps = PropsWithChildren;

const RootProvider = ({ children }: TRootProviderProps) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default RootProvider;
