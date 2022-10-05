/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { onAuthStateChanged } from 'firebase/auth'
import { getDocs, collection, where, query } from 'firebase/firestore'
import { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Utilities
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.context'
import { userConverter } from './converters/firestore.converters'

// Pages
import HomePage from './pages/home/Home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'

const App: FunctionComponent = () => {
  const { isAuthenticated, login, logout } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    if (isAuthenticated && !user) {
      return logout()
    }

    if (!isAuthenticated && user) {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', user.uid)
        ).withConverter(userConverter)
      )
      const userFromFirestore = querySnapshot.docs[0]?.data()
      return login(userFromFirestore)
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
