import { FunctionComponent, useContext } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { CartContext } from '../../contexts/cart.context'

// Utilities
import CartProduct from '../../types/cart.types'

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
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
  } = useContext(CartContext)

  const handleRemove = (): void => {
    removeProductFromCart(product.id)
  }

  const handleIncrease = (): void => {
    increaseProductQuantity(product.id)
  }

  const handleDecrease = (): void => {
    decreaseProductQuantity(product.id)
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
