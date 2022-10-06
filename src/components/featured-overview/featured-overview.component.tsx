import { FunctionComponent, useContext, useEffect } from 'react'

// Utilities
import { CategoryContext } from '../../contexts/category.context'
import Category from '../../types/category.types'

// Styles
import { Container } from './featured-overview.styles'

// Components
import { Loading } from '../loading/loading.component'

const FeaturedOverview: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      void fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category: Category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </Container>
  )
}

export default FeaturedOverview
