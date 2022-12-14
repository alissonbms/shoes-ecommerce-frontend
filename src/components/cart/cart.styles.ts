import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

interface CartContainerPros {
  isVisible: boolean
}

export const CartContainer = styled.div<CartContainerPros>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: all 0.3s ease;

  p {
    color: ${Colors.text.dark};
  }
`

export const CartEscapeArea = styled.div`
  width: 100%;
`

export const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
`
export const CartTitle = styled.p`
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 15px;
`
export const CartTotal = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 15px;
`
export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.text.dark};
  height: 100%;
  width: 100%;
  row-gap: 10px;
  align-items: center;
  justify-content: center;

  span {
    font-size: 20px;
    font-weight: 600;
  }

  svg {
    font-size: 8rem;
    color: lightgray;
  }
`
