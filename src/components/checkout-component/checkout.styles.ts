import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  overflow: hidden;

  p {
    color: ${Colors.text.dark};
  }

  button {
    width: 650px;
  }
`

export const CheckoutTitle = styled.p`
  font-weight: bold;
  font-size: 1.325rem;
`

export const CheckoutProducts = styled.div`
  min-width: 650px;
  margin: 15px 0px;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${Colors.input.background};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Colors.text.dark};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Colors.text.dark};
  }
`

export const CheckoutTotal = styled.p`
  width: 650px;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 15px;
`
