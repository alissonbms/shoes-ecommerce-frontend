import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-featured-products.styles'

interface CategoryFeaturedProductsProps {
  category: Category
}

const CategoryFeaturedProducts: FunctionComponent<
  CategoryFeaturedProductsProps
> = ({ category }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.name}</CategoryTitle>
      <ProductsContainer>aa</ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryFeaturedProducts
