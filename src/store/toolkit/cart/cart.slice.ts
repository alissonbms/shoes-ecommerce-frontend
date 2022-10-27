import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CartProduct from '../../../types/cart.types'
import Product from '../../../types/product.types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isVisible = !state.isVisible
    },
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload

      const isProductAlreadyInCart = state.products.some(
        (item) => item.id === product.id
      )

      if (isProductAlreadyInCart) {
        state.products = state.products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return
      }

      state.products = [...state.products, { ...product, quantity: 1 }]
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload

      state.products = state.products.filter((item) => item.id !== id)
    },
    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload

      state.products = state.products.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    },
    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload

      state.products = state.products
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    },
    clearProducts: (state) => {
      state.products = []
    }
  }
})

export const {
  toggleCart,
  addProductToCart,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearProducts
} = cartSlice.actions

export default cartSlice.reducer
