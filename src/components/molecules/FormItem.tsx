import React from 'react'
import { Form } from 'antd'
import { Rule } from 'antd/lib/form'

type FormItemProps = {
  name: string
  label: string
  rules?: Rule[]
  children: React.ReactNode
}

export const FormItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules,
  children,
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      {children}
    </Form.Item>
  )
}
