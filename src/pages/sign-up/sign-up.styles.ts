import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const SignUpContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SignUpHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: ${Colors.text.dark};
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #6c757d;
  padding-bottom: 15px;
`

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`

export const SignUpInputContainer = styled.div`
  width: 100%;
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
  margin-bottom: 20px;
`
