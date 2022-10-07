import { FunctionComponent } from 'react'

// Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-featured-products.styles'

// Utilities
import Category from '../../types/category.types'

// Components
import FeaturedProduct from '../featured-product/featured-product.component'
interface CategoryFeaturedProductsProps {
  category: Category
}

const CategoryFeaturedProducts: FunctionComponent<
  CategoryFeaturedProductsProps
> = ({ category }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.name}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryFeaturedProducts
