import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import { CategoryItemContainer, CategoryName } from './category-item.styles'
interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer categoryBackground={category.imageUrl}>
      <CategoryName>
        <p>{category.name}</p>
        <p>
          {category.products.length > 1
            ? `${category.products.length} items`
            : `${category.products.length} item`}
        </p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
