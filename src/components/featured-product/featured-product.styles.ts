import styled from 'styled-components'

interface ProductImageProps {
  imageUrl: string
}

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductInfo = styled.div`
  display: flex;
  margin-top: 5px;
  column-gap: 5px;
  justify-content: space-between;
  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
`

export const ProductImage = styled.div<ProductImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 220px;
  width: 330px;
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
`
