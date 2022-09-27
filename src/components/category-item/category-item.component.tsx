import { FunctionComponent } from 'react'
import Category from '../../types/category.types'

import './category-item.styles.css'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `url('${category.imageUrl}')` }}>
      <div className="category-name">
        <p>{category.name}</p>
        <p>
          {category.products.length > 1
            ? `${category.products.length} items`
            : `${category.products.length} item`}
        </p>
      </div>
    </div>
  )
}

export default CategoryItem
