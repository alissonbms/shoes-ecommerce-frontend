import { createContext, FunctionComponent, ReactNode, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface CartContextProps {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
}

export const CartContext = createContext<CartContextProps>({
  isVisible: false,
  products: [],
  toggleCart: (): void => {},
  addProductToCart: (): void => {}
})

interface ProviderProps {
  children: ReactNode
}

export const CartContextProvider: FunctionComponent<ProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = (): void => {
    setIsVisible((prevState) => !prevState)
  }

  const addProductToCart = (product: Product): void => {
    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}
