/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { signOut } from 'firebase/auth'
import { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Utilities
import { auth } from '../../config/firebase.config'
import { useAppSelector } from '../../hooks/redux.hooks'
import { toggleCart } from '../../store/reducers/cart/cart.actions'
import { logoutUser } from '../../store/reducers/user/user.actions'
import { selectTotalProductsQuantity } from '../../store/reducers/cart/cart.selectors'

// Styles
import {
  HeaderIcons,
  HeaderTag,
  Logo,
  MenuIcon,
  Navlist
} from './header.styles'

interface HeaderProps {
  personalizedBackground?: boolean
}

const Header: FunctionComponent<HeaderProps> = ({ personalizedBackground }) => {
  const totalProductsQuantity = useAppSelector(selectTotalProductsQuantity)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const handleHome = (): void => {
    navigate('/')
  }

  const handleLogin = (): void => {
    navigate('/login')
  }

  const handleSignUp = (): void => {
    navigate('/sign-up')
  }

  const handleSignOut = async (): Promise<void> => {
    dispatch(logoutUser())
    await signOut(auth)
  }

  const handleCart = (): void => {
    dispatch(toggleCart())
  }

  return (
    <HeaderTag personalizedBackground={personalizedBackground}>
      <Logo onClick={handleHome}>StyliShoes</Logo>

      <Navlist>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#featured">Categories</a>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <a onClick={handleSignUp}>Register</a>
            </li>
            <li>
              <a onClick={handleLogin}>Login</a>
            </li>
          </>
        )}
        {isAuthenticated && (
          <li>
            <a onClick={handleSignOut}>Sair</a>
          </li>
        )}
      </Navlist>

      <HeaderIcons>
        <a onClick={handleCart}>
          {totalProductsQuantity > 0 && <span>{totalProductsQuantity}</span>}
          <i className="bx bx-cart"></i>
        </a>
        <MenuIcon className="bx bx-menu"></MenuIcon>
      </HeaderIcons>
    </HeaderTag>
  )
}

export default Header
