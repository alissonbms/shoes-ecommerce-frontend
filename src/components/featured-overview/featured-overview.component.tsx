import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

// Utilities
import { fetchCategories } from '../../store/toolkit/category/category.slice'
import { useAppSelector } from '../../hooks/redux.hooks'
import Category from '../../types/category.types'

// Styles
import { Container } from './featured-overview.styles'

// Components
import { Loading } from '../loading/loading.component'
import CategoryFeaturedProducts from '../category-featured-products/category-featured-products.component'

const FeaturedOverview: FunctionComponent = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )
  const dispatch: ThunkDispatch<Category[], void, any> = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      void dispatch(fetchCategories())
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryFeaturedProducts key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default FeaturedOverview
