import { FunctionComponent, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BsBagCheck } from 'react-icons/bs'
import axios from 'axios'

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
import { Loading } from '../loading/loading.component'

// Utilities
import CartProduct from '../../types/cart.types'
import { useAppSelector } from '../../hooks/redux.hooks'
import { selectTotalProductsPrice } from '../../store/reducers/cart/cart.selectors'

const Checkout: FunctionComponent = () => {
  const { products } = useAppSelector((state) => state.cartReducer)

  const totalProductsPrice = useAppSelector(selectTotalProductsPrice)
  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchase = async (): Promise<void> => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL!}/create-checkout-session`,
        {
          products
        }
      )

      window.location.href = data.url
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CheckoutContainer>
      {isLoading && <Loading />}
      {products.length > 0 ? (
        <>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <CheckoutProducts>
            {products.map((product: CartProduct) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>
          <CheckoutTotal>Total: R${totalProductsPrice}</CheckoutTotal>
          <CustomButton
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchase}>
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
