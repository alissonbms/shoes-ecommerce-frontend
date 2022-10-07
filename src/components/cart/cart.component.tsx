import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'

// Components
import CustomButton from '../custom-button/custom-button.component'

// Utilities
import { CartContext } from '../../contexts/cart.context'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* Products */}

        <CartTotal>R$ 199</CartTotal>
        <CustomButton startIcon={<BsCartCheck />}>
          Ir para checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
