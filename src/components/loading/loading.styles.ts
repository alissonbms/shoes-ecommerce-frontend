import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  z-index: 100;

  p {
    color: ${Colors.text.white};
    font-weight: 500;
    font-size: 1.325rem;
    margin-bottom: 25px;
    max-width: 50%;
    text-align: center;
  }
`
