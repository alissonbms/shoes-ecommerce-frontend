/* eslint-disable multiline-ternary */
import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
  EmptyCart
} from './cart.styles'

// Components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

// Utilities
import { CartContext } from '../../contexts/cart.context'
import CartProduct from '../../types/cart.types'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart, products, totalPrice, totalQuantity } =
    useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product: CartProduct) => (
          <CartItem key={product.id} product={product} />
        ))}

        {totalQuantity > 0 ? (
          <>
            <CartTotal>Total R${totalPrice}</CartTotal>
            <CustomButton startIcon={<BsCartCheck />}>
              Ir para checkout
            </CustomButton>
          </>
        ) : (
          <EmptyCart>
            <span>You have shopping to do and shoes to show</span>
            <FaShoppingCart />
          </EmptyCart>
        )}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
