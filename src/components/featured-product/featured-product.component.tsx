import { FunctionComponent } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

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
import { addProductToCart } from '../../store/toolkit/cart/cart.slice'

interface FeaturedProductProps {
  product: Product
}

const FeaturedProduct: FunctionComponent<FeaturedProductProps> = ({
  product
}) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = (): void => {
    dispatch(addProductToCart(product))
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
