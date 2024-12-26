import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IIcon {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

const Icon = ({ icon: LucideIcon, size = 12, className }: IIcon) => {
  return <LucideIcon size={size} className={cn(className)} />;
};

export default Icon;
