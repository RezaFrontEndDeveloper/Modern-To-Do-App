import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  className?: string;
}

export default function Title({ children, className }: Prop) {
  return <h1 className={`${className}`}>{children}</h1>;
}
