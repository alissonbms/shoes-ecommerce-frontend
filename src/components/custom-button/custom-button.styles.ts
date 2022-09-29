import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CustomButtonContainer = styled.button`
  width: 100%;
  background: ${Colors.background.linearGradient};
  color: ${Colors.text.white};
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
  align-items: center;
  border: none;
  font-weight: 600;
  transition: all 0.5s ease;

  @keyframes horizontal-shaking {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  &:hover {
    cursor: pointer;
    animation: horizontal-shaking 0.5s;
    animation-iteration-count: infinite;
  }
`

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;

  display: flex;
  align-items: center;
`
