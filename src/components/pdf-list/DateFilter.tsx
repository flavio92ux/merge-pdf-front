import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter: React.FC = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());

  return (
    <div className="flex justify-between items-center w-[735px] mx-auto">
      <div className="flex flex-now gap-2 items-center">
        <span>Merges</span>
        <div className="bg-gray-300 rounded-full w-6 h-5 flex items-center justify-center">
          <span className="font-sans text-xs leading-[14.52px] font-bold text-blueGray-500">0</span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center h-[28px] rounded-lg bg-white font-sans text-sm leading-[16.94px] font-medium text-blueGray-500">
          <div className="flex flex-row py-[5px] px-3 gap-x-1">
            <span>Filtro:</span>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              className="w-[80px] text-blue-400"
            />
            <span>|</span>
            <ReactDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              className="w-[80px] text-blue-400"
            />
            <span>|</span>
            <button>Hoje</button>
            <span>-</span>
            <button>7 dias</button>
            <span>-</span>
            <button>30 dias</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateFilter;