import { createContext, FunctionComponent, ReactNode, useState } from 'react'
import CartProduct from '../types/cart.types'

interface CartContextProps {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
}

export const CartContext = createContext<CartContextProps>({
  isVisible: false,
  products: [],
  toggleCart: (): void => {}
})

interface ProviderProps {
  children: ReactNode
}

export const CartContextProvider: FunctionComponent<ProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = (): void => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
