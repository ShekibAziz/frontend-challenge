import styled from 'styled-components'
import { RegistrationPage } from '../pages/RegistrationPage'

export const App = () => {
  return (
    <AppContainer>
      <RegistrationPage />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
`
