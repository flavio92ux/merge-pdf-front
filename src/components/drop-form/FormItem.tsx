import React, { ChangeEvent } from "react";
import { FormItemProps } from "../../interfaces/FormItemProps";

const FormItem: React.FC<FormItemProps> = ({ fileName, setFileName }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white flex items-center w-[735px] h-[52px] rounded-lg -mt-1">
        <input
          className="ml-4 w-full font-sans font-normal text-sm leading-[19.6px] text-gray-50 focus:outline-none"
          value={fileName}
          placeholder="nome do pdf"
          type="text"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default FormItem;
