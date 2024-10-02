import React from 'react'
import { Typography } from 'antd'
import { RegistrationForm } from '../organisms/RegistrationForm'
import styled from 'styled-components'

const { Title } = Typography

export const RegistrationPage: React.FC = () => {
  return (
    <Container>
      <Title level={2}>Registration</Title>
      <RegistrationForm />
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
`
