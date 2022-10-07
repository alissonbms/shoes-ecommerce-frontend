import { collection, getDocs, query, where } from 'firebase/firestore'
import { FunctionComponent, useEffect, useState } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

// Styles
import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer
} from './category-all-products.styles'

// Components
import { Loading } from '../loading/loading.component'
import FeaturedProduct from '../featured-product/featured-product.component'

// Utilities
import { db } from '../../config/firebase.config'
import Category from '../../types/category.types'
import { categoryConverter } from '../../converters/firestore.converters'

interface CategoryAllProductsProps {
  categoryId: string
}

const CategoryAllProducts: FunctionComponent<CategoryAllProductsProps> = ({
  categoryId
}) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleBack = (): void => {
    navigate('/')
  }

  useEffect(() => {
    const fetchCategory = async (): Promise<void> => {
      try {
        setIsLoading(true)

        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )

        const categoryFromFirestore = querySnapshot.docs[0]?.data()

        setCategory(categoryFromFirestore)
      } catch (error) {
        console.log({ error })
      } finally {
        setIsLoading(false)
      }
    }

    void fetchCategory()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBack}>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>Explorar {category?.name}</p>
      </CategoryTitle>

      <ProductsContainer>
        {category?.products.map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}

export default CategoryAllProducts
