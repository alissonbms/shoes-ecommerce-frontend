import './header.styles.css'
import { FunctionComponent } from 'react'
// import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header: FunctionComponent = () => {
  return (
    <header>
      <a href="#" className="logo">
        StyliShoes
      </a>

      <ul className="navlist">
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
      </ul>

      <div className="header-icons">
        <a href="#">
          <i className="bx bx-cart"></i>
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  )
}

export default Header
