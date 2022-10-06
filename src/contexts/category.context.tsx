import { collection, getDocs } from 'firebase/firestore'
import { createContext, useState, ReactNode, FunctionComponent } from 'react'

// Utilities
import Category from '../types/category.types'
import { categoryConverter } from '../converters/firestore.converters'
import { db } from '../config/firebase.config'

interface CategoryContextProps {
  categories: Category[]
  isLoading: boolean
  fetchCategories: () => Promise<void>
}

export const CategoryContext = createContext<CategoryContextProps>({
  categories: [],
  isLoading: false,
  fetchCategories: async () => await Promise.resolve()
})

interface ProviderProps {
  children: ReactNode
}

export const CategoryContextProvider: FunctionComponent<ProviderProps> = ({
  children
}) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async (): Promise<void> => {
    try {
      setIsLoading(true)

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      const categoriesFromFirestore: Category[] = []

      querySnapshot.forEach((doc) => categoriesFromFirestore.push(doc.data()))

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  )
}
