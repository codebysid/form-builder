import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ICustomDatePicker {
  setAnswers: Dispatch<SetStateAction<string[]>>;
  index: number;
}

const CustomDatePicker = ({ setAnswers, index }: ICustomDatePicker) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);

    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = String(date);
      return newAnswers;
    });
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM-dd-yy"
      placeholderText="MM-DD-YY"
      className=" text-sm w-full rounded-lg border outline-none p-1 pl-2"
    />
  );
};

export default CustomDatePicker;
