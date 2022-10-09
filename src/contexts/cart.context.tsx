import { createContext, FunctionComponent, ReactNode, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface CartContextProps {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
}

export const CartContext = createContext<CartContextProps>({
  isVisible: false,
  products: [],
  toggleCart: (): void => {},
  addProductToCart: (): void => {},
  removeProductFromCart: (): void => {}
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
    const isProductAlreadyInCart = products.some(
      (item) => item.id === product.id
    )

    if (isProductAlreadyInCart) {
      return setProducts((prevState) =>
        prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string): void => {
    setProducts((prevState) =>
      prevState.filter((item) => item.id !== productId)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart,
        removeProductFromCart
      }}>
      {children}
    </CartContext.Provider>
  )
}
