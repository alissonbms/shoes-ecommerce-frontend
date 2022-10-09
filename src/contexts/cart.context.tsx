/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface CartContextProps {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  decreaseProductQuantity: (productId: string) => void
  totalPrice: number
  totalQuantity: number
}

export const CartContext = createContext<CartContextProps>({
  isVisible: false,
  products: [],
  toggleCart: (): void => {},
  addProductToCart: (): void => {},
  removeProductFromCart: (): void => {},
  increaseProductQuantity: (): void => {},
  decreaseProductQuantity: (): void => {},
  totalPrice: 0,
  totalQuantity: 0
})

interface ProviderProps {
  children: ReactNode
}

export const CartContextProvider: FunctionComponent<ProviderProps> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  useEffect(() => {
    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem('cartProducts')!
      // JSON.parse() só aceita string e
      // aqui temos um retorno de string ou null
      // ! = garantir que sempre haverá o retorno de algo
    )
    if (productsFromLocalStorage.length > 0) {
      setProducts(productsFromLocalStorage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  const totalPrice = useMemo(() => {
    return products.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }, [products])

  const totalQuantity = useMemo(() => {
    return products.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [products])

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

  const increaseProductQuantity = (productId: string): void => {
    setProducts((prevState) =>
      prevState.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseProductQuantity = (productId: string): void => {
    setProducts((prevState) =>
      prevState
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        toggleCart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        totalPrice,
        totalQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}
