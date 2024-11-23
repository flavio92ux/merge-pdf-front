import React from "react";

interface ButtonProps {
  isDisabled: boolean;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ isDisabled, handleClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        disabled={isDisabled}
        onClick={handleClick}
        className={`bg-blue-400 flex justify-center items-center w-[735px] h-[52px] rounded-lg mt-6 ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500"
        }`}
      >
        <p className="font-sans font-bold text-sm leading-[19.6px] text-gray-10">
          Realizar o merge
        </p>
      </button>
    </div>
  );
};

export default Button;
