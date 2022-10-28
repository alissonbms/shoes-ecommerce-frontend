import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'

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
import { fetchCategories } from '../../store/toolkit/category/category.slice'
import { useAppSelector } from '../../hooks/redux.hooks'

const Categories: FunctionComponent = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
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
