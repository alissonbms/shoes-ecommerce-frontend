/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'

// Components
import Header from '../../components/header/header.component'
import CategoryAllProducts from '../../components/category-all-products/category-all-products.component'

const ProductsOfCategoryPage: FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryAllProducts categoryId={id} />
    </>
  )
}

export default ProductsOfCategoryPage
