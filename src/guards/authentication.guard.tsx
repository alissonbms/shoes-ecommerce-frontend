import { FunctionComponent, ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Components
import Header from '../components/header/header.component'
import { Loading } from '../components/loading/loading.component'

interface AuthenticationProps {
  children: ReactNode
}

const Authentication: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 5000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading
          message={
            'Login necessário. Você será redirecionado para a página de login em instantes.'
          }
        />
      </>
    )
  }

  return <>{children}</>
}

export default Authentication
