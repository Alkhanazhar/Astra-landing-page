import React from "react";
import { cn } from "../../lib/utils";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full h-full max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
