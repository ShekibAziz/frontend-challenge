import React from 'react'
import { Button as AntButton, ButtonProps } from 'antd'

export const Button: React.FC<ButtonProps> = (props) => {
  return <AntButton type='primary' {...props} /> // Set type to a valid option
}
