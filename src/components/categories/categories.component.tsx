import { FunctionComponent, useEffect, useState } from 'react'

import env from '../../config/env.config'
import axios from 'axios'

// Utilities
import Category from '../../types/category.types'

// Styles
import './categories.styles.css'
import CategoryItem from '../category-item/category-item.component'

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
      <div className="text-center"><h2>Categories</h2></div>
      <div className="categories-container">
        <div className="categories-content">
          {categories.map((category) => (
            <div key={category.id}>
              <CategoryItem category={category} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories
