import { FunctionComponent, useEffect, useState } from 'react'

// Utilities
import Category from '../../types/category.types'

import CategoryItem from '../category-item/category-item.component'

// Styles
import {
  CategoriesContainer,
  CategoriesContent,
  TextCenter
} from './categories.styles'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'

const Categories: FunctionComponent = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async (): Promise<void> => {
    try {
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      const categoriesFromFirebase: Category[] = []

      querySnapshot.forEach((doc) => categoriesFromFirebase.push(doc.data()))
      setCategories(categoriesFromFirebase)
    } catch (error) {
      console.log({ error })
    }
  }

  // array vazia [] = executar tal código assim
  // que o componete Categories for renderizado
  useEffect(() => {
    void fetchCategories()
  }, [])

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
