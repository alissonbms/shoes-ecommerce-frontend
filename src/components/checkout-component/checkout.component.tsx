import { FunctionComponent, useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BsBagCheck } from 'react-icons/bs'

// Styles
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutProducts,
  CheckoutTotal
} from './checkout.styles'
import { EmptyCart } from '../cart/cart.styles'

// Components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

// Utilities
import { CartContext } from '../../contexts/cart.context'

const Checkout: FunctionComponent = () => {
  const { products, totalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      {products.length > 0 ? (
        <>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>
          <CheckoutTotal>Total: R${totalPrice}</CheckoutTotal>
          <CustomButton startIcon={<BsBagCheck />}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <>
          <EmptyCart>
            <span>You have shopping to do and shoes to show</span>
            <FaShoppingCart />
          </EmptyCart>
        </>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
