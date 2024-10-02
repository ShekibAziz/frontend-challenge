import React from 'react'
import { Form, message } from 'antd'
import { Rule } from 'antd/lib/form'
import moment, { Moment } from 'moment'
import { styled } from 'styled-components'

import { DatePicker, Button, Select, Option, Input } from '../atoms'
import { FormItem } from '../molecules'

const occupations = [
  { value: 'developer', label: 'Developer' },
  { value: 'designer', label: 'Designer' },
  { value: 'manager', label: 'Manager' },
  { value: 'other', label: 'Other' },
]

type FormValues = {
  name: string
  email: string
  birthDate: Moment
  occupation: string
  terms: boolean
}

export const RegistrationForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>()

  const onFinish = (values: FormValues) => {
    console.log('Success:', values)
    message.success('Registration successful!')
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const birthDateValidator: Rule = {
    validator: (_, value: Moment) => {
      if (value && value.isAfter(moment())) {
        return Promise.reject('Birth date cannot be in the future')
      }
      return Promise.resolve()
    },
  }

  return (
    <FormContainer>
      <Form<FormValues>
        form={form}
        name='registration'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout='vertical'
        style={{ width: '300px' }}
      >
        <FormItem
          name='name'
          label='Name'
          rules={[
            { required: true, message: 'Please input your name!', min: 2 },
          ]}
        >
          <Input />
        </FormItem>

        <FormItem
          name='email'
          label='Email'
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </FormItem>

        <FormItem
          name='birthDate'
          label='Birth Date'
          rules={[
            { required: true, message: 'Please select your birth date!' },
            birthDateValidator,
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
        </FormItem>

        <FormItem
          name='occupation'
          label='Occupation'
          rules={[
            { required: true, message: 'Please select your occupation!' },
          ]}
        >
          <Select placeholder='Select an occupation'>
            {occupations.map((occupation) => (
              <Option key={occupation.value} value={occupation.value}>
                {occupation.label}
              </Option>
            ))}
          </Select>
        </FormItem>

        <Button style={{ width: '100%' }} type='primary' htmlType='submit'>
          Register
        </Button>
      </Form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 60px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #fff;
`
