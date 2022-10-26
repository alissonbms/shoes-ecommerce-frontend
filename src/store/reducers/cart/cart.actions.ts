import Product from '../../../types/product.types'
import CartActionsTypes from './cart.actions-types'

interface ToggleCartAction {
  type: typeof CartActionsTypes.toggleCart
}

export const toggleCart = (): ToggleCartAction => ({
  type: CartActionsTypes.toggleCart
})

interface AddProductToCartAction {
  type: typeof CartActionsTypes.addProductToCart
  payload: Product
}

export const addProductToCart = (payload: Product): AddProductToCartAction => ({
  type: CartActionsTypes.addProductToCart,
  payload
})

interface RemoveProductFromCartAction {
  type: typeof CartActionsTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCartAction => ({
  type: CartActionsTypes.removeProductFromCart,
  payload
})

interface DecreaseProductQuantityAction {
  type: typeof CartActionsTypes.decreaseProductQuantity
  payload: string
}

export const decreaseProductQuantity = (
  payload: string
): DecreaseProductQuantityAction => ({
  type: CartActionsTypes.decreaseProductQuantity,
  payload
})

interface IncreaseProductQuantityAction {
  type: typeof CartActionsTypes.increaseProductQuantity
  payload: string
}

export const increaseProductQuantity = (
  payload: string
): IncreaseProductQuantityAction => ({
  type: CartActionsTypes.increaseProductQuantity,
  payload
})

interface ClearProductsAction {
  type: typeof CartActionsTypes.clearProducts
}

export const clearProducts = (): ClearProductsAction => ({
  type: CartActionsTypes.clearProducts
})

export type CartActions =
  | ToggleCartAction
  | AddProductToCartAction
  | RemoveProductFromCartAction
  | DecreaseProductQuantityAction
  | IncreaseProductQuantityAction
  | ClearProductsAction
