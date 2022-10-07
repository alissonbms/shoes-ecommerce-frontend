import { FunctionComponent } from 'react'

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './featured-product.styles'

// Utilities
import Product from '../../types/product.types'

interface FeaturedProductProps {
  product: Product
}

const FeaturedProduct: FunctionComponent<FeaturedProductProps> = ({
  product
}) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default FeaturedProduct
