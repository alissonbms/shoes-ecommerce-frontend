import './header.styles.css'
import { FunctionComponent } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header: FunctionComponent = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">Stylishoes</h2>

      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar conta</div>
        <div className="header-item">
          <AiOutlineShoppingCart size={25} />
          <p>5</p>
        </div>
      </div>
    </div>
  )
}

export default Header
