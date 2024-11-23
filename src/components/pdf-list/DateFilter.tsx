import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterProps } from "../../interfaces/DateFilterProps";

const DateFilter: React.FC<DateFilterProps> = ({ startDate, endDate, setStartDate, setEndDate, arraySize }) => {
  const [range, setRange] = useState(30);

  const setDateRange = (daysAgo: number) => {
    const currentDate = new Date();
    
    const startDate = new Date();
    startDate.setDate(currentDate.getDate() - daysAgo);
    startDate.setHours(0, 0, 0, 0); 
  
  
    const endDate = new Date(currentDate);
    endDate.setHours(23, 59, 59, 999);

    const diffTime = endDate.getTime() - startDate.getTime();
    
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));
    
    setRange(diffDays)
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div className="flex justify-between items-center w-[735px] mx-auto mb-5">
      <div className="flex flex-now gap-2 items-center">
        <span>Merges</span>
        <div className="bg-gray-300 rounded-full w-6 h-5 flex items-center justify-center">
          <span className="font-sans text-xs leading-[14.52px] font-bold text-blueGray-500">{arraySize}</span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center h-[28px] rounded-lg bg-white font-sans text-sm leading-[16.94px] font-medium text-blueGray-500">
          <div className="flex flex-row py-[5px] px-3 gap-x-1">
            <span>Filtro:</span>
            <ReactDatePicker
              selected={startDate}
              onChange={(date: Date | null) => {
                setStartDate(date || new Date());
                if (date && endDate < date) {
                  setEndDate(date);
                }
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              className="w-[70px] text-blue-400"
            />
            <span>|</span>
            <ReactDatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date || new Date())}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              className="w-[70px] text-blue-400"
            />
            <span>|</span>
            <button className={`text-blue-400 ${range === 0 ? 'font-bold' : ''}`} onClick={() => setDateRange(0)}>Hoje</button>
            <span>-</span>
            <button className={`text-blue-400 ${range === 7 ? 'font-bold' : ''}`} onClick={() => setDateRange(7)}>7 dias</button>
            <span>-</span>
            <button className={`text-blue-400 ${range === 30 ? 'font-bold' : ''}`} onClick={() => setDateRange(30)}>30 dias</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateFilter;