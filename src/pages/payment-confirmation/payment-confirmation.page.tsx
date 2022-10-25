import { FunctionComponent, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'

// Components
import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { Loading } from '../../components/loading/loading.component'

// Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-confirmation.styles'

// Utilities
import Colors from '../../theme/theme.colors'
import { clearProducts } from '../../store/reducers/cart/cart.actions'

const PaymentConfirmationPage: FunctionComponent = () => {
  const [searchParams] = useSearchParams()

  const dispatch = useDispatch()

  const status = searchParams.get('success')
  const cancellation = searchParams.get('canceled')

  const navigate = useNavigate()

  const handleInitialPage = (): void => {
    navigate('/')
  }

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearProducts())
    }
  }, [status])

  if (cancellation === 'true') {
    setTimeout(() => {
      handleInitialPage()
    }, 3000)

    return (
      <Loading message="Compra cancelada. Você será redirecionado para a página inicial" />
    )
  }

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={130} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso</p>
            </>
          )}

          {status === 'false' && (
            <>
              <AiOutlineCloseCircle size={130} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleInitialPage}>
            Ir para a página inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
