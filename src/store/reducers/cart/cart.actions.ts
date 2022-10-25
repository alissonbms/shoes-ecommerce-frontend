import Product from '../../../types/product.types'
import CartActionsTypes from './cart.actions-types'

interface ToggleCart {
  type: typeof CartActionsTypes.toggleCart
}

export const toggleCart = (): ToggleCart => ({
  type: CartActionsTypes.toggleCart
})

interface AddProductToCart {
  type: typeof CartActionsTypes.addProductToCart
  payload: Product
}

export const addProductToCart = (payload: Product): AddProductToCart => ({
  type: CartActionsTypes.addProductToCart,
  payload
})

interface RemoveProductFromCart {
  type: typeof CartActionsTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCart => ({
  type: CartActionsTypes.removeProductFromCart,
  payload
})

interface DecreaseProductQuantity {
  type: typeof CartActionsTypes.decreaseProductQuantity
  payload: string
}

export const decreaseProductQuantity = (
  payload: string
): DecreaseProductQuantity => ({
  type: CartActionsTypes.decreaseProductQuantity,
  payload
})

interface IncreaseProductQuantity {
  type: typeof CartActionsTypes.increaseProductQuantity
  payload: string
}

export const increaseProductQuantity = (
  payload: string
): IncreaseProductQuantity => ({
  type: CartActionsTypes.increaseProductQuantity,
  payload
})

interface ClearProducts {
  type: typeof CartActionsTypes.clearProducts
}

export const clearProducts = (): ClearProducts => ({
  type: CartActionsTypes.clearProducts
})
