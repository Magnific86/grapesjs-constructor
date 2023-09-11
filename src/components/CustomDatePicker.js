import React, { useState } from "react"
import ReactDatePicker from "react-datepicker"

export const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  return <ReactDatePicker selected={startDate} onChange={date => setStartDate(date)} />
}
