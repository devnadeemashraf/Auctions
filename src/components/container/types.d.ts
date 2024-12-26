import { ReactNode } from "react";

export type TContainerType = "div" | "section" | "main" | "article";

export type TContainerProps = {
  type: TContainerType;
  className?: string;
  children: ReactNode;
};
