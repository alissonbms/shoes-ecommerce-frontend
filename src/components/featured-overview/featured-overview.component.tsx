import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Utilities
import { fetchCategories } from '../../store/reducers/category/category.actions'
import { useAppSelector } from '../../hooks/redux.hooks'

// Styles
import { Container } from './featured-overview.styles'

// Components
import { Loading } from '../loading/loading.component'
import CategoryFeaturedProducts from '../category-featured-products/category-featured-products.component'

const FeaturedOverview: FunctionComponent = () => {
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any)
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
