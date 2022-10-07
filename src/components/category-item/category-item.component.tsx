import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import Category from '../../types/category.types'
import { CategoryItemContainer, CategoryName } from './category-item.styles'
interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleCategory = (): void => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer categoryBackground={category.imageUrl}>
      <CategoryName onClick={handleCategory}>
        <p>{category.name}</p>
        <p>
          {category.products.length > 1
            ? `${category.products.length} products`
            : `${category.products.length} product`}
        </p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
