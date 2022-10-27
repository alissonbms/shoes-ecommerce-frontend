import { FunctionComponent } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

// Utilities
import CartProduct from '../../types/cart.types'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart
} from '../../store/toolkit/cart/cart.slice'

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleRemove = (): void => {
    dispatch(removeProductFromCart(product.id))
  }

  const handleIncrease = (): void => {
    dispatch(increaseProductQuantity(product.id))
  }

  const handleDecrease = (): void => {
    dispatch(decreaseProductQuantity(product.id))
  }

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecrease} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleIncrease} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemove}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
