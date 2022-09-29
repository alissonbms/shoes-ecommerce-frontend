import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginHeadline = styled.p`
  color: ${Colors.text.dark};
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 15px;
`
export const LoginSubtitle = styled.p`
  color: ${Colors.text.dark};
  margin-top: 15px;
  font-weight: 500;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  margin-bottom: 20px;
`

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`
