import { FunctionComponent, useContext, useEffect } from 'react'

// Components
import CategoryItem from '../category-item/category-item.component'
import { Loading } from '../loading/loading.component'

// Styles
import {
  CategoriesContainer,
  CategoriesContent,
  TextCenter
} from './categories.styles'

// Utilities
import { CategoryContext } from '../../contexts/category.context'

const Categories: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    void fetchCategories()
  }, [])

  if (isLoading) return <Loading />

  return (
    <>
      <TextCenter>
        <h2>Categories</h2>
      </TextCenter>
      <CategoriesContainer>
        <CategoriesContent>
          {categories.map((category) => (
            <div key={category.id}>
              <CategoryItem category={category} />
            </div>
          ))}
        </CategoriesContent>
      </CategoriesContainer>
    </>
  )
}

export default Categories
