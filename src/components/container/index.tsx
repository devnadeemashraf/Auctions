import { cn } from "@/lib/utils";
import { TContainerProps } from "./types";

const Container = ({ type = "div", className, children }: TContainerProps) => {
  const Component = type;
  let defaultStyle = "w-full";

  // Default Styles for Each 'type'
  switch (type) {
    case "div": {
      defaultStyle = "max-w-[1440px] mx-auto";
      break;
    }
    case "section": {
      defaultStyle = "max-w-[1440px] mx-auto";
      break;
    }
    case "main": {
      defaultStyle = "max-w-[1440px] mx-auto";
      break;
    }
    case "article": {
      defaultStyle = "max-w-[1440px] mx-auto";
      break;
    }
  }

  return (
    <Component className={cn(defaultStyle, className)}>{children}</Component>
  );
};

export default Container;
