import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  link: string;
}

export default function Social({ children, link }: Prop) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {children}
    </a>
  );
}
