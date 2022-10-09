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
  justify-content: space-between;
  margin-top: 5px;

  p {
    font-size: 1rem;
    font-weight: 500;
  }
`

export const ProductImage = styled.div<ProductImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 380px;
  width: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  border-radius: 10px;
  align-items: flex-end;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;

  button {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
    margin: 20px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);

    button {
      visibility: visible;
      opacity: 1;
    }
  }
`
