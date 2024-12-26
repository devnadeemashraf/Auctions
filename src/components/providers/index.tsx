import { PropsWithChildren } from "react";

// Global Providers
import ReduxProvider from "./reduxProvider";
import ThemeProvider from "./themeProvider";

type TRootProviderProps = PropsWithChildren;

const RootProvider = ({ children }: TRootProviderProps) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default RootProvider;
