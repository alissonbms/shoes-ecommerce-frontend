import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const CategoryTitle = styled.p`
  justify-self: center;
  text-shadow: 0.5px 0.5px 1px ${Colors.text.dark};
  text-transform: uppercase;
  border-radius: 6px;
  color: ${Colors.text.dark};
  width: 100%;
  font-size: 1.8rem;
  letter-spacing: 5px;
  font-weight: 500;
  margin-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`
