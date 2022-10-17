import { FunctionComponent, useContext, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/header.component'
import { Loading } from '../components/loading/loading.component'
import { UserContext } from '../contexts/user.context'

interface AuthenticationProps {
  children: ReactNode
}

const Authentication: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useContext(UserContext)

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
