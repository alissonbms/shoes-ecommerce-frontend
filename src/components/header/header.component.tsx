import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  HeaderIcons,
  HeaderTag,
  Logo,
  MenuIcon,
  Navlist
} from './header.styles'

interface HeaderProps {
  blackBackground?: boolean
}

const Header: FunctionComponent<HeaderProps> = ({ blackBackground }) => {
  const navigate = useNavigate()

  const handleLogin = (): void => {
    navigate('/login')
  }

  return (
    <HeaderTag blackBackground={blackBackground}>
      <Logo href="#">StyliShoes</Logo>

      <Navlist>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#featured">Categories</a>
        </li>
        <li>
          <a href="#new">Register</a>
        </li>
        <li>
          <a onClick={handleLogin}>Login</a>
        </li>
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
