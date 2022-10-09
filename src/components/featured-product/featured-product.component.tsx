import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

// Components
import CustomButton from '../custom-button/custom-button.component'

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './featured-product.styles'

// Utilities
import Product from '../../types/product.types'
import { CartContext } from '../../contexts/cart.context'

interface FeaturedProductProps {
  product: Product
}

const FeaturedProduct: FunctionComponent<FeaturedProductProps> = ({
  product
}) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddProductToCart = (): void => {
    addProductToCart(product)
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus />}
          onClick={handleAddProductToCart}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default FeaturedProduct
