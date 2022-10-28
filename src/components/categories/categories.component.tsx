import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

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
import Category from '../../types/category.types'

const Categories: FunctionComponent = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )
  const dispatch: ThunkDispatch<Category[], void, any> = useDispatch()

  useEffect(() => {
    void dispatch(fetchCategories())
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
