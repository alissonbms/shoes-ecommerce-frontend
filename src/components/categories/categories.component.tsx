import { FunctionComponent, useEffect, useState } from 'react'

import env from '../../config/env.config'
import axios from 'axios'

// Utilities
import Category from '../../types/category.types'

import CategoryItem from '../category-item/category-item.component'

// Styles
import {
  CategoriesContainer,
  CategoriesContent,
  TextCenter
} from './categories.styles'

const Categories: FunctionComponent = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async (): Promise<void> => {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data } = await axios.get(`${env.apiUrl}/api/category`)

      setCategories(data)
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
