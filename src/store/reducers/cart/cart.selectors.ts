import { RootState } from '../../store'
import CartProduct from '../../../types/cart.types'

export const selectTotalProductsPrice = (state: RootState): number => {
  return state.cartReducer.products.reduce((acc: number, item: CartProduct) => {
    return acc + item.price * item.quantity
  }, 0)
}

export const selectTotalProductsQuantity = (state: RootState): number => {
  return state.cartReducer.products.reduce((acc: number, item: CartProduct) => {
    return acc + item.quantity
  }, 0)
}
