import React from 'react'
import { Select as AntSelect } from 'antd'
import { SelectProps } from 'antd/es/select'

export const Select: React.FC<SelectProps> = (props) => {
  return <AntSelect {...props} />
}

export const Option = AntSelect.Option
