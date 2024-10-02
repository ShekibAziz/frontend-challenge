import React from 'react'
import { DatePicker as AntDatePicker, DatePickerProps } from 'antd'

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  return <AntDatePicker {...props} />
}
