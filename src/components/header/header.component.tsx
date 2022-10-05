/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { signOut } from 'firebase/auth'
import { FunctionComponent, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Utilities
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../contexts/user.context'

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
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)

  const handleHome = (): void => {
    navigate('/')
  }

  const handleLogin = (): void => {
    navigate('/login')
  }

  const handleSignUp = (): void => {
    navigate('/sign-up')
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
            <a onClick={() => signOut(auth)}>Sair</a>
          </li>
        )}
      </Navlist>

      <HeaderIcons>
        <a href="#">
          <i className="bx bx-cart"></i>
        </a>
        <MenuIcon className="bx bx-menu"></MenuIcon>
      </HeaderIcons>
    </HeaderTag>
  )
}

export default Header
