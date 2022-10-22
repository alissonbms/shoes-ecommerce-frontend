import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { UserContextProvider } from './contexts/user.context'
import { CategoryContextProvider } from './contexts/category.context'
import { CartContextProvider } from './contexts/cart.context'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <CategoryContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
