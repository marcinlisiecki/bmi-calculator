import React, { FunctionComponent, MouseEvent } from "react";

interface Props {
  isHidden: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<Props> = ({ isHidden, onClick, children }) => {
  return (
    <button
      className={`bg-blue-500 px-10 py-2 rounded-full text-white font-medium transform transition hover:scale-[1.02] active:scale-[0.98] mt-20 ${
        isHidden ? "opacity-1 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
