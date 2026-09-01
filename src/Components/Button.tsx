import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  varient: "primary" | "secondary" | "danger";
}

const styles = {
  primary: "bg-stone-800 text-white hover:bg-stone-700",
  secondary: "bg-stone-100 text-stone-900 hover:bg-stone-50",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

export default function Button({ children, varient, ...props }: Props) {
  return (
    <button
      {...props}
      className={`${styles[varient]} flex justify-center items-center px-4 py-2 min-w-50 cursor-pointer transition-all duration-300 rounded-xl `}
    >
      {children}
    </button>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// <Link to={"/ToDo"}>
//     <button className="cursor-pointer w-40 group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
//       <span className="z-10 pr-2">Start App</span>
//       <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
//         <div className="mr-3.5 flex items-center justify-center">
//           <svg
//             width="15"
//             height="15"
//             viewBox="0 0 15 15"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-neutral-50"
//           >
//             <path
//               d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
//               fill="currentColor"
//               fillRule="evenodd"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     </button>
//   </Link>
// );
