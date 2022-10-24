/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { signOut } from 'firebase/auth'
import { FunctionComponent, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Utilities
import { auth } from '../../config/firebase.config'
import { CartContext } from '../../contexts/cart.context'
import { logoutUser } from '../../store/reducers/user/user.actions'

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
  const { toggleCart, totalQuantity } = useContext(CartContext)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
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
        <a onClick={toggleCart}>
          {totalQuantity > 0 && <span>{totalQuantity}</span>}
          <i className="bx bx-cart"></i>
        </a>
        <MenuIcon className="bx bx-menu"></MenuIcon>
      </HeaderIcons>
    </HeaderTag>
  )
}

export default Header
