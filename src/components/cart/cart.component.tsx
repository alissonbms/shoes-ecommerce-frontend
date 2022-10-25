import { FunctionComponent } from 'react'
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
import CartProduct from '../../types/cart.types'
import { useAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/reducers/cart/cart.actions'
import {
  selectTotalProductsPrice,
  selectTotalProductsQuantity
} from '../../store/reducers/cart/cart.selectors'

const Cart: FunctionComponent = () => {
  const totalProductsPrice = useAppSelector(selectTotalProductsPrice)
  const totalProductsQuantity = useAppSelector(selectTotalProductsQuantity)

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

        {totalProductsQuantity > 0 ? (
          <>
            <CartTotal>Total: R${totalProductsPrice}</CartTotal>
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
