import { FunctionComponent } from 'react'

import {
  HeaderIcons,
  HeaderTag,
  Logo,
  MenuIcon,
  Navlist
} from './header.styles'

const Header: FunctionComponent = () => {
  return (
    <HeaderTag>
      <Logo href="#">StyliShoes</Logo>

      <Navlist>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#featured">Categories</a>
        </li>
        <li>
          <a href="#new">Register</a>
        </li>
        <li>
          <a href="#contato">Login</a>
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
