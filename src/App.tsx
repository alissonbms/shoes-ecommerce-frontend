/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { onAuthStateChanged } from 'firebase/auth'
import { getDocs, collection, where, query } from 'firebase/firestore'
import { FunctionComponent, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { Loading } from './components/loading/loading.component'
import Cart from './components/cart/cart.component'

// Utilities
import { auth, db } from './config/firebase.config'
import { userConverter } from './converters/firestore.converters'

// Pages
import HomePage from './pages/home/Home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import FeaturedProductsPage from './pages/featured-products/featured-products.page'
import ProductsOfCategoryPage from './pages/products-of-category/products-of-category.page'
import CheckoutPage from './pages/checkout/checkout.page'
import Authentication from './guards/authentication.guard'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (isAuthenticated && !user) {
        dispatch({ type: 'LOGOUT_USER' })

        return setIsInitializing(false)
      }

      if (!isAuthenticated && user) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )
        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch({ type: 'LOGIN_USER', payload: userFromFirestore })

        return setIsInitializing(false)
      }

      // !isAuthenticated && !user
      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/featured-products" element={<FeaturedProductsPage />} />
        <Route path="/category/:id" element={<ProductsOfCategoryPage />} />
        <Route
          path="/checkout"
          element={
            <Authentication>
              <CheckoutPage />
            </Authentication>
          }
        />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
      </Routes>

      {/* Global Components - usados na aplicação inteira */}
      <Cart />
    </BrowserRouter>
  )
}

export default App
