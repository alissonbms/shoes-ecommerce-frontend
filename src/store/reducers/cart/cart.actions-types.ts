const CartActionsTypes = {
  toggleCart: 'cart/toggle' as const,
  addProductToCart: 'cart/addProduct' as const,
  removeProductFromCart: 'cart/removeProduct' as const,
  decreaseProductQuantity: 'cart/decreaseProductQuantity' as const,
  increaseProductQuantity: 'cart/increaseProductQuantity' as const,
  clearProducts: 'cart/clearProducts' as const
}

export default CartActionsTypes
