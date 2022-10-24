import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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
import { useAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/reducers/cart/cart.actions'

const Cart: FunctionComponent = () => {
  const { totalPrice, totalQuantity } = useContext(CartContext)

  const { isVisible, products } = useAppSelector((state) => state.cartReducer)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCheckoutPage = (): void => {
    navigate('/checkout')
    dispatch(toggleCart())
  }

  const handleEscapeArea = (): void => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeArea} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {products.map((product: CartProduct) => (
          <CartItem key={product.id} product={product} />
        ))}

        {totalQuantity > 0 ? (
          <>
            <CartTotal>Total: R${totalPrice}</CartTotal>
            <CustomButton
              startIcon={<BsCartCheck />}
              onClick={handleCheckoutPage}>
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
