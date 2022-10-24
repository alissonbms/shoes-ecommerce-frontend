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
