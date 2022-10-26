import CartProduct from '../../../types/cart.types'
import { CartActions } from './cart.actions'
import CartActionsTypes from './cart.actions-types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: []
}

const cartReducer = (
  state = initialState,
  action: CartActions
): InitialState => {
  switch (action.type) {
    case CartActionsTypes.toggleCart:
      return { ...state, isVisible: !state.isVisible }
    case CartActionsTypes.addProductToCart: {
      const product = action.payload

      const isProductAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (isProductAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }

      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }]
      }
    }
    case CartActionsTypes.removeProductFromCart: {
      const id = action.payload

      return {
        ...state,
        products: state.products.filter((item) => item.id !== id)
      }
    }

    case CartActionsTypes.decreaseProductQuantity: {
      const id = action.payload

      return {
        ...state,
        products: state.products
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0)
      }
    }

    case CartActionsTypes.increaseProductQuantity: {
      const id = action.payload

      return {
        ...state,
        products: state.products.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    }

    case CartActionsTypes.clearProducts:
      return {
        ...state,
        products: []
      }

    default:
      return state
  }
}

export default cartReducer
