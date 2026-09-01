import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: Props) {
  return (
    <p className={`text-2xl text-wrap text-center sm:text-5xl${className}`}>
      {children}
    </p>
  );
}
